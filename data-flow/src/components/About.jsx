import React from 'react'

function About(props) {
  console.log(props)
  return (
    <div>
      <h1 style={{backgroundColor:'yellowgreen'}}>About</h1>
      <h2>{props.data}</h2>
    </div>
  )
}

export default About