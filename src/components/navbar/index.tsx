import React from 'react'
import { NavButton } from '../nav-button'
import { BsPostcard } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../../features/user/userSlice'

export const Navbar = () => {
  const currentUser = useSelector(selectCurrent)

  return (
    <nav>
        <ul className="flex flex-col gap-5">
            <li>
                <NavButton href='/' icon={<BsPostcard />} >
                  Посты
                </NavButton>
            </li>
            <li>
                <NavButton href={`users/${currentUser?.id}/following`} icon={<FiUsers />} >
                  Подписки
                </NavButton>
            </li>
            <li>
                <NavButton href={`users/${currentUser?.id}/followers`} icon={<FaUsers />} >
                  Подписчики
                </NavButton>
            </li>
        </ul>
    </nav>
  )
}
