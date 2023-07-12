import {Nav} from "../components/helpers"

 const Viewer = () => {
 return (
  <div>
   <Nav></Nav>
   <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" width="auto" height ="auto" />;
  </div>
 )

}

export const Reader = () => {
 return (
  <div className="App">

   <Viewer />
  </div>
 );



}
