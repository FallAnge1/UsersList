import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const UserDetail = () => {
  const { id } = useParams()
  const [user, setUser] = useState()

  useEffect(() => {
    fetch(`/users.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка загрузки данных')
        }
        return res.json()
      })
      .then((data) => {
        const foundUser = data.find((user) => user.id.toString() === id)
        setUser(foundUser)
      })
      .catch((error) => console.error(error))
  }, [id])

  if (!user) {
    return <div className="mt-24 font-extrabold">Загрузка...</div>
  }

  return (
    <div className="my-24 bg-dark p-5 lg:p-20 rounded-2xl flex flex-col md:flex-row gap-10">
      <div>
        <img
          src={user.img}
          alt="user image"
          className="w-[100px] h-[100px] rounded-xl"
        />
      </div>
      <div>
        <h1 className="font-black text-3xl text-danger lg:text-7xl mb-5">
          {user.name}
        </h1>
        <div className="leading-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary">Пол -- </span>
            <stamp>
              <p>{user.gender}</p>
            </stamp>
          </div>
          <div className="flex  gap-2">
            <span className="font-bold text-secondary">Цитата </span>
            <p>{user.words}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary">Компания -- </span>
            <stamp>
              <p>{user.company}</p>
            </stamp>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-secondary">Специальность -- </span>
            <p className="flex flex-wrap">{user.job}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary">Навык -- </span>
            <stamp>
              <p className="flex flex-wrap">{user.skills}</p>
            </stamp>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-secondary">Университет </span>
            <p>{user.university}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary">Язык -- </span>
            <stamp>
              <p>{user.language}</p>
            </stamp>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
