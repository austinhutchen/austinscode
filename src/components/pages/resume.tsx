import { Nav } from "../common/navbar.tsx";
import { motion } from "framer-motion";
import "../../css/resume.scss"

const Body = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
              <h1 className="hlight">
                    <b> DIRECT WORK EXPERIENCE </b>
                </h1>
              
                <ul style={{ paddingTop: '0.6em' }} className="projectdesc" >
                    <h2 className="hlight-mini">
                        <b>
                            <u>Calculus 2 Course Assistant (University Of Colorado Boulder) (January 2023 - May 2023)</u>
                        </b>
                    </h2>
                    <li>
                        < h3  >
                            Taught and assisted with CALCULUS 2 (MATH 2300) alongside faculty at CU boulder. Also held office
                            hours every week to assist learning of course material.{" "}

                            Recieved 97% positive feedback from 63 participants on end of
                            semester survey.
                        </h3>
                    </li>
<br/>
                    <h2 className="hlight-mini">
                        <b>
                            <u>Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)</u>
                        </b>
                    </h2>
                    <li>
                        <h3 >
                            {" "}
                            Made first company sale as Marketing consultant, worked closely with
                            the software engineering team to achieve forecasted results. See my most popular medium article, and other (science, environment, and tech-related) research pieces written by me on the threat of e-waste
                            <b> <a href="https://mobiusblogr.medium.com/why-sustainability-ultimately-begins-and-ends-with-e-waste-and-not-paper-straws-c06612cbefeb
"  target="_blank"
                                rel="noreferrer"> here </a>   </b>                 </h3>
                    </li>
                    <br/>
                    <h2 className="hlight-mini" >
                        <b>
                            <u>Ebay Electronics Repairs + Reseller (May 2018 -  Now 2023)</u>
                        </b>
                    </h2>
                    <li>



                        <h3 >
                            I have sold, built, and repaired Apple, Linux, and Windows electronics, have handled over 50 total customer sales to-date with 100% positive feedback rate from 45 customers on ebay. Also handle macbook, iphone, and ipad repairs, as well as Windows PC build requests. You can see more at my account <b>   <a clasName="projdesc" href="https://www.ebay.com/usr/gadgetsllcc" target="_blank"
                                rel="noreferrer" className="referral">
                                here </a>
                            </b></h3>



                    </li>
                    <br/>
                    <li>
                        <h2 className="hlight-mini">
                            <b>
                                <u>Github  Open Source Developer(May 2022 -  Now 2023)</u>
                            </b>
                        </h2>
                    </li>
                    <li>


                        <h3 >
                            I contribute to various open source projects and build many of my own, which you can see displayed in detail on my projects page. Of those I have contributed to are Twitter, The Official CU Boulder MATH Github, and    <a href="https://github.com/austinhutchen" target="_blank"
                                rel="noreferrer"> <b><i><u> much more! </u></i> </b>  </a>
                        </h3>


                    </li>



                    <br />
                    <h1 className="hlight" >
                        <b><i> OPEN SOURCE CONTRIBUTIONS & VOLUNTEER WORK</i></b>
                    </h1>
                    <hr />
                                            <li >

                        <a href="https://github.com/twitter/the-algorithm/issues/162" target="_blank"
                            rel="noreferrer">
                            <h2 className="hlight"> <b> TWITTER COMPILER OPTIMIZATIONS</b> </h2>
                        </a>

<h4> Assisted twitter with vectorizing their code for IEE floating point parallelism, which can significantly speed up buildtime and runtime. You can read my full contribution at the link. </h4>

                        </li>
                        <br/>
                                                <li>

                        <a href="https://leetcode.com/austinhutchen/" target="_blank"
                            rel="noreferrer" >
                            <h2 className="hlight-mini"> <b> LEETCODE </b> </h2>
                        </a>

 <h4>I love leetcode </h4>

                        </li>
                        <br/>
                                                <li>

                        <a href="https://leetcode.com/austinhutchen/" target="_blank"
                            rel="noreferrer" >
                            <h2 className="hlight-mini"> <b> READING PARTNERS FOUNDATION </b> </h2>

                        </a>


                            <h4 >
                                Volunteered as an Elementary Reading & Writing & Math tutor under the Reading Partners foundation in los angeles.  </h4>
                        </li>
                        <br/>
                        <li>
                        <a href="https://gardenschoolfoundation.org/" target="_blank"
                            rel="noreferrer" >
                            <h2 className="hlight-mini"> <b> GARDEN SCHOOL FOUNDATION</b> </h2>

                        </a>

                            <h4 >
                                Volunteered after school hours to work on a community garden for underrepresented minority groups at Wilshire Crest Elementary, and facilitate meaningful interactions with the natural environment in an urban setting. You can read more about the GSF mission by clicking the above link. </h4>


                        </li>
<br/>

                    <div>
                        <h1 className="hlight">
                            <b><i> FULL RESUME ( in progress)</i></b>
                        </h1>



                    </div>



</ul>
        </motion.div>
    )
}




export const Resume = (props) => {

    return (
        <div className="resume-body">
            <Nav />
            <Body />
            <img src={props.data[0]} style={{ height: "55dvh", width: "0 auto" }} />

        </div>

    )

}
