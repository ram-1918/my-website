import React from "react";

import { CSSIcon, DjangoIcon, HTMLIcon, JSIcon, PythonIcon, ReactIcon, SQLIcon, TailwindIcon, VueIcon } from "./Base/BaseIcons";

import ubicon from '../icons/ub.jpeg';
import annauniv from '../icons/annauniv.jpeg';
// import dell from '../icons/dell.jpeg';
import cloud from '../icons/cloudserv.jpeg';
import kellogg from '../icons/kellogg_company_logo.jpeg';
import goldman from '../icons/goldman_sachs_logo.jpeg';
import eidiko from '../icons/eidiko.jpeg';
import tcs from '../icons/tcs.jpeg';

//portfolio images
import pf1 from '../images/port/pf1.png';
import pf2 from '../images/port/pf2.png';
import pf3 from '../images/port/pf3.png';

// Todo Images
import todo1 from '../images/todos/todos1.png';
import todo2 from '../images/todos/todos2.png';
import todo3 from '../images/todos/todos3.png';
import todo4 from '../images/todos/todos4.png';
import todo5 from '../images/todos/todos5.png';
import todo6 from '../images/todos/todos6.png';
import todo7 from '../images/todos/todos7.png';

// Tutorflow images
import tf0 from '../images/tutorflow/tf0.png';
import tf1 from '../images/tutorflow/tf1.png';
import tf2 from '../images/tutorflow/tf2.png';
import tf3 from '../images/tutorflow/tf3.png';
import tf4 from '../images/tutorflow/tf4.png';
import tf5 from '../images/tutorflow/tf5.png';
import tf6 from '../images/tutorflow/tf6.png';
import tf7 from '../images/tutorflow/tf7.png';

// music player
import music1 from '../images/musicplayer/music1.png';
import music2 from '../images/musicplayer/music2.png';
import music3 from '../images/musicplayer/music3.png';

const Highlight = ({children}) => <span className="p-0 rounded bg-white-200">{children}</span>

export const projectsData = [
    // {
    //     "eyebrow": "Website", 
    //     "title": "Application Manager", 
    //     "content": "Led the development of an enterprise-level application from freelance to deployment. Implemented user-role-based logins, employee management, and proposal submission functionalities. Utilized React.js for the frontend and Django REST Framework for the backend, seamlessly interfacing with APIs.",
    //     "images": [music1, music2, music3],
    //     "tech": [<PythonIcon />, <DrfIcon />, <JSIcon />, <ReactIcon />, <JenkinsIcon />, <DockerIcon />, <AWSIcon />],
    //     "isLink": false,
    //     "link": "#",
    //     "gitlink": "https://github.com/ram-1918/portfolio-backend.git"

    // },
    {
        "eyebrow": "Website", 
        "title": "Portfolio", 
        "content": "This portfolio website showcases my profile, education, projects, experience, and contact information. It is built using Django Rest Framework (DRF), React.js, Tailwind CSS, and hosted on AWS EC2. Additionally, the website includes like/dislike functionality, allowing visitors to show their appreciation for my portfolio. It also features an easy-to-use contact form for users to get in touch with me.",
        "images": [pf1, pf2, pf3],
        "tech": [<DjangoIcon />, <ReactIcon />, <TailwindIcon />, <SQLIcon />],
        "isLink": true,
        "link": "https://www.ramchandra.info",
        "gitlink": "https://github.com/ram-1918/portfolio-backend.git"

    },
    {
        "eyebrow": "Website", 
        "title": "Tutorflow", 
        "content": "This application provides an array of features, allowing users to post questions, provide answers, add follow-up responses, bookmark favorite questions, express preferences through likes or dislikes, and control question privacy settings (public or private). The backend is powered by Django, the frontend utilizes Vue.js, and AWS services are integrated to ensure scalability and reliability.",
        "images": [tf6, tf7, tf5, tf4, tf3, tf2, tf1, tf0],
        "tech": [<DjangoIcon />, <VueIcon />, <HTMLIcon />, <CSSIcon />, <SQLIcon />],
        "isLink": true,
        "link": "https://www.tutorflow.info",
        "gitlink": "https://github.com/ram-1918/tutorflow-project.git"

    },
    {
        "eyebrow": "website", 
        "title": "The Todos", 
        "content": "The application allows users to create todo lists, add tasks to the lists, and attach tags such as important or urgent to the lists. Users can perform actions like updating tasks and deleting both tasks and lists. Overall, this project provides a feature-rich Todo application with a user-friendly interface, leveraging the power of DRF and Vue.js.",
        "images": [todo6, todo7, todo5, todo4, todo3, todo2, todo1],
        "tech": [<DjangoIcon />, <VueIcon />, <HTMLIcon />, <CSSIcon />, <JSIcon />],
        "isLink": false,
        "link": "#",
        "gitlink": "https://github.com/ram-1918/portfolio-backend.git"

    },
    {
        "eyebrow": "App", 
        "title": "Music Player", 
        "content": "The music player is a Python Tkinter app with play, pause, and stop controls. Users can manage their music library by adding or deleting songs. It also features time and volume sliders for precise playback control.",
        "images": [music1, music2, music3],
        "tech": [<PythonIcon />],
        "isLink": false,
        "link": "#",
        "gitlink": "https://github.com/ram-1918/portfolio-backend.git"

    }
];  

