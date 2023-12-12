import React from 'react';
import { Nav } from '../common/navbar.tsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface ViewData {
  data: string[];
}

export const View: React.FC<ViewData> = ({ data }) => {
  return (
    <>
      <Nav />
      <div className="accredidations">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}
          >
            <h1 className="hlight"><b>~ACCREDIDATIONS~ </b></h1>

            <br />
            <ul>
              <li>
                <h2 className="hlight-mini"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h2>
                <br />
                <img src={data[0]} style={{ height: "55dvh", width: "0 auto" }} loading="eager" />
              </li>

              <li>
                <h2 className="hlight-mini"><b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b></h2>
                <br />
                <div>
                  <ul>
                    <li>
                      {data.slice(4, 6).map((src, index) => (
                        <img key={`img_${index}`} src={src} className="format-img"  style={{ height: "55dvh", width: "0 auto" }} loading="lazy" height="auto" width="auto" />
                      ))}
                    </li>
                    <li>
                      {data.slice(2, 4).map((src, index) => (
                        <img key={`img_${index}`} src={src} className="format-img"  style={{ height: "55dvh", width: "0 auto" }} loading="lazy" height="auto" width="auto" />
                      ))}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </m.div>
        </LazyMotion>
      </div>
    </>
  );
};



