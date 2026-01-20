import React, { Children } from 'react'

const Button = ({ color , setCol , children}) => {

 function setColor(){
    setCol(color)
 }

  return (
    
    
        <button onClick={setColor} style={{backgroundColor : color}} >{children}</button>

    
  )
}

export default Button