export const ftExperienceData = [
    {
        'name': 'Goldman Sachs',
        'logo': goldman,
        'location': 'Salt lake city, UT',
        'role': 'Software Developer',
        'duration': 'July 2024 - Present (7 mos)',
        'type': 'exp',
        'jobtype': '',
        'responsibilities': [
            <span>Led the migration of 200,000+ lines of Python 2.7 code to Python 3.10, automating refactoring and reducing migration time by 30%, with no service disruptions during the transition.</span>,
            <span>Developed a custom testing framework to ensure 99.9% functional parity between legacy and migrated systems, preventing production issues and ensuring reliable deployment.</span>,
            <span>Optimized system performance by implementing design patterns and enhancing Python code, improving query response times by 40% and system throughput by 25%.</span>,
            // <span>Engineered and automated a CI/CD pipeline using Jenkins and Docker, reducing release cycles from weeks to 2-3 days, and integrated security scanning to detect and fix 99% of vulnerabilities early.</span>
            
            // <span>Led the migration of a large codebase from Python 2.7 to Python 3.10, reducing legacy dependencies by 60%, ensuring future-proof and more secure code.</span>,
            // // <span>Developed and maintained custom wrappers for multiple environments, optimizing reusability and readability.</span>,
            // <span>Refactored over 10,000 lines of code to improve maintainability, readability, and modularity, leading to a 25% increase in code review approval rates.</span>,
            // <span>Engineered robust Kafka configurations and log file rotations, reducing data lag by 35% and improving system performance.</span>,
            // // <span>Integrated Kafka Connect for seamless data streaming across distributed systems, ensuring 99.9% data transmission reliability</span>,
            // <span>Managed complex segment configurations and implemented Log4j for effective logging, reducing debugging time by 50%.</span>,
        ]
    },
    {
        'name': 'Kellogg Company',
        'logo': kellogg,
        'location': 'Chicago, IL',
        'role': 'Full Stack Software Developer',
        'duration': 'March 2023 - July 2024 (1 yr 5 mos)',
        'type': 'exp',
        'jobtype': '',
        'responsibilities': [
            // <span>Led the migration of a critical internal application from Python to Go using the Gin framework, achieving a 40% performance boost and improved concurrency and memory management.</span>,
            // <span>Leveraged Gin's advanced routing, middleware, and data handling features to ensure efficient and secure API operations.</span>,
            // <span>Implemented Goroutines and channels, replacing the Asyncio library, threads, and queues, for improved efficiency and responsiveness.</span>,
            <span>Developed a real-time analytics platform using React.js, D3.js, and Django REST Framework, enabling high-performance data visualizations for 100+ concurrent users with zero degradation in response times.</span>,
            <span>Engineered Python-based microservices to handle over 2 million daily JSON messages via Kafka, achieving a 99.99% message delivery rate and ensuring reliable, distributed messaging.</span>,
            <span>Optimized data retrieval using PostgreSQL stored procedures and PyMongo, reducing data retrieval times by 30% and enhancing overall application performance.</span>

        ]
    },
    {
        'name': 'Eidiko System Integrators',
        'logo': eidiko,
        'location': 'NC',
        'role': 'Software Engineer',
        'duration': 'July 2022 - March 2023 (9 mos)',
        'type': 'exp',
        'jobtype': '',
        'responsibilities': [
            // <span>Designed and developed high-performance RESTful APIs using Django REST Framework and Python, forming a robust backend foundation, React js and Redux for building responsive design.</span>,
            // <span>Automated 30% of manual testing tasks using Python scripts, improving development efficiency.</span>,
            // <span>Employed Redis for data caching, achieving an average reduction of 50% in database query times and a 20% improvement in overall application performance.</span>,
            <span>Design and development of a high-performance insurance quote generation system using Django REST Framework and React.js, optimizing processing speed by 30% and improving user engagement by 15%.</span>,
            <span>Designed an optimized PostgreSQL schema and developed efficient RESTful APIs, reducing data retrieval times by 40% and improving API response times by 25% during peak traffic.</span>,
            <span>Implemented Terraform for infrastructure automation, reducing setup time by 50% and ensuring consistent, cost-efficient deployment of AWS resources (EC2, S3, Lambda).</span>

        ]
    },
    {
        'name': 'Tata Consultancy Services',
        'logo': tcs,
        'location': 'Chennai, India',
        'role': 'Software Engineer',
        'duration': 'May 2020 - August 2021 (1 yr 4 mos)',
        'type': 'exp',
        'responsibilities': [
            // <span>Developed and maintained a highly scalable monolithic web application utilizing Vue js for frontend components, Django REST Framework for APIs, and MongoDB, a NoSQL database.</span>,
            // <span>Delivered a cohesive web app using Django, exceeding user expectations through cross-functional collaboration. Possess trading knowledge.</span>,
            // <span>Implemented <Highlight>AWS cloud infrastructure</Highlight>, deploying the application on EC2 instances, using S3 for storage, Lambda for serverless functions, and <Highlight>API Gateway</Highlight> for Restful APIs.</span>,
            <span>Developed scalable backend services using Flask and FastAPI, adhering to SOLID principles, and architected MongoDB and PostgreSQL schemas that improved query performance by 35% through efficient indexing and partitioning.</span>,
            <span>Led the transition from a monolithic architecture to microservices, optimizing Python-based APIs and Docker containerization, reducing response times by 20% during peak traffic periods and improving system scalability.</span>,
            <span>Automated reporting workflows and processed over 5TB of data monthly using Python libraries (Pandas, NumPy), cutting manual intervention by 40%.</span>,

        ]
    }
];

