// export a component that uses a window to read from leter of recommendation pdf file
import { Iframe } from "./iframe"


export const Reader = () => {
 return (
  <div className="App">
      <h1>react</h1>
      <Iframe href={"../images/Recommendation Letter_ Austin.pdf"} />
  </div>
);



}
