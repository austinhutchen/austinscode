import React from 'react'
import { Nav } from "../common/navbar.tsx";
import { motion } from "framer-motion";


export const View = (props) => {
    return (
        <>
            <Nav />

            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>

                <section>
                    <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h1>
                    <br />
                    <img src={props.data[0]} className="format-img" loading="eager" />

                </section>

            </motion.div>
            <h1 className="hlight"><b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b></h1>
            <br />
<ul>
<li className="accredidation">

  <img src={props.data[1]} className="format-img" loading="lazy" height="140vh" width="auto" />
            <img src={props.data[2]} className="format-img" loading="lazy" height ="140vh" width="auto" />
            <img src={props.data[3]} className="format-img" loading="lazy" height ="140vh" width="auto"/>

</li>
</ul>

          





        </>
    )
}







