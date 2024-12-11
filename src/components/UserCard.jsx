import React from 'react'
import { useNavigate } from 'react-router'

const UserCard = ({ user }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/user/${user.id}`)
  }
  return (
    <div
      className="flex flex-col bg-dark rounded-lg p-3 border border-secondary"
      onClick={handleClick}>
      <div className="flex justify-center items-center">
        <img
          src={user.img}
          alt="user img"
          className="w-[50px] h-[50px] rounded-full mb-4"
        />
      </div>
      <div>
        <h1 className="font-bold text-sm text-danger mb-2">{user.name}</h1>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 text-xs">
            <span className="font-bold text-secondary">Пол: </span>
            <p>{user.gender}</p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="font-bold text-secondary">Компания: </span>
            <p>{user.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
