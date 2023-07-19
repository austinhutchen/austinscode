import { Nav } from "./landing";
import pdf from "./images/Recommendation Letter_ Austin.pdf"



export const PDFViewer = () => {
 return (
  <div style={{textAlign:"center"}} >
   <Nav></Nav>
   <embed src={pdf} height="600" width="500" style={{paddingTop:30}} />
  </div>
 )

}



