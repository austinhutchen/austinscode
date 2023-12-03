import React from 'react'
import { Nav } from "../common/navbar.tsx";
import { m } from "framer-motion";


export const View = (props) => {
    return (
        <>
            <Nav />

            <m.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                                    <h1 className="hlight"><b>~ACCREDIDATIONS~ </b></h1>


                    <br/>
<ul>


<li>

 <h2 className="hlight-mini"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h2>
<br/>
                    <img src={props.data[0]} style={{ height: "55dvh", width: "0 auto" }} loading="eager" />

</li>




<li>



</li>
          </ul>         


            <h2 className="hlight-mini"><b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b></h2>
            <br />
            <div className="format-img">
                <ul>
                    <li>
                        <img src={props.data[5]} className="format-img" loading="lazy" height="auto" width="auto" />

                        <img src={props.data[4]} className="format-img" loading="lazy" height="auto" width="auto" />





                    </li>
                    <li>

                        <img src={props.data[2]} className="format-img" loading="lazy" height="auto" width="auto" />
                        <img src={props.data[3]} className="format-img" loading="lazy" height="auto" width="auto" />

                    </li>



                </ul>

            </div>

            </m.div>





        </>
    )
}







