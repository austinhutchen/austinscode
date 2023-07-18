import { Nav } from "./landing";



const PDFViewer = () => {
 return (
  <div style={{textAlign:"center"}}>
   <Nav></Nav>
   <iframe src="/src/images/Recommendation Letter_ Austin.pdf" width="700" height="700" />;
  </div>
 )
 
}

export const Reader = () => {
 return (
  <div >
   <PDFViewer />
  </div>
 );

}

