import React from 'react';
import { Nav } from '../common/navbar.tsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface ViewData {
  data: string[];
}

const ImageList: React.FC<{ images: string[] }> = ({ images }) => (
  <ul>
    {images.map((src, index) => (
      <li key={`img_${index}`}>
        <img
          src={src}
          className="format-img"
          style={{ height: "85svh",  maxWidth: "90%" }}
          loading="lazy"
          alt={`Image_${index}`}
        />
      </li>
    ))}
  </ul>
);

 export const View: React.FC<ViewData> = ({ data }) => {
  const mathPhDStudents = data[0];
  const studentComments1 = data.slice(4, 6);
  const studentComments2 = data.slice(2, 4);

  return (
    <>
      <Nav />
      <div className="accreditations">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}
          >
            <h1 className="hlight"><b>~ACCREDITATIONS~ </b></h1>
            <br />
            <ul>
              <li>
                <h2 className="hlight-mini">
                  <b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b>
                </h2>
                <br />
                <img
                  src={mathPhDStudents}
                  style={{ height: "85svh", maxWidth: "90%" }}
                  loading="eager"
                  alt="Math_PhD_Students_Letter"
                />
              </li>

              <li>
                <h2 className="hlight-mini">
                  <b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b>
                </h2>
                <br />
                <div>
                  <ImageList images={studentComments1} />
                  <ImageList images={studentComments2} />
                </div>
              </li>
            </ul>
          </m.div>
        </LazyMotion>
      </div>
    </>
  );
};