export const education = [
    {
        'name': 'University at Buffalo',
        'logo': ubicon,
        'location': 'NY',
        'role': 'Masters Degree in Data Science',
        'duration': 'Aug 2021 - Feb 2023',
        'type': 'univ',
        'otherName': false,
        'responsibilities': [
            <span>Course Taken: Numerical Math, Statistical Data Mining, Machine Learning, Probability, DBMS</span>,
            <span>Mastered <Highlight>numerical methods</Highlight>, statistical analysis, and <Highlight>data mining techniques</Highlight> to discover hidden patterns and trends in datasets.</span>,
            <span>Possess strong understanding and practical experience with various machine learning algorithms, including linear and logistic regression, support vector machines, neural networks, and k-means clustering.</span>, // for building predictive models and solving complex problems.
            // <span>Skilled in designing, querying, and managing data within various Database Management Systems (DBMS) for efficient data organization and retrieval.</span>,
        ]
    },
    {
        'name': 'Hindustan University',
        'logo': annauniv,
        'location': 'Chennai, India',
        'role': 'Bachelors Degree in Computer Science',
        'duration': 'Jun 2016 - Apr 2020',
        'type': 'univ',
        'otherName': false,
        'responsibilities': [
            <span><Highlight>Courses Taken</Highlight>: Data Structures and Algorithms, Operating Systems, Database Management Systems, <Highlight>Web Development</Highlight></span>,
            <span>Proficient in applying various <Highlight>data structures</Highlight>, like Stacks, Queues, Trees, and Graphs; and their associated algorithms through in-depth study and practical application.</span>,
            <span>Possessed a solid understanding of <Highlight>programming fundamentals</Highlight>, algorithms, and <Highlight>problem-solving</Highlight> techniques acquired through introductory courses.</span>,
            // <span>Gained a thorough understanding of computer organization, architecture, and <Highlight>operating systems</Highlight> gained through dedicated coursework.</span>,
        ]
    }
]

