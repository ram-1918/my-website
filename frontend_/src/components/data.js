import React from "react";

import {
  CSSIcon,
  DjangoIcon,
  HTMLIcon,
  JSIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  VueIcon,
} from "./Base/BaseIcons";

// import dell from '../icons/dell.jpeg';
import ubicon from "../icons/ub.jpeg";
import annauniv from "../icons/annauniv.jpeg";
import kellogg from "../icons/kellogg_company_logo.jpeg";
import goldman from "../icons/goldman_sachs_logo.jpeg";
import eidiko from "../icons/eidiko.jpeg";
import tcs from "../icons/tcs.jpeg";

//portfolio images
import pf1 from "../images/port/pf1.png";
import pf2 from "../images/port/pf2.png";
import pf3 from "../images/port/pf3.png";

// Todo Images
import todo1 from "../images/todos/todos1.png";
import todo2 from "../images/todos/todos2.png";
import todo3 from "../images/todos/todos3.png";
import todo4 from "../images/todos/todos4.png";
import todo5 from "../images/todos/todos5.png";
import todo6 from "../images/todos/todos6.png";
import todo7 from "../images/todos/todos7.png";

// Tutorflow images
import tf0 from "../images/tutorflow/tf0.png";
import tf1 from "../images/tutorflow/tf1.png";
import tf2 from "../images/tutorflow/tf2.png";
import tf3 from "../images/tutorflow/tf3.png";
import tf4 from "../images/tutorflow/tf4.png";
import tf5 from "../images/tutorflow/tf5.png";
import tf6 from "../images/tutorflow/tf6.png";
import tf7 from "../images/tutorflow/tf7.png";

// music player
import music1 from "../images/musicplayer/music1.png";
import music2 from "../images/musicplayer/music2.png";
import music3 from "../images/musicplayer/music3.png";

const Highlight = ({ children }) => (
  <span className="p-0 rounded bg-white-200">{children}</span>
);
export const experienceTitleContent =
  "The projects in my portfolio showcase a wide range of technologies from the tech stack I mentioned earlier.";

export const projectsData = [
  {
    eyebrow: "Website",
    title: "Portfolio",
    content:
      "This portfolio website showcases my profile, education, projects, experience, and contact information. It is built using Django Rest Framework (DRF), React.js, Tailwind CSS, and hosted on AWS EC2. Additionally, the website includes like/dislike functionality, allowing visitors to show their appreciation for my portfolio. It also features an easy-to-use contact form for users to get in touch with me.",
    images: [pf1, pf2, pf3],
    tech: [<DjangoIcon />, <ReactIcon />, <TailwindIcon />, <SQLIcon />],
    isLink: true,
    link: "https://www.ramchandra.info",
    gitlink: "https://github.com/ram-1918/portfolio-backend.git",
  },
  {
    eyebrow: "Website",
    title: "Tutorflow",
    content:
      "This application provides an array of features, allowing users to post questions, provide answers, add follow-up responses, bookmark favorite questions, express preferences through likes or dislikes, and control question privacy settings (public or private). The backend is powered by Django, the frontend utilizes Vue.js, and AWS services are integrated to ensure scalability and reliability.",
    images: [tf6, tf7, tf5, tf4, tf3, tf2, tf1, tf0],
    tech: [<DjangoIcon />, <VueIcon />, <HTMLIcon />, <CSSIcon />, <SQLIcon />],
    isLink: true,
    link: "https://www.tutorflow.info",
    gitlink: "https://github.com/ram-1918/tutorflow-project.git",
  },
  {
    eyebrow: "website",
    title: "The Todos",
    content:
      "The application allows users to create todo lists, add tasks to the lists, and attach tags such as important or urgent to the lists. Users can perform actions like updating tasks and deleting both tasks and lists. Overall, this project provides a feature-rich Todo application with a user-friendly interface, leveraging the power of DRF and Vue.js.",
    images: [todo6, todo7, todo5, todo4, todo3, todo2, todo1],
    tech: [<DjangoIcon />, <VueIcon />, <HTMLIcon />, <CSSIcon />, <JSIcon />],
    isLink: false,
    link: "#",
    gitlink: "https://github.com/ram-1918/portfolio-backend.git",
  },
  {
    eyebrow: "App",
    title: "Music Player",
    content:
      "The music player is a Python Tkinter app with play, pause, and stop controls. Users can manage their music library by adding or deleting songs. It also features time and volume sliders for precise playback control.",
    images: [music1, music2, music3],
    tech: [<PythonIcon />],
    isLink: false,
    link: "#",
    gitlink: "https://github.com/ram-1918/portfolio-backend.git",
  },
];

