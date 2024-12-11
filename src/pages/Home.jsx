import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Users from '../components/Users'
import PaginationBtns from '../components/PaginationBtns'

const Home = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsInPage] = useState(10) // Вот здесь можете сменить количество показов
  const [sortedUsers, setSortedUsers] = useState([])
  const [sortDirection, setSortDirection] = useState('asc')

  useEffect(() => {
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка загрузки данных')
        }
        return res.json()
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error(error))
  }, [])

  const LastItemIndex = currentPage * itemsInPage
  const FirstItemIndex = LastItemIndex - itemsInPage
  const currentUsers = (sortedUsers.length > 0 ? sortedUsers : users).slice(
    FirstItemIndex,
    LastItemIndex
  )

  const totalPages = Math.ceil(users.length / itemsInPage)

  const paginate = (pageNum) => {
    setCurrentPage(pageNum)
  }

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1
      }
      return prev
    })
  }
  const prevPage = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1
      }
      return prev
    })
  }

  const handleSort = (path) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc'
    setSortDirection(direction)

    const sorted = [...users].sort((a, b) => {
      if (direction === 'asc') {
        return a[path] < b[path] ? 1 : -1
      } else {
        return a[path] > b[path] ? 1 : -1
      }
    })
    setSortedUsers(sorted)
  }

  return (
    <div className="mt-24">
      <h1 className="text-center font-black text-2xl mb-6">
        Список пользователей
      </h1>
      <Users
        users={currentUsers}
        onSort={handleSort}
      />
      <div className="flex items-center justify-center gap-5">
        <button
          className="w-10 h-10 p-2 rounded-sm bg-primary text-dark"
          onClick={prevPage}>
          {'<'}
        </button>
        <Pagination
          totalPages={users.length}
          itemsInPage={itemsInPage}
          paginate={paginate}
          currentPage={currentPage}
        />
        <button
          className="w-10 h-10 p-2 rounded-sm bg-primary text-dark"
          onClick={nextPage}>
          {'>'}
        </button>
      </div>

      {/* <PaginationBtns
        prevPage={prevPage}
        nextPage={nextPage}
      /> */}
    </div>
  )
}

export default Home