export const goExperienceData = [
    {
        'name': 'American Family Insurance',
        'location': 'Madison, WI, USA',
        'role': 'Sr. Python Developer',
        'duration': 'Sep 2021 - Present',
        'responsiblity': [
            <span>Built a streamlined insurance quote process using Go's <Highlight>Gin framework</Highlight> and <Highlight>React.js</Highlight> frontend, optimizing data storage and user experience.</span>,
            <span>Utilized <Highlight>Go's router groups</Highlight> and middleware for efficient routing and handling HTTP requests.</span>,
            <span>Leveraged <Highlight>GORM</Highlight> to establish seamless connectivity between the Go application and a relational database, ensuring efficient mapping of <Highlight>Go structs</Highlight> to database tables.</span>,
            <span>Implemented containerization with <Highlight>Docker</Highlight>, automated CI/CD with <Highlight>Jenkins</Highlight>, and utilized Go libraries for seamless API integration and security.</span>,
        ]
    },
    {
        'name': 'University at Buffalo',
        'location': 'NY, USA',
        'role': 'Bachelors in Computer Science',
        'duration': 'Aug 2021 - Feb 2023',
        'responsiblity': [
            <span>Mastered <Highlight>numerical methods</Highlight>, statistical analysis, and <Highlight>data mining techniques</Highlight> to uncover hidden patterns and trends in datasets.</span>,
            <span>Possess strong understanding and practical experience with various <Highlight>machine learning algorithms</Highlight> for building predictive models and solving complex problems.</span>,
            <span>Skilled in designing, querying, and managing data within various Database Management Systems (DBMS) for efficient data organization and retrieval.</span>,
            <span>Relevant <Highlight>CourseWork</Highlight>: Numerical Math, Statistical Data Mining, Machine Learning, Probability, DBMS</span>,
        ]
    },
    {
        'name': 'ETS',
        'location': 'Princeton, NJ, USA',
        'role': 'Python Developer',
        'duration': 'July 2020 - Aug 2021',
        'responsiblity': [
            <span>Designed learning platform utilizing React.js, Gin framework, and <Highlight>Kafka</Highlight> for real-time data analysis, insights, and secure user access.</span>,
            <span>Implemented <Highlight>RESTful endpoints</Highlight> and robust user authentication and security mechanisms with Go framework and libraries, ensuring data confidentiality and <Highlight>controlled access</Highlight>.</span>,
            <span>Optimized system responsiveness by implementing <Highlight>Redis</Highlight> for in-memory caching, enhancing user experiences during assessment activities and utilizing <Highlight>Goroutines</Highlight> for handling concurrent tasks.</span>,
            <span>Proficiently utilized various Go packages, including <Highlight>net/http</Highlight> for handling HTTP requests and responses, ensuring the smooth execution of backend functionalities.</span>,
        ]
    },
    {
        'name': 'Dell India',
        'location': 'Chennai, India',
        'role': 'Python Developer',
        'duration': 'Jan 2020 - June 2020',
        'responsiblity': [
            <span>Collaborated with customer support teams to understand needs, building a <Highlight>Fibre</Highlight> backend API and <Highlight>Vue.js</Highlight> frontend for streamlined issue resolution.</span>,
            <span>Followed TDD principles with <Highlight>Go testing libraries</Highlight>, ensuring code quality and functionality. Used <Highlight>GoDoc</Highlight> for clear developer and support team documentation.</span>,
            <span>Implemented a robust solution using Vue.js for frontend and Fibre framework for backend APIs. This integration improved customer support and streamlined issue resolution.</span>,
            <span> Leveraged <Highlight>AWS infrastructure</Highlight> with Compute Engine, S3, Lambda Functions, and API Gateway for deployment, data storage, serverless functions, and RESTful APIs.</span>,
        ]
    },
    {
        'name': 'Hindustan University',
        'location': 'NY, USA',
        'role': 'Bachelors in Computer Science',
        'duration': 'Jun 2016 - Apr 2020',
        'responsiblity': [
            <span>Possessed a solid understanding of <Highlight>programming fundamentals</Highlight>, algorithms, and <Highlight>problem-solving</Highlight> techniques acquired through introductory courses.</span>,
            <span>Proficient in applying various <Highlight>data structures</Highlight>, like Stacks, Queues, Trees, and Graphs; and their associated algorithms through in-depth study and practical application.</span>,
            <span>Gained a thorough understanding of computer organization, architecture, and <Highlight>operating systems</Highlight> gained through dedicated coursework.</span>,
            <span>Relevant <Highlight>CourseWork</Highlight>: Data Structures and Algorithms, Operating Systems, Database Management Systems, <Highlight>Web Development</Highlight></span>,
        ]
    }
];

