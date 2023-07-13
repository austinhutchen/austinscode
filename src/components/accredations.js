import { Nav } from "./landing";



const PDFViewer = () => {
 return (
  <div>
   <Nav></Nav>
   <iframe src="." width="700" height ="700" />;
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

