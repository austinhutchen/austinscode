import { Nav } from "../common/navbar";
import { PDFViewer } from "../common/PDFviewer";
import { Footer } from "../common/footer";


export const View = (props) => {
    return (
        <section className="App">
            <Nav />
            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD @CU:</u></i></b></h1>
            <PDFViewer data={props.data} />
            <PDFViewer data={''} />
            <Footer />
        </section>
    )
}
