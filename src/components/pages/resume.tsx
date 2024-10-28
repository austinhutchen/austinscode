import React from 'react';
import { NavBar } from "../common/navbar";

const rec_letter = process.env.PUBLIC_URL + '/fast_imgs/REC_LETTER.webp';

const inclusion = process.env.PUBLIC_URL + '/fast_imgs/inclusion.webp';
const support = process.env.PUBLIC_URL + '/fast_imgs/support.webp';




const ImageList: React.FC<{ images: string[] }> = ({ images }) => (
    <ul>
        {images.map((src, index) => (
            <li key={`img_${index}`}>
                <img
                    src={src}
                    className="format-img"
                    style={{ maxHeight: "70svh", maxWidth: "70svw" }}
                    loading="eager"
                    alt={`Image_${index}`}
                />
            </li>
        ))}
    </ul>
);

export const Feedback: React.FC = () => {

    const data = [inclusion, support]

    return (
        <>
            <div className="accreditations">
                <div className='feedback'>
                    <h1 className="hlight"><b>~FEEDBACK~ </b></h1>
                    <br />
                    <ul>
                        <h2 className="hlight-mini">
                            <b><i><u>Letter of Rec from CU Boulder Math PHD/Instructor Ezzedine El Sai:</u></i></b>
                        </h2>
                        <br />
                        <img
                            src={rec_letter}
                            style={{ maxHeight: "75svh", width: "100%" }}
                            loading="eager"
                            alt="Math_PhD_Students_Letter"
                        />
                        <br />

                        <h2 className="hlight-mini">
                            <b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b>
                        </h2>
                        <br />
                        <div>
                            <ImageList images={data} />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};
export const Resume: React.FC = () => (
    <>
        <NavBar />

        <div className="resumePage mx-auto p-6 rounded-lg shadow-lg" style={{maxWidth:'68vw', display:'flex', justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

            <SectionHeader title="DIRECT WORK EXPERIENCE" />
            <div className="p-6 text-center">
                <a
                    href={`${process.env.PUBLIC_URL}/fast_imgs/GeneralResume.pdf`}
                    download
                    className="text-lg font-bold underline text-blue-600 hover:text-blue-800"
                >
                    Download Full Resume (PDF)
                </a>
            </div>
            <ul className="projectdesc pt-1">
                {experienceItems.map((item, index) => (
                    <li style={{"listStyleType":'none'}}key={index}>
                        <ExperienceItem {...item} />
                    </li>
                ))}
            </ul>

            <SectionHeader title="OPEN SOURCE CONTRIBUTIONS & VOLUNTEER WORK" italic />

            <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=austinhutchen&theme=highcontrast&hide_border=false"
                alt="GitHub streak stats"
                className="my-1"
                style={{ width: '100%', height: '150px' }}
            />

            <ContributionLink
                href="https://github.com/twitter/the-algorithm/issues/162"
                title="TWITTER COMPILER OPTIMIZATIONS"
                description="Helped optimize Twitter’s (now X) code for floating-point parallelism."
            />

            <ContributionLink
                href="https://leetcode.com/austinhutchen/"
                title="LEETCODE"
                description="Check out my LeetCode solutions!"
            />

            <ContributionLink
                href="https://gardenschoolfoundation.org/"
                title="GARDEN SCHOOL FOUNDATION"
                description="Volunteered to build a community garden at Wilshire Crest Elementary for underrepresented groups."
            />
            <Feedback />
        </div>
    </>
);

const SectionHeader: React.FC<{ title: string; italic?: boolean }> = ({ title, italic }) => (
    <h1 className={`hlight ${italic ? 'italic' : ''}`}>{title}</h1>
);

const ExperienceItem: React.FC<{
    position: string;
    period: string;
    description: React.ReactNode;
}> = ({ position, period, description }) => (
    <div>
        <h2 className="hlight" >
            <b>
                <u>{position}</u> ({period})
            </b>
        </h2>
        <h3>{description}</h3>
        <br />
    </div>
);

const ContributionLink: React.FC<{ href: string; title: string; description: string }> = ({
    href,
    title,
    description,
}) => (
    <div>
        <a className="fitScreen" href={href} target="_blank" rel="noreferrer">
            <b>{title}</b>
        </a>
        <h4>{description}</h4>
        <br />
    </div>
);

const experienceItems = [
    {
        position: "Backend Software Engineer Intern (FormFactor)",
        period: "May 2024 - August 2024",
        description: (
            <>
                Built an RS232 C# NuGet library for ModBus ASCII/RTU drivers and simulators for quantum computing instruments at{" "}
                <a href="https://www.formfactor.com/">FormFactor</a>. Drafted engineering decisions for near-zero Kelvin operations.
            </>
        ),
    },
    {
        position: "Calculus 2 Course Assistant (University of Colorado Boulder)",
        period: "January 2023 - May 2023",
        description:
            "Taught and assisted with Calculus 2 (MATH 2300), held office hours weekly, and received 97% positive feedback from 63 students.",
    },
    {
        position: "Marketing Consultant (Mobius Materials)",
        period: "Summer 2020 - Fall 2020",
        description: (
            <>
                Made the first company sale and collaborated with engineers to meet targets. Authored research articles on e-waste, including{" "}
                <a
                    href="https://mobiusblogr.medium.com/why-sustainability-ultimately-begins-and-ends-with-e-waste-and-not-paper-straws-c06612cbefeb"
                    target="_blank"
                    rel="noreferrer"
                >
                    this piece
                </a>.
            </>
        ),
    },
    {
        position: "Electronics Repairs & Reseller (eBay)",
        period: "May 2018 - Now",
        description: (
            <>
                Sold and repaired Apple, Linux, and Windows devices, completing over 50 sales with 100% positive feedback. View my account{" "}
                <a href="https://www.ebay.com/usr/gadgetsllcc" target="_blank" rel="noreferrer">
                    here
                </a>.
            </>
        ),
    },
    {
        position: "Open Source Developer (GitHub)",
        period: "May 2022 - Now",
        description: (
            <>
                Contributed to open-source projects, including Twitter’s algorithm optimization. See my work{" "}
                <a href="https://github.com/austinhutchen" target="_blank" rel="noreferrer">
                    <b>
                        <i>
                            <u>here</u>
                        </i>
                    </b>
                </a>.
            </>
        ),
    },
];