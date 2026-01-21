
import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Layout from './components/Layout'

function App() {
 
  const[data ]=useState("Yadav Nikhil")
  const[msg ,setMsg]=useState("")

  function getMsg(dedo){
 setMsg(dedo)
  }
 


  return (
    <>
     <div style={{
      display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '8rem',
      }}>
    
     <Layout  data={data} kabutar={getMsg}/>
      <Header data={data}/>
     <Footer  data={data}/> 
     <h1>{msg}</h1>
     </div>
    </>
  )
}

export default App