export const pyExperienceData = [
    {
        'name': 'American Family Insurance',
        'location': 'Madison, WI, USA',
        'role': 'Sr. Python Developer',
        'duration': 'Sep 2021 - Present',
        'responsiblity': [
            <span>Led the design and development of an end-to-end Insurance Quote Generation System, combining <Highlight>Django</Highlight> backend and <Highlight>React.js</Highlight> frontend, transforming the insurance quote process.</span>,
            <span>Utilized <Highlight>Django's ORM</Highlight> to implement CRUD operations and various other functionalities, such as <Highlight>Django filters</Highlight> and search backends, on database tables.</span>,
            <span>Implemented Django models for insurance policies and user profiles exploiting Python libraries such as <Highlight>Django Rest Framework</Highlight> for seamless API integration.</span>,
            <span>Incorporated intricate premium calculations using Python libraries like <Highlight>numpy and pandas</Highlight>, ensuring accurate pricing based on user inputs and policy parameters.</span>,
        ]
    },
    {
        'name': 'University at Buffalo',
        'location': 'NY, USA',
        'role': 'Bachelors in Computer Science',
        'duration': 'Aug 2021 - Feb 2023',
        'responsiblity': [
            <span>Mastered <Highlight>numerical methods</Highlight>, statistical analysis, and <Highlight>data mining techniques</Highlight> to uncover hidden patterns and trends in datasets.</span>,
            <span>Possess strong understanding and practical experience with various <Highlight>machine learning algorithms</Highlight> for building predictive models and solving complex problems.</span>,
            <span>Skilled in designing, querying, and managing data within various Database Management Systems (DBMS) for efficient data organization and retrieval.</span>,
            <span>Relevant <Highlight>CourseWork</Highlight>: Numerical Math, Statistical Data Mining, Machine Learning, Probability, DBMS</span>,
        ]
    },
    {
        'name': 'ETS',
        'location': 'Princeton, NJ, USA',
        'role': 'Python Developer',
        'duration': 'July 2020 - Aug 2021',
        'responsiblity': [
            <span>Utilized <Highlight>React.js</Highlight> and <Highlight>Django Rest Framework</Highlight> with GraphQL, to provide real-time analytics and insights to educators and students.</span>,
            <span>Implemented robust user authentication using <Highlight>JWT's</Highlight> and security mechanisms with Django Rest Framework, ensuring data confidentiality and controlled access.</span>,
            <span>Utilized real-time data analytics with <Highlight>Kafka</Highlight>, streaming assessment data for prompt insights and dynamic recommendations.</span>,
            <span>Optimized system responsiveness by implementing <Highlight>Redis</Highlight> for in-memory caching, enhancing user experiences during assessment activities and also utilized <Highlight>Celery</Highlight> for handling periodic tasks.</span>,
        ]
    },
    {
        'name': 'Dell India',
        'location': 'Chennai, India',
        'role': 'Python Developer',
        'duration': 'Jan 2020 - June 2020',
        'responsiblity': [
            <span>Collaborated with Dell India’s customer support teams to gather dashboard’s functionalities and <Highlight>user workflows</Highlight></span>,
            <span>Utilized <Highlight>Vue.js</Highlight> for the frontend and <Highlight>Flask Restful</Highlight> for the backend, enhancing customer support and issue resolution processes.</span>,
            <span>Followed Test-Driven Development (TDD) principles, writing unit tests using <Highlight>PyUnit</Highlight> and <Highlight>PyTest</Highlight> libraries to ensure code quality and functionality.</span>,
            <span>Implemented <Highlight>AWS cloud infrastructure</Highlight>, deploying the application on EC2 instances, using S3 for storage, Lambda for serverless functions, and <Highlight>API Gateway</Highlight> for Restful APIs.</span>,
        ]
    },
    {
        'name': 'Hindustan University',
        'location': 'NY, USA',
        'role': 'Bachelors in Computer Science',
        'duration': 'Jun 2016 - Apr 2020',
        'responsiblity': [
            <span>Possessed a solid understanding of <Highlight>programming fundamentals</Highlight>, algorithms, and <Highlight>problem-solving</Highlight> techniques acquired through introductory courses.</span>,
            <span>Proficient in applying various <Highlight>data structures</Highlight>, like Stacks, Queues, Trees, and Graphs; and their associated algorithms through in-depth study and practical application.</span>,
            <span>Gained a thorough understanding of computer organization, architecture, and <Highlight>operating systems</Highlight> gained through dedicated coursework.</span>,
            <span>Relevant <Highlight>CourseWork</Highlight>: Data Structures and Algorithms, Operating Systems, Database Management Systems, <Highlight>Web Development</Highlight></span>,
        ]
    }
];

