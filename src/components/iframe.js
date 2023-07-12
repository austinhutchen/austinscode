
import { Nav } from "./helpers";

const Iframe = ({ source }) => {

 if (!source) {
  return <div>Loading...</div>;
 }

 const src = source;
 return (
  // basic bootstrap classes. you can change with yours.
  <div className="col-md-12">
   <div className="emdeb-responsive">
    <iframe src={src}></iframe>
   </div>
  </div>
 );
};

export const Viewer = () => {
 return (
  <div>
   <Nav></Nav>
   <Iframe href={"../images/Recommendation Letter_ Austin.pdf"} />
  </div>
 )

}
