import React from 'react'
import { formatDateHistory } from '../../utils/DateUtils'
import { v4 as uuidv4 } from 'uuid'

function HistoryList(props) {
  const { sensorDataList, id } = props
  let itemId = id
  let mobileId = id

  return (
    <>
      <div className='mt-4 overflow-auto rounded-lg shadow hidden md:block'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>No.</th>
              <th className='w-20 p-1 text-lg font-semibold tracking-wide text-left'>Loại</th>
              <th className='p-3 text-lg font-semibold tracking-wide text-left'>Chi Tiết</th>
              <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Giá trị</th>
              <th className='w-36 p-3 text-lg font-semibold tracking-wide text-left'>Trạng thái</th>
              <th className='w-64 p-3 text-lg font-semibold tracking-wide text-left'>Thời gian</th>
            </tr>
          </thead>
        </table>
        {sensorDataList.map((sensorData) => {
          itemId = itemId + 1
          const type = sensorData.type
          return (
            <table className='w-full' key={uuidv4()}>
              <thead>
                <tr>
                  <th className='w-20'></th>
                  <th className='w-20'></th>
                  <th className=''></th>
                  <th className='w-20'></th>
                  <th className='w-36'></th>
                  <th className='w-64'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr className={sensorData.event === 'normal' ? 'bg-green-50' : 'bg-red-50'}>
                  <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                    <span className='font-bold'>{itemId}</span>
                  </td>
                  <td className='whitespace-nowrap p-1 text-lg text-gray-700'>
                    {type === 'temperature' ? (
                      <span className='text-tempColor font-medium'>Nhiệt độ</span>
                    ) : type === 'co' ? (
                      <span className='text-coColor font-medium'>CO</span>
                    ) : type === 'no2' ? (
                      <span className='text-no2Color font-medium'>
                        NO<sub>2</sub>
                      </span>
                    ) : type === 'ch4' ? (
                      <span className='text-ch4Color font-medium'>
                        CH<sub>4</sub>
                      </span>
                    ) : type === 'pm1' ? (
                      <span className='text-dust font-medium'>PM1.0</span>
                    ) : type === 'pm10' ? (
                      <span className='text-dust font-medium'>PM10.0</span>
                    ) : (
                      <span className='text-dust font-medium'>PM2.5</span>
                    )}
                  </td>
                  <td className='whitespace-nowrap p-3 text-lg text-gray-700'>{sensorData.msg}</td>
                  <td className='whitespace-nowrap p-3 text-lg text-gray-700 text-right'>
                    <span>{sensorData.value} </span>
                    {type === 'temperature' ? (
                      <span>°C</span>
                    ) : type === 'no2' || type === 'co' || type === 'ch4' ? (
                      <span>
                        mg/m<sup>3</sup>
                      </span>
                    ) : (
                      <span>
                        &#181;g/m<sup>3</sup>
                      </span>
                    )}
                  </td>
                  <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                    <span
                      className={
                        sensorData.event === 'normal'
                          ? 'p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'
                          : 'p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'
                      }>
                      {sensorData.event === 'normal' ? 'Bình thường' : 'Bất thường'}
                    </span>
                  </td>
                  <td className='whitespace-nowrap p-3 text-lg text-gray-700'>
                    {formatDateHistory(sensorData.time)}
                  </td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>

      <div className='mt-4 pr-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        {sensorDataList.map((sensorData) => {
          mobileId = mobileId + 1
          const type = sensorData.type
          return (
            <div
              className={
                sensorData.event === 'normal'
                  ? 'bg-green-50 space-y-3 p-4 rounded-lg shadow'
                  : 'bg-red-50 space-y-3 p-4 rounded-lg shadow'
              }
              key={uuidv4()}>
              <div>
                {type === 'temperature' ? (
                  <span className='text-xl text-tempColor font-bold'>Nhiệt độ</span>
                ) : type === 'co' ? (
                  <span className='text-xl text-coColor font-bold'>CO</span>
                ) : type === 'no2' ? (
                  <span className='text-xl text-no2Color font-bold'>
                    NO<sub>2</sub>
                  </span>
                ) : type === 'ch4' ? (
                  <span className='text-xl text-ch4Color font-bold'>
                    CH<sub>4</sub>
                  </span>
                ) : type === 'pm1' ? (
                  <span className='text-xl text-dust font-bold'>PM1.0</span>
                ) : type === 'pm10' ? (
                  <span className='text-xl text-dust font-bold'>PM10.0</span>
                ) : (
                  <span className='text-xl text-dust font-bold'>PM25.0</span>
                )}
              </div>
              <div className='flex items-center space-x-6 text-md'>
                <div>
                  <span className='text-black font-bold'>#{mobileId}</span>
                </div>
                <div>
                  <span className='text-gray-500'>{formatDateHistory(sensorData.time)}</span>
                </div>
                <div>
                  <span
                    className={
                      sensorData.event === 'normal'
                        ? 'p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'
                        : 'p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'
                    }>
                    {sensorData.event === 'normal' ? 'Bình thường' : 'Bất thường'}
                  </span>
                </div>
              </div>
              <div>
                <span className='text-xl text-gray-700'>{sensorData.msg}</span>
              </div>
              <div>
                <span className='text-lg font-medium text-black'>
                  <span>{sensorData.value} </span>
                  {type === 'temperature' ? (
                    <span>°C</span>
                  ) : type === 'no2' || type === 'co' || type === 'ch4' ? (
                    <span>
                      mg/m<sup>3</sup>
                    </span>
                  ) : (
                    <span>
                      &#181;g/m<sup>3</sup>
                    </span>
                  )}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HistoryList
