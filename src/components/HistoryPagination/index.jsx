import React from 'react'

function HistoryPagination(props) {
  const { pagination, onPageChange } = props
  const { page, limit, total } = pagination
  const totalPages = Math.ceil(total / limit)

  const handlePageChange = (newPage) => {
    if (!onPageChange) return
    onPageChange(newPage)
  }

  return (
    <div className='flex space-x-3 items-end pr-4 lg:p0'>
      <span className='text-2xl'>
        {totalPages === 0 ? `0/${totalPages}` : `${page}/${totalPages}`}
      </span>
      <button
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
        className='py-2 px-4 bg-sky-500 disabled:bg-gray-300 text-white disabled:text-gray-600 rounded-md font-medium'>
        Trước
      </button>
      <button
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
        className='py-2 px-4 bg-sky-500 disabled:bg-gray-300 text-white disabled:text-gray-600 rounded-md font-medium'>
        Tiếp
      </button>
    </div>
  )
}

export default HistoryPagination
