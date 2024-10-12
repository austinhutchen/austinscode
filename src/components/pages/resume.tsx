import React from 'react';
import { NavBar } from "../common/navbar";

export const Resume: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <div className="container mx-auto p-6 rounded-lg shadow-lg mt-8">

          <p className="text-lg text-gray-600 mb-8">
            Embedded Software Engineer | Web Developer
          </p>

          {/* Work Experience */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Direct Work Experience
          </h2>
          <ul className="space-y-8">
            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Backend Software Engineer Intern (FormFactor) May 2024 - August 2024
              </h3>
              <p className="text-gray-700">
                Built an RS232 C# NuGet library implementing ModBus ASCII/RTU drivers and simulators for quantum computing instruments at{" "}
                <a
                  href="https://www.formfactor.com/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  FormFactor
                </a>
                . Collaborated with the team on engineering decisions for approaching 0 degrees Kelvin in their quantum computer.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Calculus 2 Course Assistant (University of Colorado Boulder) January 2023 - May 2023
              </h3>
              <p className="text-gray-700">
                Assisted with MATH 2300 (Calculus 2) instruction and held office hours. Received 97% positive feedback from 63 participants in the semester-end survey.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Marketing Consultant (Mobius Materials) Summer 2020 - Fall 2020
              </h3>
              <p className="text-gray-700">
                Achieved the first company sale and collaborated with the engineering team. Authored research articles on e-waste, including{" "}
                <a
                  href="https://mobiusblogr.medium.com/why-sustainability-ultimately-begins-and-ends-with-e-waste-and-not-paper-straws-c06612cbefeb"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this piece
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                eBay Electronics Repairs + Reseller (May 2018 - Present)
              </h3>
              <p className="text-gray-700">
                Sold, built, and repaired electronics, maintaining a 100% positive feedback rate. Check my eBay store{" "}
                <a
                  href="https://www.ebay.com/usr/gadgetsllcc"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Open Source Developer (May 2022 - Present)
              </h3>
              <p className="text-gray-700">
                Contributed to open-source projects including Twitter's algorithm. See my projects on{" "}
                <a
                  href="https://github.com/austinhutchen"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </li>
          </ul>

          {/* Contributions and Volunteer Work */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            Open Source Contributions & Volunteer Work
          </h2>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=austinhutchen&theme=highcontrast&hide_border=false"
            alt="GitHub Streak Stats"
            className="w-full my-4"
          />
          <ul className="space-y-8">
            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Twitter Compiler Optimizations
              </h3>
              <p className="text-gray-700">
                Helped vectorize Twitter's code for IEEE floating-point parallelism. Read more{" "}
                <a
                  href="https://github.com/twitter/the-algorithm/issues/162"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                LeetCode
              </h3>
              <p className="text-gray-700">
                Explore my solutions{" "}
                <a
                  href="https://leetcode.com/austinhutchen/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Reading Partners Foundation
              </h3>
              <p className="text-gray-700">
                Volunteered as an elementary reading and math tutor in Los Angeles.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800 underline">
                Garden School Foundation
              </h3>
              <p className="text-gray-700">
                Worked on a community garden for underrepresented groups at Wilshire Crest Elementary. Learn more{" "}
                <a
                  href="https://gardenschoolfoundation.org/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </li>
          </ul>

          {/* Download PDF */}
          <div className="mt-8 text-center">
            <a
              href={`${process.env.PUBLIC_URL}/fast_imgs/GeneralResume.pdf`}
              download
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Download Full Resume (In Progress)
            </a>
          </div>
        </div>
      </div>
    </>
  );
};