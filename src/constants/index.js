import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs, cloudtek, aksaSds, deltaShoppe, java, angular, sangular,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: "Mobile App Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Front-end Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: 'Java',
        icon: java,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full stack Engineer",
        company_name: "CloudTek",
        icon: cloudtek,
        iconBg: "#fff",
        date: "June 2022 - Present",
        points: [
            "Designed, developed, and maintained complex web applications using technologies such as NodeJs,Angular, Java Spring, Spring Security, ReactJS, GraphQL, RxDB, REST API, PostgreSQL, and CouchDB Conducted code training and PR reviews to ensure code quality and consistency across the development team",
            "Managed a team of developers, providing guidance and support to ensure successful project delivery • Facilitated agile project management methodologies such as Scrum, Kanban, and Agile to ensure efficient project planning, execution, and delivery",
            "Collaborated with cross-functional teams to identify and implement technical solutions to complex business problems",
            "Analyzed user requirements and designed efficient, user-friendly interfaces that optimized user experience",
            "Maintained comprehensive documentation of software design and codebase to ensure efficient code maintenance and future scalability",
            "Conducted testing and debugging of applications to ensure high-quality and error-free code",
            "Stayed up-to-date with emerging technologies and trends in software development, constantly seeking ways to improve skills and contribute to the growth of the company."
        ],
    },
    {
        title: "Software Engineer MEAN Stack",
        company_name: "AKSA-SDS",
        icon: aksaSds,
        iconBg: "#E6DEDD",
        date: "Aug 2020 - May 2022",
        points: [
            "Developed and maintained various branchless banking applications using MEAN stack technologies (MongoDB, Express, AngularJS, NodeJS) for clients such as EasyPaisa and Jazzcash. • Designed and implemented microservices architecture to improve scalability and maintainability of systems.",
            "Worked on TPL Trakker maps application, using Leaflet JS to create customized maps for FoodPanda, providing an alternative maps service to Google maps for food delivery purposes.",
            "Contributed to the development of Zarai Taraqiati Bank Limited, a banking application built on Angular.",
            "Utilized various libraries such as D3js, Leaflet JS, and Three.js to create interactive data visualizations and enhance the user experience.",
            "Conducted unit testing and integration testing of applications using Jest JS to ensure high-quality, error-free code.",
            "Collaborated with cross-functional teams to identify and implement technical solutions to complex business problems.",
            "Maintained comprehensive documentation of software design and codebase to ensure efficient code maintenance and future scalability.",
            "Stayed up-to-date with emerging technologies and trends in software development, constantly seeking\n" +
            "ways to improve skills and contribute to the growth of the company."
        ],
    },
    {
        title: "Jr. PHP Developer",
        company_name: "DeltaShoppe",
        icon: deltaShoppe,
        iconBg: "#fff",
        date: "Mar 2017 - Aug 2020",
        points: [
            "Developed and maintained web applications using PHP frameworks such as Laravel and Lumen for backend APIs and Blade templates for frontend development.",
            "Collaborated with designers, project managers, and other developers to deliver high-quality products on time.",
            "Participated in code reviews to ensure code quality and maintainability.",
            "Utilized Git for version control and collaborated with other developers to ensure code consistency and prevent conflicts.",
            "Built responsive and mobile-friendly web applications that offer a seamless user experience across all devices.",
            "Integrated third-party APIs and libraries to enhance the functionality of web applications.",
            "Developed and maintained documentation of software design and codebase to ensure efficient code maintenance and future scalability.",
            "Optimized legacy systems into optimized systems by optimizing MySQL queries and relational databases.",
            "Maintained and optimized legacy databases with millions of records.",
            "Integrated Google Maps into MySimpleRx pharmacy coupon web application.",
            "Developed microservices architecture for branchless banking applications.",
            "Worked on some of the biggest branchless banking systems in Pakistan, including EasyPaisa and Jazzcash.",
            "Worked on financial web applications such as VARS and MySimpleRx"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};
