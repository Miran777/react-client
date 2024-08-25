import React from "react"
import { useSelector } from "react-redux"
import { selectCurrent } from "../../features/user/userSlice"
import { Link, useParams } from "react-router-dom"
import { Card, CardBody } from "@nextui-org/react"
import { User } from "../../components/user"
import { useGetUserByIdQuery } from "../../app/services/userApi"

export const Followers = () => {
  const currentUser = useSelector(selectCurrent)
  const { id } = useParams<{ id: string }>()
  const { data } = useGetUserByIdQuery(id ?? "")

  if (!data) {
    return null
  }

  return data.followers.length > 0 ? (
    <div className="gap-5 flex flex-col">
      {data.followers.map(user => (
        <Link to={`/users/${user.follower.id}`} key={user.follower.id}>
          <Card>
            <CardBody className="block">
              <User
                name={user.follower.name ?? ""}
                avatarUrl={user.follower.avatarUrl ?? ""}
                description={user.follower.email ?? ""}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  ) : (
    <h1>
      {currentUser?.id === data.id
        ? "У вас нет подписчиков"
        : "У данного пользователя нет подписчиков"}
    </h1>
  )
}
