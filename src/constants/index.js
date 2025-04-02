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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  video,
  logrocket,
  freelance,
  Internship,
  automailai,
  jobsculptai,
  suburbia,
  iphone,
  videoconnect,
  soda,
  gamingstore,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT ME",
  },
  {
    id: "Experience",
    title: "EXPERIENCE",
  },
  {
    id: "work",
    title: "MY WORK",
  },
  {
    id: "contact",
    title: "CONTACT ME",
  },
  
];

const services = [
  {
    title: "FRONTEND DEVELOPMENT",
    icon: web,
  },
  {
    title: "FULLSTACK DEVELOPMENT",
    icon: mobile,
  },
  {
    title: "SOFTWARE ENGINEERING",
    icon: backend,
  },
  {
    title: "WEB DESIGN",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Front End Development Advisor",
    company_name: "LogRocket",
    icon: logrocket,
    iconBg: "#383E56",
    date: "Dec 2024 – Present",
    points: [
      "Led front-end development discussions and provided insights on best practices, performance optimizations, scalability.",
      "Collaborated with designers, product managers, backend engineers to enhance maintainability and user experience.",
    ],
  },
  {
    title: " Next.js Developer",
    company_name: "AutoMail AI",
    icon: automailai,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Wrote clean, efficient code, to improve maintainability, reusability.",
      "Followed microservices architecture for modularity and integrated NoSQL databases like MongoDB.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "FreeLance Developer",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jun 2022 – Oct 2024",
    points: [
      "Built full stack web applications for clients implementing modern frontend development practices",
      "Developed responsive 3D projects and developed Single Page Applications (SPAs) for clients using React.js and Next.js.",
      "Developed high-performance apps with SEO Optimization,worked with ui/ux designers and Performed code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SmartKnower",
    icon: Internship,
    iconBg: "#E6DEDD",
    date: "Jul 2021 – Oct 2021",
    points: [
      "Built immersive and interactive web apps using Next.js, React.js, TailwindCSS, Material UI, and other UI libraries.",
      "Developed real-time apps with Socket.io, scalable cloud solutions on Google Cloud/Azure, and integrated APIs",
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
// constants.js

 const projects = [
  {
    name: "CHATWITHPDF-AI ",
    description: "Built a Full-Stack AI SaaS Application to chat with any PDF you want using AWS S3 & OpenAI APIs",
    tags: [
      { name: "openai", color: "text-blue-500" },
      { name: "Next.js", color: "text-green-500" },
      { name: "AWS S3", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
      { name: "ClerkAuth", color: "text-blue-500" },
      { name: "TailwindCSS", color: "text-green-500" },
    ],
    video: video,
    project_link: "https://chatwithmypdf.vercel.app/",
  },
  {
    name: "3D SKATEBOARDS",
    description: "Developed responsive 3D skateboard Single Page Application (SPA) using  Next.js",
    tags: [
      { name: "Next.js", color: "text-yellow-500" },
      { name: "TailwindCSS", color: "text-red-500" },
      { name: "TypeScript", color: "text-yellow-500" },
    ],
    video: suburbia,
    project_link: "https://3-dskateboard.vercel.app/",
  },
  {
    name: "3D SODA",
    description: " Built immersive and interactive 3D soda app using Next.js, TailwindCSS.",
    tags: [
      { name: "Next.js", color: "text-yellow-500" },
      { name: "TailwindCSS", color: "text-red-500" },
      { name: "TypeScript", color: "text-yellow-500" },
    ],
    video: soda,
    project_link: "https://soda-ga1h.vercel.app/",
  },
  {
    name: "JOBSCULPT-AI",
    description: "Built Scalable full-stack AI SaaS to Generate Resumes and Cover-letters with AI and built AI interviewer with GeminiAI",
    tags: [
      { name: "GeminiAI", color: "text-blue-500" },
      { name: "Next.js", color: "text-green-500" },
      { name: "PostgreSQL", color: "text-blue-500" },
      { name: "NeonDB", color: "text-green-500" },

    ],
    video: jobsculptai,
    project_link: "https://jobsculptai.vercel.app/",
  },
  {
    name: "VIDEOMEET ",
    description: "Built real-time video conferencing platform with live streaming features, text chat and video chat, file sharing and screen sharing.",
    tags: [
      { name: "Next.js", color: "text-yellow-500" },
      { name: "Stream", color: "text-red-500" },
      { name: "TailwindCSS", color: "text-yellow-500" },
      { name: "Clerk", color: "text-red-500" },
    ],
    video:videoconnect,
    project_link: "https://video-connect-black.vercel.app/",
  },
  {
    name: "Gaming Store",
    description: "Built immersive and cutting edge 3D gaming store app using React.js, TailwindCSS, GSAP.",
    tags: [
      { name: "React.js", color: "text-green-500" },
      { name: "TailwindCSS,", color: "text-blue-500" },
      { name: "GSAP,", color: "text-green-500" },
    ],
    video:gamingstore,
    project_link: "https://saicharangaming.vercel.app/",
  },
  {
    name: "Iphone Clone",
    description: "  Built a responsive 3D iphone Single Page Application (SPA) using  Next.js",
    tags: [
      { name: "React.js", color: "text-yellow-500" },
      { name: "Three.js", color: "text-red-500" },
      { name: "TailwindCSS", color: "text-red-500" },
    ],
    video:iphone,
    project_link: "https://iphone-nu-six.vercel.app/",
  },
  {
    name: "JOBSCULPT-AI",
    description: "Built Scalable full-stack AI SaaS to Generate Resumes and Cover-letters with AI and built AI interviewer with GeminiAI",
    tags: [
      { name: "GeminiAI", color: "text-blue-500" },
      { name: "Next.js", color: "text-green-500" },
      { name: "PostgreSQL", color: "text-blue-500" },
      { name: "NeonDB", color: "text-green-500" },

    ],
    video: jobsculptai,
    project_link: "https://jobsculptai.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
