import React  from 'react';
import { NavBar } from '../common/navbar';

/* ADD GUI CONTROLS FOR USERS*/

export const Visualizer: React.FC = () => {
  const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;
  type Images = Record<string, string>;
  const images: Images = {
    bipolaroutput: getImgPath('bipolarPSUoutput.webp'),
    transformer: getImgPath('audiotransformer.webp'),
    volts: getImgPath('DCvoltage.webp'),
    schematic: getImgPath('IMG_4052.webp')
    // Add other images here
  };

  return (
    <>
      <NavBar />

      <h1 className="hlight"> Welcome to my fun page!</h1>
      <p className="lead"> <b> This page contains a gallery with live demos of more projects, analog circuits, and short tutorials by me! </b> </p>

      <hr className="my-4" />
      <h1>What I've been listening to while soldering lately: (code embedded within iframe)</h1>
      <iframe  src="https://open.spotify.com/embed/track/6k4fYUOeon4DzSuoppDsbO?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <b>
        <h2 className="hlight"> BIPOLAR AC / DC RECTIFIER POWER SUPPLY </h2>
      </b>

      <h4 className="lead" >
        I built a bipolar power supply circuit from scratch using a 24VAC 2A center-tapped transformer and a full-wave rectifier for +/-/ground DC voltage interfacing. I built the circuit using a full bridge rectifier array of diodes, and 16 AWG high-current wire. I built this to use for an audio amplifier project, which needed a bipolar power supply for the most clean and precise audio operation.
      </h4>
      <br />
      <div className="analogCircuits">
        <img src={images.schematic} className="projImg" />
        <img src={images.bipolaroutput} className="projImg" />
        <img src={images.transformer} className="projImg" />
        <img src={images.volts} className="projImg" />
      </div>





      <br />


    </>
  );
};
