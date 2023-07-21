import { Nav } from "./landing";
import pdf from "./images/Recommendation Letter_ Austin.pdf"



export const PDFViewer = () => {
 return (
  <div className="App" >
   <Nav></Nav>
   <h1><b><i><u>Letter of Accredation from Math PHD @ CU Boulder</u></i></b></h1>
   <br></br>
   <embed src={pdf} height="600" width="500" style={{ paddingTop: 15 }} />
  </div>
 )

}



