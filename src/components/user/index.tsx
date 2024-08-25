import React from 'react'
import { User as NextUiUser } from '@nextui-org/react'
import { BASE_URL } from '../../constans'

type Props = {
    name: string
    avatarUrl: string
    description?: string
    classname?: string
}

export const User: React.FC<Props> = ({
    name = '',
    avatarUrl = '',
    description = '',
    classname = ''
}) => {
  return (
    <NextUiUser
        name={name}
        className={classname}
        description={description}
        avatarProps={{
            src: `${BASE_URL}${avatarUrl}`
        }}
    />
  )
}
