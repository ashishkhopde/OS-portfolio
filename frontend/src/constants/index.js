const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Aug 2026",
    title: "Mastering JWT Authentication & Role-Based Access Control (RBAC) in MERN",
    image: "/images/blog1.png",
    link: "https://github.com/ashishkhopde",
  },
  {
    id: 2,
    date: "Jul 2026",
    title: "Integrating Meta Lead Ads API & WebSockets for Real-Time CRM Lead Ingestion",
    image: "/images/blog2.png",
    link: "https://github.com/ashishkhopde",
  },
  {
    id: 3,
    date: "Jun 2026",
    title: "Optimizing PostgreSQL & Redis Caching for High-Throughput Applications",
    image: "/images/blog3.png",
    link: "https://github.com/ashishkhopde",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Authentication", "RBAC"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Real-Time & Cache",
    items: ["Redis", "WebSockets", "Caching"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Postman", "npm"],
  },
  {
    category: "Integrations",
    items: ["Meta Developer API", "Meta Lead Ads API", "RTO Vehicle API", "Payment Gateways"],
  },
  {
    category: "Development",
    items: ["CRUD", "Database Design", "API Development", "Validation", "Error Handling", "API Security"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#24292e",
    link: "https://github.com/ashishkhopde",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/ashishkhopde",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/file.svg",
    bg: "#ea4335",
    link: "mailto:ashishkhopde7089@gmail.com",
  },
  {
    id: 4,
    text: "Phone",
    icon: "/icons/user.svg",
    bg: "#25D366",
    link: "tel:+917089542024",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: Tractors24
    {
      id: 5,
      name: "Tractors24 Marketplace",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-8",
      windowPosition: "top-[4vh] left-6",
      children: [
        {
          id: 1,
          name: "Tractors24 Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-10",
          subtitle: "Tractor Marketplace & Services Platform",
          image: "/images/tractors24.png",
          description: [
            "Technologies: React.js, Node.js, Express.js, MongoDB, JavaScript, REST APIs, RTO API",
            "• Developed tractor listing and management workflows for a platform used to list and sell tractors and related paid services.",
            "• Developed RESTful APIs and CRUD operations for tractor and service-related data.",
            "• Integrated an RTO/vehicle verification API to verify tractor details using the vehicle registration number.",
            "• Implemented vehicle verification workflows during tractor listing and management.",
            "• Built React.js interfaces and integrated them with backend APIs.",
            "• Implemented authentication, authorization, validation, and permission-based functionality.",
          ],
        },
        {
          id: 2,
          name: "Live Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tractors24.in/",
          position: "top-8 left-60",
        },
        {
          id: 4,
          name: "Tractors24 Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-8 left-108",
          imageUrl: "/images/tractors24.png",
        },
      ],
    },

    // ▶ Project 2: LeadX CRM
    // {
    //   id: 6,
    //   name: "LeadX CRM Platform",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-8 left-64",
    //   windowPosition: "top-[19vh] left-6",
    //   children: [
    //     {
    //       id: 1,
    //       name: "LeadX Details.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-8 left-10",
    //       subtitle: "CRM & Meta Lead Management Platform",
    //       image: "/images/project-2.png",
    //       description: [
    //         "Technologies: React.js, Node.js, Express.js, PostgreSQL, JavaScript, Meta Developer API, Meta Lead Ads API",
    //         "• Developed CRM modules for lead management, tracking, status updates, and follow-up workflows.",
    //         "• Integrated Meta Developer Account and Meta Lead Ads API to fetch leads generated from Meta advertisements.",
    //         "• Developed backend services to process and store incoming Meta leads in the CRM.",
    //         "• Developed student inquiry and student management functionality.",
    //         "• Implemented authentication, authorization, and role-based access control.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Live Link",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://github.com/ashishkhopde",
    //       position: "top-8 left-60",
    //     },
    //     {
    //       id: 4,
    //       name: "LeadX Preview.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-8 left-108",
    //       imageUrl: "/images/project-2.png",
    //     },
    //   ],
    // },

    // ▶ Project 3: Assetzo Property Platform
    {
      id: 7,
      name: "Assetzo Property Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-8",
      windowPosition: "top-[34vh] left-6",
      children: [
        {
          id: 1,
          name: "Assetzo Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-10",
          subtitle: "Property Listing & Booking Platform",
          image: "/images/assetzo.png",
          description: [
            "Technologies: React.js, Node.js, Express.js, PostgreSQL, JavaScript, Redis, Docker, Payment Gateway",
            "• Developed property listing functionality for Rent, Sale, and Lease.",
            "• Implemented property search, filtering, property details, and listing management workflows.",
            "• Developed Homestay functionality for short-term property bookings based on the number of days.",
            "• Developed APIs for property, user, and booking management and integrated payment gateway workflows.",
            "• Implemented authentication, authorization, role-based access control, and Redis caching.",
            "• Used MongoDB, PostgreSQL, and Docker for application data management and development environments.",
          ],
        },
        {
          id: 2,
          name: "Live Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://assetzo.com/",
          position: "top-8 left-60",
        },
        {
          id: 4,
          name: "Assetzo Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-8 left-108",
          imageUrl: "/images/assetzo.png",
        },
      ],
    },

    // ▶ Project 4: Hospital Management System
    {
      id: 8,
      name: "Hospital Management SaaS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-64",
      windowPosition: "top-[49vh] left-6",
      children: [
        {
          id: 1,
          name: "HMS Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-10",
          subtitle: "Hospital Management System — SaaS",
          image: "/images/hms.png",
          description: [
            "Technologies: React.js, Node.js, Express.js, PostgreSQL, MongoDB, TypeScript, REST APIs",
            "• Developed a SaaS-based Hospital Management System (HMS) for healthcare organizations, supporting organization-specific workflows and management operations.",
            "• Developed RESTful APIs and CRUD functionality using Node.js and Express.js.",
            "• Implemented authentication, authorization, role-based access control, validation, and permission-based functionality.",
            "• Built reusable React.js components and integrated frontend modules with backend APIs.",
          ],
        },
        {
          id: 2,
          name: "Live Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ayurflex.digiflex.ai/",
          position: "top-8 left-60",
        },
        {
          id: 4,
          name: "HMS Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-8 left-108",
          imageUrl: "/images/hms.png",
        },
      ],
    },

    // ▶ Project 5: AngelSmartAlgo
    {
      id: 9,
      name: "AngelSmartAlgo Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-96",
      windowPosition: "top-[64vh] left-6",
      children: [
        {
          id: 1,
          name: "AngelSmartAlgo Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-10",
          subtitle: "Stock & Portfolio Management Platform",
          image: "/images/angleAlgo.png",
          description: [
            "Technologies: React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication",
            "• Developed a stock and portfolio management platform where administrators manage client holdings and transactions.",
            "• Built admin functionality to manually add, update, and track stocks held by clients.",
            "• Implemented client workflows for stock purchase requests, stock sell requests, and withdrawal requests.",
            "• Developed admin workflows to review and manage purchase, sell, and withdrawal requests.",
            "• Implemented client balance and transaction management and JWT-based authentication and authorization.",
            "• Developed RESTful APIs and managed MongoDB data models for stocks, portfolios, transactions, and withdrawals.",
          ],
        },
        {
          id: 2,
          name: "Live Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.angelsmartalgo.com/",
          position: "top-8 left-60",
        },
        {
          id: 4,
          name: "AngelSmartAlgo Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-8 left-108",
          imageUrl: "/images/angleAlgo.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "ashish.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-10",
      imageUrl: "/images/ashish.png",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-8 left-60",
      subtitle: "Ashish Khopde | MERN Stack Developer | Full Stack Developer",
      image: "/images/ashish.png",
      description: [
        "Hi! I’m Ashish Khopde 👋, a MERN Stack Developer & Full Stack Developer with 9 months of professional experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript.",
        "Experienced in developing CRM systems, marketplace platforms, property listing & booking applications, stock management platforms, and lead management solutions.",
        "Hands-on with PostgreSQL, Redis, WebSockets, Docker, JWT authentication, role-based access control (RBAC), payment gateway integration, Meta Lead Ads API, and RTO vehicle verification API.",
        "Professional Experience: MERN Stack Developer at Quest Digiflex Private Limited (March 2026 – September 2026) and MERN Stack Intern (December 2025 – February 2026).",
        "Education: B.Tech in Information Technology, Laxmi Narayan College of Technology (2022-26) | Class XII (CBSE), Vidya Vijay Bal Mandir (2021-22).",
        "Target Roles: MERN Stack Developer, Junior Full Stack Developer, React.js Developer, Node.js Developer.",
      ],
    },
    {
      id: 3,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-8 left-108",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "archive1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "archive2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
