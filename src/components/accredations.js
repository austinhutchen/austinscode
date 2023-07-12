import { Nav } from "./landing";



const PDFViewer = () => {
 return (
  <div>
   <Nav></Nav>
   <iframe src="." width="auto" height ="auto" />;
  </div>
 )

} 

export const Reader = () => {
 return (
  <div className="App">

   <PDFViewer />
  </div>
 );



}

