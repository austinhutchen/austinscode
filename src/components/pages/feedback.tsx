import React from 'react';
import { NavBar } from '../common/navbar';

const rec_letter = process.env.PUBLIC_URL+'/fast_imgs/REC_LETTER.png';

const inclusion = process.env.PUBLIC_URL+'/fast_imgs/inclusion.webp';
const support = process.env.PUBLIC_URL+'/fast_imgs/support.webp';




const ImageList: React.FC<{ images: string[] }> = ({ images }) => (
  <ul>
    {images.map((src, index) => (
      <li key={`img_${index}`}>
        <img
          src={src}
          className="format-img"
          style={{ maxHeight: "70svh", maxWidth: "70svh" }}
          loading="eager"
          alt={`Image_${index}`}
        />
      </li>
    ))}
  </ul>
);

 export const Feedback: React.FC = () => {
  const mathPhDStudents = rec_letter;

const data = [inclusion,support]

  return (
    <>
      <NavBar />
      <div className="accreditations">
          <div className='feedback'>
            <h1 className="hlight"><b>~FEEDBACK~ </b></h1>
            <br />
            <ul>
              <li>
                <h2 className="hlight-mini">
                  <b><i><u>Letter of Rec from MATH PHD Ezzedine El Sai:</u></i></b>
                </h2>
                <br />
                <img
                  src={mathPhDStudents}
                  style={{ maxHeight: "65svh", maxWidth: "100%" }}
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
                  <ImageList images={data} />
                </div>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

