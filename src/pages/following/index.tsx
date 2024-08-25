import React from "react"
import { Link, useParams } from "react-router-dom"
import { Card, CardBody } from "@nextui-org/react"
import { User } from "../../components/user"
import { useGetUserByIdQuery } from "../../app/services/userApi"
import { useSelector } from "react-redux"
import { selectCurrent } from "../../features/user/userSlice"

export const Following = () => {
  const currentUser = useSelector(selectCurrent)
  const { id } = useParams<{ id: string }>()
  const { data } = useGetUserByIdQuery(id ?? "")
  
  if (!data) {
    return null
  }

  return data.following.length > 0 ? (
    <div className="gap-5 flex flex-col">
      {data.following.map(user => (
        <Link to={`/users/${user.following.id}`} key={user.following.id}>
          <Card>
            <CardBody className="block">
              <User
                name={user.following.name ?? ""}
                avatarUrl={user.following.avatarUrl ?? ""}
                description={user.following.email ?? ""}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  ) : (
    <h1>
      {currentUser?.id === data.id
        ? "У вас нет подписок"
        : "У данного пользователя нет подписчиков"}
    </h1>
  )
}
