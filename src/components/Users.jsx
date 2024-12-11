import React from 'react'
import UserCard from '../components/UserCard'
const Users = ({ users, onSort }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold">Сортировать по : </p>
        <div className="flex gap-5">
          <button
            className="px-5 py-2 lg:px-10 lg:py-3 bg-dark rounded-full"
            onClick={() => onSort('name')}>
            Имя
          </button>
          <button
            className="px-5 py-2 lg:px-10 lg:py-3 bg-dark rounded-full"
            onClick={() => onSort('gender')}>
            Пол
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
