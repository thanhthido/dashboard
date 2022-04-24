import React from 'react'

function TempHistory() {
  return (
    <>
      <div className='mt-4 overflow-auto rounded-lg shadow hidden md:block'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>No.</th>
              <th className='p-3 text-lg font-semibold tracking-wide text-left'>Chi Tiết</th>
              <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Giá trị</th>
              <th className='w-36 p-3 text-lg font-semibold tracking-wide text-left'>Trạng thái</th>
              <th className='w-64 p-3 text-lg font-semibold tracking-wide text-left'>Thời gian</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-green-50'>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                <span className='font-bold'>1</span>
              </td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>Nhiệt độ bình thường</td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                29<span>°C</span>
              </td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                <span className='p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'>
                  Bình thường
                </span>
              </td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                24/04/2022 01:20:25 PM
              </td>
            </tr>
            <tr className='bg-red-50'>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                <span className='font-bold'>2</span>
              </td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>Nhiệt độ tăng cao</td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                50<span>°C</span>
              </td>
              <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                <span className='p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'>
                  Lỗi
                </span>
              </td>
              <td className='p-3 text-lg text-gray-700'>24/04/2022 04:20:25 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-4 pr-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        <div className='bg-green-50 space-y-3 p-4 rounded-lg shadow'>
          <div className='flex items-center space-x-6 text-md'>
            <div>
              <span className='text-black font-bold'>#1</span>
            </div>
            <div>
              <span className='text-gray-500'>24/04/2022 01:20:25 PM</span>
            </div>
            <div>
              <span className='p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'>
                Bình thường
              </span>
            </div>
          </div>
          <div>
            <span className='text-xl text-gray-700'>Nhiệt độ bình thường</span>
          </div>
          <div>
            <span className='text-lg font-medium text-black'>
              29 <span>°C</span>
            </span>
          </div>
        </div>
        <div className='bg-red-50 space-y-3 p-4 rounded-lg shadow'>
          <div className='flex items-center space-x-6 text-md'>
            <div>
              <span className='text-black font-bold'>#2</span>
            </div>
            <div>
              <span className='text-gray-500'>24/04/2022 04:20:25 PM</span>
            </div>
            <div>
              <span className='p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'>
                Lỗi
              </span>
            </div>
          </div>
          <div>
            <span className='text-xl text-gray-700'>Nhiệt độ tăng cao</span>
          </div>
          <div>
            <span className='text-lg font-medium text-black'>
              50 <span>°C</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TempHistory
