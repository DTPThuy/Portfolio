// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaWordpress,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";

import { 
    FaHtml5,
  FaCss3,
  FaJs,
FaPython, FaJava, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiPostgresql,
  SiPandas,
  SiTableau,
  SiPowerbi,
  SiGitlab,
  SiGit,
} from "react-icons/si";
import { DiJupyter } from "react-icons/di";
import { MdVisualization } from "react-icons/md";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaPython />,
          <FaJava />,
          <FaDatabase />,
        ],
      },
      {
        title: "Data Analysis & Visualization",
        icons: [<SiPandas />, <SiPowerbi />, <SiTableau />, <SiPostgresql />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Second Prize - Student Science Conference",
        stage: "2023",
      },
      {
        title: "First Prize - HUS RACING 2020",
        stage: "2020",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Data Analyst - LP Technology (Onsite MCredit)",
        stage: "2022 - 2024",
      },
      {
        title: "Java Backend Developer - LP Technology",
        stage: "2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "SQL Advanced - Hackerank",
        stage: "2024",
      },
      {
        title:
          "Data Analytics and Visualization Job Simulation - Accenture North America",
        stage: "2024",
      },
      {
        title: "Data Scientist with Python - DataCamp",
        stage: "2023",
      },
      {
        title: "Certificate of Talent and Talendted RPA Developer",
        stage: "2021",
      },
      {
        title: "Certificate of Appreciation VLSP 2020",
        stage: "2020",
      },
    ],
  },
];

export default aboutData;