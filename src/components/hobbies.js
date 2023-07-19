import { Nav } from "./landing"
export const Hobbies = () => {

 return (
  <div className="App">
   <Nav></Nav>
   <h1>
    A page for my hobbies!
   </h1>
   <Display></Display>
   <img height="500" width="auto" src ="/src/images/me4.jpg"/>
  </div>
 )
}


 const Display=()=>{
// use carousel slide to display hobbies with images
return(
 <div>
<ul className="App">
 <li>
  Coding for embedded systems
 </li>
</ul>

 </div>
)
}