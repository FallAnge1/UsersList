import React from 'react'

const Pagination = ({ totalPages, itemsInPage, paginate, currentPage }) => {
  const pages = []
  for (let i = 1; i <= Math.ceil(totalPages / itemsInPage); i++) {
    pages.push(i)
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 my-10">
      <ul className="flex flex-wrap gap-2 justify-center">
        {pages.map((page) => (
          <li
            className={`font-arial w-10 h-10 p-2 hover:opacity-80 flex justify-center items-center  rounded-sm border border-secondary text-sm sm:text-base md:text-lg ${
              currentPage === page
                ? 'bg-primary text-dark font-black'
                : ' bg-dark font-bold'
            }`}
            key={page}
            onClick={() => paginate(page)}>
            {page}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
