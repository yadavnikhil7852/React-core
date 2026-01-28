import React from 'react'

function Popup({heading , para }) {
  return (
    <div className='border-2 p-10 rounded-xl border-blue-500'>
      <h2 className='text-2xl'>{heading}</h2>
      <p className='mt-2'>Are you sure you want to {para} this</p>
      <div className='flex items-center-safe justify-center-safe gap-5 mt-2'><button className='bg-red-500 text-white'>No</button><button className='bg-green-500 text-white'>Yes</button></div>
    </div>
  )
}

export default Popup