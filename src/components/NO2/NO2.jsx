import React from 'react'

NO2.propTypes = {}

function NO2(props) {
	const { no2 } = props
	return (
		<div className='cursor-pointer border rounded-lg bg-teal-50  py-10 shadow-lg'>
			<div className='font-medium text-center tracking-wider'>
				<img
					src='/image/air.svg'
					alt=''
					className='w-12 h-12 inline-block mr-2 mb-4'
				/>
				<h1 className='inline-block text-3xl'>Nồng độ khí NO2</h1>
			</div>
			<p className='text-center text-4xl md:text-5xl lg:text-6xl py-3'>
				{no2} <span className='text-4xl lg:text-5xl'>ug/m3</span>
			</p>
		</div>
	)
}

export default NO2