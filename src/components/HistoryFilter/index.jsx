import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function HistoryFilter(props) {
  const { onFilterChange } = props

  const [typeDropDownState, setTypeDropDownState] = useState('Tất cả thông số')
  const [eventDropDownState, setEventDropDownState] = useState('Tất cả trạng thái')

  const typeSelectHandler = (type = 'Tất cả thông số', event = 'Tất cả trạng thái') => {
    setTypeDropDownState(type)
    setEventDropDownState(event)

    let typeToSearch = 'all'
    let eventToSearch = 'all'

    if (type === 'Nhiệt độ') {
      typeToSearch = 'temperature'
    }
    if (type === 'CO') {
      typeToSearch = 'co'
    }
    if (type === 'NO2') {
      typeToSearch = 'no2'
    }
    if (type === 'CH4') {
      typeToSearch = 'ch4'
    }
    if (type === 'PM1.0') {
      typeToSearch = 'pm1'
    }
    if (type === 'PM2.5') {
      typeToSearch = 'pm25'
    }
    if (type === 'PM10.0') {
      typeToSearch = 'pm10'
    }

    if (event === 'Tất cả trạng thái') {
      eventToSearch = 'all'
    }
    if (event === 'Bình thường') {
      eventToSearch = 'normal'
    }
    if (event === 'Bất thường') {
      eventToSearch = 'error'
    }
    onFilterChange(typeToSearch, eventToSearch)
  }

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='mt-4 w-full flex flex-col space-y-2 md:space-x-2 md:flex-row justify-end pr-4 lg:pr-0'>
      <div className='self-end'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
              {typeDropDownState}
              <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('Tất cả thông số', eventDropDownState)}>
                      Tất cả thông số
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('Nhiệt độ', eventDropDownState)}>
                      Nhiệt độ
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('NO2', eventDropDownState)}>
                      NO<sub>2</sub>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('CO', eventDropDownState)}>
                      CO
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('CH4', eventDropDownState)}>
                      CH<sub>4</sub>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('PM1.0', eventDropDownState)}>
                      PM1.0
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('PM2.5', eventDropDownState)}>
                      PM2.5
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler('PM10.0', eventDropDownState)}>
                      PM10.0
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='self-end'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
              {eventDropDownState}
              <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler(typeDropDownState, 'Tất cả trạng thái')}>
                      Tất cả trạng thái
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler(typeDropDownState, 'Bình thường')}>
                      Bình thường
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#!'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-md'
                      )}
                      onClick={() => typeSelectHandler(typeDropDownState, 'Bất thường')}>
                      Bất thường
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default HistoryFilter
