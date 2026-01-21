import React from 'react'

function ColorBox({color="transparent"}) {
  return (
   
    <div style={{backgroundColor : color }} className='w-100 h-100 bg-amber-500 mt-7 rounded-xl font-extrabold items-center justify-center m-auto border-2 border-black content-center'>{color}</div>
  )
}

export default ColorBox