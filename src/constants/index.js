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
  mongodb,
  git,
  figma,
  meta,
  tesla,
  hackerabad,
  codeday,
  kalakumbh,
  shopify,
  carrent,
  jobit,
  flutter,
  tripguide,
  threejs,
  supabase,
  python,
  firebase,
  twilio,
  appwrite,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Student Community Leader",
    icon: backend,
  },
  {
    title: "Hackathon Enthusiast",
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
    name: "React JS",
    icon: reactjs,
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
    name: "flutter",
    icon: flutter,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "twilio",
    icon: twilio,
  },
  {
    name: "appwrite",
    icon: appwrite,
  },
];

const experiences = [
  {
    title: "Community Lead",
    company_name: "Hackerabad",
    icon: hackerabad,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Managing and Organizing Student Events outside and in the college campus",
      "Actively participation in Technical Discussions.",
      "Worked on developing the community over GitHub, Slack, Discord, Twitter, Instagram.",
      "We conduct hack-outs every weekend i.e. we learn new tech stacks together.",
    ],
  },
  {
    title: "Fluter Developer Intern",
    company_name: "Kalakumbh",
    icon: kalakumbh,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Design, develop, and maintained web and mobile application using Flutter.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and provide constructive feedback to improve code quality.",
      "Worked collaboratively with development team to identify and solve technical challenges",
    ],
  },
  {
    title: "Hackathon Organizer",
    company_name: "CodeDay Hyderabad",
    icon: codeday,
    iconBg: "#383E56",
    date: "July 2022 - Nov 2022",
    points: [
      "CodeDay is a worldwide event where student artists, programmers, musicians, actors, and writers get together to build apps and games held at Hyderabad",
      "It is a beginner friendly 24h in-person schooler hackathon where more than 100 participants joined in both cohorts",
      "Technically assisted the students as Mentors.",
      "Was a part of Publicity and Logistics Department",
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
    name: "3D Portfolio",
    description:
      "Personal Portfolio made using react and three js inspired from Burno Simon",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/veesesh/3DPortfolio",
  },
  {
    name: "Snippet Safe",
    description:
      "Web application that makes it simple to organize and find code snippets. Increase productivity and simplify the way you work. Your snippets are instantly available.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "hugging face",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://devpost.com/software/snippetsafe",
  },
  {
    name: "Other Projects",
    description:
      "This redirects to my devpost account, where i have made projjects individually and as a team during multiple hackathons that I have been participating so far",
    tags: [
      {
        name: "hackathons",
        color: "blue-text-gradient",
      },
      {
        name: "projects",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://devpost.com/vee19",
  },
];

export { services, technologies, experiences, testimonials, projects };