/**
 * 2019, 2020, 2021, 2022, 2023, 2024
 * 2019(oct) - 2021(1.10); 2022(Apr) - 2023(Jan)(9); 2023(jan) - 2024(Feb)(1.1) => 37 ~ 4
 */

export const experienceTitleContent = "The projects in my portfolio showcase a wide range of technologies from the tech stack I mentioned earlier.";



// <div className='h-[100px] flex justify-around py-0 '>
// <span className=''></span>
// <span className=''></span>
// <span className={`border ${dark ? 'border-slate-500' : 'border-slate-500'} w-0`}></span>
// <span className=''></span>
// <span className=''></span>
// <span className=''></span>
// <span className={`border ${dark ? 'border-slate-500' : 'border-cyan-500'} w-0`}></span>
// <span className=''></span>
// </div>

// <div className={`relative h-[0px] flex justify-around items-center border ${dark ? 'border-slate-500' : 'border-cyan-500'} py-0 ${afterStyles}`}>
// <span className={`flex justify-center items-center border ${dark ? 'border-slate-500' : 'border-cyan-500'} rounded-full w-12 h-12 ${dark ? 'bg-slate-900' : 'bg-white'} z-10`}><i className="fa fa-graduation-cap z-[-1]" style={{fontSize: "18px", color: dark ? text : 'black'}}></i></span>
// <span className='w-12 h-0 border-0'></span>
// <span className={`flex justify-center items-center border ${dark ? 'border-slate-500' : 'border-cyan-500'} rounded-full w-12 h-12 ${dark ? 'bg-slate-900' : 'bg-white'} z-10`}><i className="fa fa-briefcase z-[-1]" style={{fontSize: "18px", color: dark ? text : 'black'}}></i></span>
// <span className='w-12 h-0 border-0'></span>

