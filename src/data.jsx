import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

// ? Project
import Work1 from "./assets/project_1.jpg";
import Work2 from "./assets/project_2.jpg";
import Work3 from "./assets/project_3.jpg";
import Work4 from "./assets/project_4.jpg";
import Work5 from "./assets/project_5.jpg";
import Work6 from "./assets/project_6.jpg";

import Theme1 from "./assets/1.jpg";
import Theme2 from "./assets/red.jpg";
import Theme3 from "./assets/blue.jpg";
import Theme4 from "./assets/4.jpg";
import Theme5 from "./assets/5.jpg";
import Theme6 from "./assets/6.jpg";
import Theme7 from "./assets/7.jpg";
import Theme8 from "./assets/8.jpg";
import Theme9 from "./assets/9.jpg";
import Theme10 from "./assets/10.jpg";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Akhmadjonov",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Shokhrukh",
  },

  {
    id: 3,
    title: "Age : ",
    description: "18 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Uzbek",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Samarkand",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+998 (90) 199 05 80",
  },

  {
    id: 8,
    title: "Email : ",
    description: "shoxrux@gmail.com",
  },

  {
    id: 9,
    title: "Instagram : ",
    description: "a.shokhrukh_",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Tjk, Uzbek, English, Nemis tili",
  },
];

export const stats = [
  {
    id: 1,
    no: "57+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "81+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "93 +",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "43+",
    title: "Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Programming <span> Themeforest </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incrididunt ut labore adipisicing elit,",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "70",
  },

  {
    id: 2,
    title: "Css",
    percentage: "82",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "40",
  },

  {
    id: 4,
    title: "React",
    percentage: "64",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "React Js, Node Js",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'React',
    details: [
      {
        icon: <FiFileText />,
        title: "Project",
        desc: "Photo",
      },

      {
        icon: <FiUser />,
        title: "Client",
        desc: "Dribble",
      },

      {
        icon: <FaCode />,
        title: "Language",
        desc: "Adobe Photoshop",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(255, 73%, 57%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "grey",
  },

  {
    id: 9,
    img: Theme9,
    color: "yellow",
  },

  {
    id: 10,
    img: Theme10,
    color: "green",
  },
];
