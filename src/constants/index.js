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
    threejs,
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
      title: "IT Support",
      icon: web,
    },
    {
      title: "PHP Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "React Native",
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
      title: "IT Specialist",
      company_name: "Alfa Business Incorporation | TasksEveryday TeamsPH",
      icon: tailwind,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Configured and optimized network infrastructure for seamless connectivity and performance.",
        "Managed and monitored SEP firewall agents, focusing on high bandwidth usage to ensure security and efficiency.",
        "Administered Active Directory (AD), including reorganizing groupings to enhance network security and management.",
        "Configured and maintained various application tools, such as Amazon, Citrix Workspace, Kustomer Tools, VPN, Microsoft Teams, and GoDaddy.",
        "Ensured smooth and uninterrupted operation of IT systems and services through proactive maintenance.",
        "Managed and resolved support tickets using Zoho Desk, ensuring prompt and effective issue resolution.",
      ],
    },
    {
      title: "IT Support Intern",
      company_name: "Innoland Development Corporation",
      icon: tailwind,
      iconBg: "#E6DEDD",
      date: "September 2022 - June 2023",
      points: [
        "Assisted with the installation and setup of hardware and software systems.",
        "Performed routine maintenance and updates on both software and hardware to ensure optimal performance.",
        "Managed and organized IT-related documentation.",
        "Conducted research on technical issues, such as computer bugs, and identified potential solutions.",
        "Collaborated with senior programmers to develop web systems using PHP.",
        "Studied and gained experience in web design technologies, including HTML, CSS, and JavaScript.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Calendar Scheduling System",
      description:
        "Web-based platform that allows users to create schedules, tasks, events, and seminars through a calendar scheduling system from various providers, offering a convenient and efficient solution for organizing and managing time-sensitive activities.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "https://github.com/llamedo123/calendar",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/llamedo123/calendar",
    },
    {
      name: "Flappy Bird",
      description:
        "Web-based platform that allows users to play the Flappy Bird game, offering a fun, engaging, and challenging experience that tests reflexes and coordination, providing an entertaining and efficient way to pass the time.",
      tags: [
        {
          name: "HTML, CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "https://github.com/llamedo123/flappy_bird",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/llamedo123/flappy_bird",
    },
    {
      name: "DMS Project Contact Management System",
      description:
        "The Project Contact Management System, developed in PHP, is a simple, user-friendly application. It allows users to add, view, update, and delete contact details, including first name, last name, gender, address, and contact information, displayed in a list view.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "https://github.com/llamedo123/system_contact",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/llamedo123/system_contact",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };