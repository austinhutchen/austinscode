import { Nav } from "../common/navbar";
import { motion } from "framer-motion";

import pdf from "./images/RESUME_SWE.pdf"
import ghicon from "./images/ghicon.png"
import ebayicon from "./images/ebay.png"
import {PDFViewer} from "../common/PDFviewer.jsx"
import "../../css/resume.css"
import "../../App.css"
import React from 'react';

const Body = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.001   } }}>
            <body id="desc">
                <h1 className="hlight">
                    <b> DIRECT WORK EXPERIENCE </b>
                </h1>
      <ul >
  <h3>
                    <b>
                        <u>Calculus 2 Course Assistant (University Of Colorado Boulder) (January 2023 - May 2023)</u>
                    </b>
                </h3>
                <li>
                 < p>
                    <b >
                        Taught and assisted with CALCULUS 2 (MATH 2300) alongside faculty at CU boulder. Also held office
                        hours every week to assist learning of course material.{" "}

                        Recieved 97% positive feedback from 103 participants on end of
                        semester survey.
                    </b>
                 </p>
                </li>

                <h3>
                    <b>
                        <u>Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)</u>
                    </b>
                </h3>
                <li>
                    <p className="projdesc">
                        <b>
                            {" "}
                            Made first company sale as Marketing consultant, worked closely with
                            the software engineering team to achieve forecasted results.{" "}
                        </b>
                    </p>
                </li>
                              <h4>
                    <b>
                        <u>Ebay Electronics Repairs + Reseller (May 2018 -  Now 2023)</u>
                    </b>
                </h4>
<li>
                <p>
                    <b>
                        I sell refurbished and custom-built Apple, Linux, and Windows electronics, have handled over 50 total customer sales to-date with 100% positive feedback rate from 45 customers on ebay. Also handle macbook, iphone, and ipad repairs, as well as Windows PC build requests. You can read the reviews and find my account by <b> <i> <u> clicking the image below: </u></i></b>

                        <h4>
                            <a href="https://www.ebay.com/usr/gadgetsllcc"  target="_blank"
                rel="noreferrer" className="referral">
<img src ={ebayicon} className= "icon"/>
                            </a>
                        </h4>

                    </b>
                </p>

</li>
      <li>
   <h4>
                    <b>
                        <u>Github  Open Source Developer(May 2022 -  Now 2023)</u>
                    </b>
                </h4>
</li>
<li>
                    <b>
                       I contribute to various open source projects and build many of my own, which you can see displayed in detail on my projects page. Of those I have contributed to are Twitter, The Official CU Boulder MATH Github, and<i><u> much more below.</u></i> </b>
                    <b>
                        <h4>
                            <a href= "https://github.com/austinhutchen"  target="_blank"
                rel="noreferrer">
     <img src={ghicon} className="icon" /> 
                            </a>
                        </h4>

                    </b>
                </li>

      

            <br />
            <h1 className="hlight">
                <b><i> OPEN SOURCE CONTRIBUTIONS / FOR FUN</i></b>
            </h1>
<br/>
      
<li>
 <a href="https://leetcode.com/austinhutchen/" target="_blank"
                rel="noreferrer">
               <h4> <b>MY LEETCODE </b> </h4>
            </a>

      </li>
      <li>
 <a href="https://github.com/twitter/the-algorithm/issues/162" target="_blank"
                rel="noreferrer">
               <h4> <b>TWITTER COMPILER OPTIMIZATIONS</b> </h4>
            </a>

</li>
   
            <div>
                <h1 className="hlight">
                    <b><i> FULL RESUME ( in progress)</i></b>
                </h1>

<br/>
    
            </div>


   </ul>
            </body>

      
        </motion.div>
    )
}




export const Resume = () => {


    return (
<>
 <Nav />
   <Body />
        <PDFViewer data ={pdf} /> 

        
      </>
    )

}
