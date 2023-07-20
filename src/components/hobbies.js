import { Nav } from "./landing"
import img from "./images/me4.jpg"

export const Hobbies = () => {

 return (
  <div className="App">
   <Nav></Nav>
   <h1>
    A page for my hobbies!
   </h1>
   <Display></Display>
   <img src={img} height="500" width="auto"   />

  </div>
 )
}


const Display = () => {
 // use carousel slide to display hobbies with images
 return (
  <div className="App">


  </div>
 )
}