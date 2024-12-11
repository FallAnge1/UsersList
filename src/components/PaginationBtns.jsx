import React from 'react'

const PaginationBtns = ({ prevPage, nextPage }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="p-3 mr-5 rounded-sm bg-primary text-dark"
        onClick={prevPage}>
        {'<'}
      </button>
      <button
        className="p-3 rounded-sm bg-primary text-dark"
        onClick={nextPage}>
        {'>'}
      </button>
    </div>
  )
}

export default PaginationBtns
