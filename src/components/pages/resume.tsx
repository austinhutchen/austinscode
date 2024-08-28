import React from 'react';
import { NavBar } from "../common/navbar";






export const Resume: React.FC = () => {
    return (
        <>
            <NavBar />

            <div className="resumePage">


                <h1 className="hlight">
                    <b> DIRECT WORK EXPERIENCE </b>
                </h1>

                <ul style={{ paddingTop: '0.3em' }} className="projectdesc" >
                    <a className="hlight">
                        <b>
                            <u> Backend Software Engineer Intern(FormFactor) May 2024- August 2024</u>
                        </b>
                    </a>
                    < h3  >
                        Built an RS232 C# Nuget library implemenation of ModBus ASCII/RTU drivers and simulators for use in quantum computing instruments at <a href="https://www.formfactor.com/">FormFactor</a>. Also worked alongside the larger team to draft engineering decisions for approaching 0 degrees kelvin, for use in Boulder FormFactor's in-built quantum computer.
                    </h3>
                    <br />
                    <a className="hlight">
                        <b>
                            <u>Calculus 2 Course Assistant (University Of Colorado Boulder) (January 2023 - May 2023)</u>
                        </b>
                    </a>
                    < h3  >
                        Taught and assisted with CALCULUS 2 (MATH 2300) alongside faculty at CU boulder. Also held office
                        hours every week to assist learning of course material.{" "}

                        Recieved 97% positive feedback from 63 participants on end of
                        semester survey.
                    </h3>
                    <br />
                    <a className="hlight">
                        <b>
                            <u>Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)</u>
                        </b>
                    </a>
                    <h3 >
                        {" "}
                        Made first company sale as Marketing consultant, worked closely with
                        the software engineering team to achieve forecasted results. Wrote several other (science, environment, and tech-related) research articles written on the threat of e-waste and potential solutions
                        <b> <a href="https://mobiusblogr.medium.com/why-sustainability-ultimately-begins-and-ends-with-e-waste-and-not-paper-straws-c06612cbefeb
"  target="_blank"
                            rel="noreferrer"> here </a>   </b>                 </h3>
                    <br />
                    <a className="hlight" >
                        <b>
                            <u>Ebay Electronics Repairs + Reseller (May 2018 -  Now 2023)</u>
                        </b>
                    </a>



                    <h3 >
                        I have sold, built, and repaired Apple, Linux, and Windows electronics and handled over 50 total customer sales to-date with 100% positive feedback rate from 45 customers on ebay. Also handle macbook, iphone, and ipad repairs, as well as Windows PC build requests. You can see more at my account <b>
                            <a className="projdesc" href="https://www.ebay.com/usr/gadgetsllcc" target="_blank" rel="noreferrer" >
                                here </a>
                        </b></h3>



                    <br />

                    <a className="hlight-mini">
                        <b>
                            <u>Github  Open Source Developer(May 2022 -  Now 2023)</u>
                        </b>
                    </a>



                    <h3 >
                        I contribute to various open source projects and build many of my own, which you can see displayed in detail on my projects page. Of those I have contributed to are Twitter, The Official CU Boulder MATH Github, and    <a href="https://github.com/austinhutchen" target="_blank"
                            rel="noreferrer"> <b><i><u> much more! </u></i> </b>  </a>
                    </h3>





                    <br />
                    <h1 className="hlight" >
                        <b><i> OPEN SOURCE CONTRIBUTIONS & VOLUNTEER WORK</i></b>
                    </h1>
                    <br />
                    <img height="200vh" width="100%" src="https://github-readme-streak-stats.herokuapp.com/?user=austinhutchen&theme=highcontrast&hide_border=false" style={{ marginTop: '0.25em', marginBottom: '0.25em' }} />

                    <hr />


                    <a className="hlight" href="https://github.com/twitter/the-algorithm/issues/162" target="_blank"
                        rel="noreferrer"> <b> TWITTER COMPILER OPTIMIZATIONS</b> </a>


                    <h4> Assisted twitter (now known as X) with vectorizing their code for IEE floating point parallelism, which can significantly speed up buildtime and runtime. You can read my full contribution at the link. </h4>

                    <br />


                    <a href="https://leetcode.com/austinhutchen/" target="_blank"
                        rel="noreferrer" className="hlight"> <b> LEETCODE </b> </a>

                    <h4>Check out my leetcode solutions here! </h4>

                    <br />

                    <a href="https://leetcode.com/austinhutchen/" target="_blank"
                        rel="noreferrer" >
                        <a className="hlight-mini"> <b> READING PARTNERS FOUNDATION </b> </a>

                    </a>


                    <h4 >
                        Volunteered as an Elementary Reading & Writing & Math tutor under the Reading Partners foundation in los angeles.  </h4>
                    <br />
                    <a href="https://gardenschoolfoundation.org/" target="_blank"
                        rel="noreferrer" >
                        <a className="hlight-mini"> <b> GARDEN SCHOOL FOUNDATION</b> </a>

                    </a>

                    <h4 >
                        Volunteered after school hours to work on a community garden for underrepresented minority groups at Wilshire Crest Elementary, and facilitate meaningful interactions with the natural environment in an urban setting. You can read more about the GSF mission by clicking the above link. </h4>


                    <br />

                    <h1 className="hlight">
                        <b><i> FULL RESUME ( in progress)</i></b>
                        <br />
                        <a href={`${process.env.PUBLIC_URL}/fast_imgs/GeneralResume.pdf`} download>click me!</a>
                    </h1>
                    <br />






                </ul>
            </div>
        </>
    );



}
