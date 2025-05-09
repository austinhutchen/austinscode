import React from 'react';
import { NavBar } from '../common/navbar';

/* ADD GUI CONTROLS FOR USERS*/

export const Visualizer: React.FC = () => {
  const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;
  type Images = Record<string, string>;
  const images: Images = {
    bipolaroutput: getImgPath('bipolarPSUoutput.webp'),
    transformer: getImgPath('IMG_4393.webp'),
    volts: getImgPath('DCvoltage.webp'),
    schematic: getImgPath('IMG_4052.webp'),
    oscillator: getImgPath('OSC.webp'),
    osc2: getImgPath('OSC2.webp'),
    sqr: getImgPath('Sqr.webp'),
    waterer: getImgPath('PLANT_KERNEL.mp4')
    // Add other images here
  };

  return (
    <>
      <NavBar />

      <h2 className="hlight"> Welcome to my Lab!</h2> <br/>
      <h3 className="hlight"> <b> This page contains a gallery with live demos of more projects, analog/digital circuits, and short tutorials by me! </b> </h3> <br/>
     <a href="https://github.com/austinhutchen/circuits" rel="nopener noreferrer"><h3>Full repository with all circuit schematics in PDF format</h3></a>
      <br/>
          <b>
        <h1 className="hlight"> AUTOMATIC PLANT IRRIGATION SYSTEM (ESP32) </h1>
      </b>
      <br />

     <div className="projDesc">
<div className="fadeSide">


          <p> Built a <a href="https://github.com/austinhutchen/autoIrrigation32">plant waterer system </a>with an ESP32 microcontroller and 7V Relay water tube pump that opened or closed to push water into the plant. It made this decision depending on the moisture threshold reading from a capacative soil moisture detector. It also has an option for battery powered operation, in which a 9V battery can power the system for a full week.          </p>
</div>     
</div>
<br/>
        <div className="analogCircuits" >
        <video autoPlay src={images.waterer} playsInline webkit-playsinline loop muted controls  className="projImg" >
        </video>
         </div>


    <br/>
         <b>
        <h1 className="hlight"> 6.5MHZ QUARTZ CRYSTAL OSCILLATOR (CD40106BE)</h1>
      </b>  
        <div className="projDesc">
<div className="fadeSide">

          <p> Built my own 12-Volt 6MHZ Colpitts oscillator circuit with a <a href="https://github.com/austinhutchen/datasheets/blob/main/docs/CD40106BE.pdf" rel="noopener noreferrer"> Schmidt Trigger Inverter IC </a> and a 6.5MHZ quartz crystal. Thanks to the usage of a quartz crystal, the oscillator is highly precise, and can be used as a digital reference clock for other devices. It generates a true AC square wave with zero crossings, as shown below. 
          </p>
</div>     
</div>
<br/>
      <div className="analogCircuits">
          <img loading="eager" src={images.oscillator} className="projImg" />
        <img loading="eager" src={images.osc2} id="rotate-90"  className="projImg"  />
              <img loading="eager" src={images.sqr} className="projImg"  />

      </div>
      
<br/>

       <b>
        <h2 className="hlight"> BIPOLAR LINEAR POWER SUPPLY </h2>
      </b>

     <div className="projDesc">
<div className="fadeSide">


          <p> Built a linear bipolar power supply circuit using a 40VAC 2A center-tapped transformer and a diode-grid full-wave rectifier for +/-/ground DC voltage interfacing. I built the circuit using a full bridge rectifier array of diodes, and 16 AWG high-current wire. I built this to use for an audio amplifier project, which needed a bipolar power supply for the most clean and precise audio operation.
          </p>
</div>     
</div>
<br/>
        <div className="analogCircuits" >
        <img  id="rotate-90" style={{maxHeight:'40svh'}} src={images.schematic}  className="projImg" />
        <img  src={images.bipolaroutput} className="projImg"/>
        <img src={images.volts} className="projImg"/>
        </div>



    </>
  );
};