export const ftExperienceData = [
  {
    name: "Goldman Sachs",
    logo: goldman,
    location: "Salt lake city, UT",
    role: "Software Developer",
    duration: "July 2024 - Present (7 mos)",
    type: "exp",
    jobtype: "",
    responsibilities: [
      <span>
        Led the migration of 200,000+ lines of Python 2.7 code to Python 3.10,
        automating refactoring and reducing migration time by 30%, with no
        service disruptions during the transition.
      </span>,
      <span>
        Developed a custom testing framework to ensure 99.9% functional parity
        between legacy and migrated systems, preventing production issues and
        ensuring reliable deployment.
      </span>,
      <span>
        Optimized system performance by implementing design patterns and
        enhancing Python code, improving query response times by 40% and system
        throughput by 25%.
      </span>,
    ],
  },
  {
    name: "Kellogg Company",
    logo: kellogg,
    location: "Chicago, IL",
    role: "Full Stack Software Developer",
    duration: "March 2023 - July 2024 (1 yr 5 mos)",
    type: "exp",
    jobtype: "",
    responsibilities: [
      <span>
        Developed a real-time analytics platform using React.js, D3.js, and
        Django REST Framework, enabling high-performance data visualizations for
        100+ concurrent users with zero degradation in response times.
      </span>,
      <span>
        Engineered Python-based microservices to handle over 2 million daily
        JSON messages via Kafka, achieving a 99.99% message delivery rate and
        ensuring reliable, distributed messaging.
      </span>,
      <span>
        Optimized data retrieval using PostgreSQL stored procedures and PyMongo,
        reducing data retrieval times by 30% and enhancing overall application
        performance.
      </span>,
    ],
  },
  {
    name: "Eidiko System Integrators",
    logo: eidiko,
    location: "NC",
    role: "Software Engineer",
    duration: "July 2022 - March 2023 (9 mos)",
    type: "exp",
    jobtype: "",
    responsibilities: [
      <span>
        Design and development of a high-performance insurance quote generation
        system using Django REST Framework and React.js, optimizing processing
        speed by 30% and improving user engagement by 15%.
      </span>,
      <span>
        Designed an optimized PostgreSQL schema and developed efficient RESTful
        APIs, reducing data retrieval times by 40% and improving API response
        times by 25% during peak traffic.
      </span>,
      <span>
        Implemented Terraform for infrastructure automation, reducing setup time
        by 50% and ensuring consistent, cost-efficient deployment of AWS
        resources (EC2, S3, Lambda).
      </span>,
    ],
  },
  {
    name: "Tata Consultancy Services",
    logo: tcs,
    location: "Chennai, India",
    role: "Software Engineer",
    duration: "May 2020 - August 2021 (1 yr 4 mos)",
    type: "exp",
    responsibilities: [
      <span>
        Developed scalable backend services using Flask and FastAPI, adhering to
        SOLID principles, and architected MongoDB and PostgreSQL schemas that
        improved query performance by 35% through efficient indexing and
        partitioning.
      </span>,
      <span>
        Led the transition from a monolithic architecture to microservices,
        optimizing Python-based APIs and Docker containerization, reducing
        response times by 20% during peak traffic periods and improving system
        scalability.
      </span>,
      <span>
        Automated reporting workflows and processed over 5TB of data monthly
        using Python libraries (Pandas, NumPy), cutting manual intervention by
        40%.
      </span>,
    ],
  },
];

export const education = [
  {
    name: "University at Buffalo",
    logo: ubicon,
    location: "NY",
    role: "Masters Degree in Data Science",
    duration: "Aug 2021 - Feb 2023",
    type: "univ",
    otherName: false,
    responsibilities: [
      <span>
        Course Taken: Numerical Math, Statistical Data Mining, Machine Learning,
        Probability, DBMS
      </span>,
      <span>
        Mastered <Highlight>numerical methods</Highlight>, statistical analysis,
        and <Highlight>data mining techniques</Highlight> to discover hidden
        patterns and trends in datasets.
      </span>,
      <span>
        Possess strong understanding and practical experience with various
        machine learning algorithms, including linear and logistic regression,
        support vector machines, neural networks, and k-means clustering.
      </span>,
    ],
  },
  {
    name: "Hindustan University",
    logo: annauniv,
    location: "Chennai, India",
    role: "Bachelors Degree in Computer Science",
    duration: "Jun 2016 - Apr 2020",
    type: "univ",
    otherName: false,
    responsibilities: [
      <span>
        <Highlight>Courses Taken</Highlight>: Data Structures and Algorithms,
        Operating Systems, Database Management Systems,{" "}
        <Highlight>Web Development</Highlight>
      </span>,
      <span>
        Proficient in applying various <Highlight>data structures</Highlight>,
        like Stacks, Queues, Trees, and Graphs; and their associated algorithms
        through in-depth study and practical application.
      </span>,
      <span>
        Possessed a solid understanding of{" "}
        <Highlight>programming fundamentals</Highlight>, algorithms, and{" "}
        <Highlight>problem-solving</Highlight> techniques acquired through
        introductory courses.
      </span>,
    ],
  },
];