import React from 'react';
import { NavBar } from "../common/navbar";

export const Resume: React.FC = () => {
    return (
        <>


            <NavBar />
            <div className="p-4 text-center">
                <a
                    href={`${process.env.PUBLIC_URL}/fast_imgs/GeneralResume.pdf`}
                    download
                    className="text-lg font-bold underline text-blue-600 hover:text-blue-800"
                >
                    Download Full Resume (PDF)
                </a>
            </div>
            <div className="resumePage p-6 mx-auto rounded-lg shadow-lg">
                <h1 className="hlight">
                    <b>DIRECT WORK EXPERIENCE</b>
                </h1>

                <ul style={{ paddingTop: '0.3em' }} className="projectdesc">
                    <li>
                        <a className="hlight">
                            <b><u>Backend Software Engineer Intern (FormFactor) May 2024 - August 2024</u></b>
                        </a>
                        <h3>
                            Built an RS232 C# NuGet library implementation of ModBus ASCII/RTU drivers and simulators for quantum computing instruments at
                            <a href="https://www.formfactor.com/">FormFactor</a>. Worked with the team to draft engineering decisions for operations at near-zero Kelvin for their quantum computer.
                        </h3>
                    </li>

                    <br />
                    <li>
                        <a className="hlight">
                            <b><u>Calculus 2 Course Assistant (University of Colorado Boulder) January 2023 - May 2023</u></b>
                        </a>
                        <h3>
                            Taught and assisted with Calculus 2 (MATH 2300), held office hours weekly, and received 97% positive feedback from 63 students.
                        </h3>
                    </li>

                    <br />
                    <li>
                        <a className="hlight">
                            <b><u>Mobius Materials, Marketing Consultant (Summer 2020 - Fall 2020)</u></b>
                        </a>
                        <h3>
                            Made the first company sale and collaborated with the software engineering team to meet targets. Authored several research articles on e-waste solutions, including
                            <a href="https://mobiusblogr.medium.com/why-sustainability-ultimately-begins-and-ends-with-e-waste-and-not-paper-straws-c06612cbefeb" target="_blank" rel="noreferrer">
                                this piece
                            </a>.
                        </h3>
                    </li>

                    <br />
                    <li>
                        <a className="hlight">
                            <b><u>Ebay Electronics Repairs + Reseller (May 2018 - Now)</u></b>
                        </a>
                        <h3>
                            Sold and repaired Apple, Linux, and Windows electronics, completing over 50 sales with 100% positive feedback. View my account
                            <a href="https://www.ebay.com/usr/gadgetsllcc" target="_blank" rel="noreferrer">here</a>.
                        </h3>
                    </li>

                    <br />
                    <li>
                        <a className="hlight-mini">
                            <b><u>GitHub Open Source Developer (May 2022 - Now)</u></b>
                        </a>
                        <h3>
                            Contributed to various open-source projects, including Twitter’s algorithm optimization, CU Boulder repositories, and more. See my work
                            <a href="https://github.com/austinhutchen" target="_blank" rel="noreferrer"><b><i><u>here</u></i></b></a>.
                        </h3>
                    </li>
                </ul>

                <h1 className="hlight">
                    <b><i>OPEN SOURCE CONTRIBUTIONS & VOLUNTEER WORK</i></b>
                </h1>

                <img
                    height="200vh"
                    width="100%"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=austinhutchen&theme=highcontrast&hide_border=false"
                    style={{ marginTop: '0.25em', marginBottom: '0.25em' }}
                />

                <hr />

                <a href="https://github.com/twitter/the-algorithm/issues/162" target="_blank" rel="noreferrer">
                    <b>TWITTER COMPILER OPTIMIZATIONS</b>
                </a>
                <h4>
                    Helped optimize Twitter’s (now X) code for floating-point parallelism. See my contribution at the link.
                </h4>

                <br />

                <a href="https://leetcode.com/austinhutchen/" target="_blank" rel="noreferrer">
                    <b>LEETCODE</b>
                </a>
                <h4>Check out my LeetCode solutions here!</h4>

                <br />

                <a href="https://gardenschoolfoundation.org/" target="_blank" rel="noreferrer">
                    <b>GARDEN SCHOOL FOUNDATION</b>
                </a>
                <h4>
                    Volunteered to build a community garden at Wilshire Crest Elementary for underrepresented groups.
                </h4>

                <br />
                <h1 className="hlight">
                    <a href={`${process.env.PUBLIC_URL}/fast_imgs/GeneralResume.pdf`} download>
                        <b><i>FULL RESUME (in progress)</i></b>
                    </a>
                </h1>
            </div>
        </>
    );
};