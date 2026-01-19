import About from "./About"
import Hero from "./Hero"

 function Layout(props){
console.log(props)
props.kabutar("child ka data")
  return(
    <>
    <div style={{backgroundColor:"blue", color:"white"} }>
      <p>this is a layout</p>
      <Hero data={props.data}/>
    <About data={props.data}/>
    </div>
    
    </>
  )
 }
 export default Layout