// <span className={`flex justify-center items-center border ${dark ? 'border-slate-500' : 'border-cyan-500'} rounded-full w-12 h-12 ${dark ? 'bg-slate-900' : 'bg-white'} z-10`}><i className="fa fa-graduation-cap z-[-1]" style={{fontSize: "18px", color: dark ? text : ''}}></i></span>
// <span className='w-12 h-0 border-0'></span>
// <span className={`flex justify-center items-center border ${dark ? 'border-slate-500' : 'border-cyan-500'} rounded-full w-12 h-12 ${dark ? 'bg-slate-900' : 'bg-white'} z-10`}><i className="fa fa-briefcase z-[-1]" style={{fontSize: "18px", color: dark ? text : ''}}></i></span>
// <span className='w-12 h-0 border-0'></span>

// </div>
// <div className='h-[100px] flex justify-around py-0 '>
// <span className={`border ${dark ? 'border-slate-500' : 'border-cyan-500'} w-0`}></span>
// <span className="border-0"></span>
// <span className="border-0"></span>
// <span className="border-0"></span>
// <span className={`border ${dark ? 'border-slate-500' : 'border-cyan-500'} w-0`}></span>
// <span className="border-0"></span>
// <span className="border-0"></span>
// <span className="border-0"></span>
// </div>
// <div className='flex justify-between p-0 px-4 h-fit'>
// <div className={`group/edu flex flex-col p-4 border ${dark ? 'border-slate-500' : ''} shadow-md hover:shadow-lg rounded-xl hover:scale-[1.02] transition duration-700 cursor-pointer mobile:bg-white-200 mobile:p-2`}>
//     <span style={{color: text}} className="text-lg font-normal transition duration-700 group-hover/edu:text-cyan-600 text-zinc-700 small:text-sm mobile:text-sm">Hindustan University
//     <span style={{color: text}} className="text-[1rem] text-gray-500 font-normal small:text-[0.7rem] mobile:text-[0.75rem]">, Chennai, India</span></span>
//     <span style={{color: text}} className="group-hover/edu:text-cyan-600 transition duration-700 text-md text-gray-500 font-light small:text-[0.7rem] mobile:text-[0.75rem]">Bachelors Degree in Computer Science</span>
//     <span style={{color: text}} className="group-hover/edu:text-cyan-600 transition duration-700 text-sm text-gray-500 font-light small:text-[0.5rem] mobile:text-[0.7rem]">July 2016 - May 2020</span>
// </div>
// <span className="flex flex-col p-4 mobile:bg-white-200 mobile:p-2"></span>

// <div className={`group/edu flex flex-col p-4 border ${dark ? 'border-slate-500' : ''} shadow-md hover:shadow-lg rounded-xl hover:scale-[1.02] transition duration-700 cursor-pointer mobile:bg-white-200 mobile:p-2`}>
//     <span style={{color: text}} className="text-lg font-normal transition duration-700 group-hover/edu:text-cyan-600 text-zinc-700 small:text-sm mobile:text-sm">University at Buffalo, SUNY
//     <span style={{color: text}} className="text-[1rem] text-gray-500 font-normal small:text-[0.7rem] mobile:text-[0.75rem]">, NY, USA</span></span>
//     <span style={{color: text}} className="group-hover/edu:text-cyan-600 transition duration-700 text-md text-gray-500 font-light small:text-[0.7rem] mobile:text-[0.75rem]">Masters Degree in Data Science</span>
//     <span style={{color: text}} className="group-hover/edu:text-cyan-600 transition duration-700 text-sm text-gray-500 font-light small:text-[0.5rem] mobile:text-[0.7rem]">August 2021 - December 2022</span>
// </div>
// <span className="flex flex-col p-4 mobile:bg-white-200 mobile:p-2"></span>
// <span className="flex flex-col p-4 mobile:bg-white-200 mobile:p-2"></span>
// </div>