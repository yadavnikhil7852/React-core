import React from 'react'

function Hero(props) {
  console.log(props)
  return (
    <div>
      <h1 style={{backgroundColor:'red'}}>Hero</h1>
      <h2>{props.data}</h2>
    </div>
  )
}

export default Hero