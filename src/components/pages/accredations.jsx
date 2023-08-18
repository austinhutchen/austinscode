import {Nav} from "../common/navbar";
import { PDFViewer } from "../common/PDFviewer";



export const View = (props) => {  
    return (
        <>
            <Nav/>
            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD @CU:</u></i></b></h1>
            <PDFViewer data={props.data}/>
            <PDFViewer data={''}/>

        </>
    )
}
