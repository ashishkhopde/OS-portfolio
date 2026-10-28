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
    name: "Safari",
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
    canOpen: true,
  },
];

const projectsList = [
  {
    id: "tractors24",
    title: "Tractors24 Marketplace",
    subtitle: "Tractor Marketplace & Services Platform",
    category: "Marketplace & Services",
    url: "https://tractors24.in/",
    displayUrl: "tractors24.in",
    image: "/images/tractors24.png",
    badge: "Production",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RTO API", "REST APIs"],
    description: "Tractor listing, buy/sell management, and paid agricultural services platform integrated with government RTO vehicle verification.",
  },
  {
    id: "ekonn",
    title: "EKONN Light CRM",
    subtitle: "Lumina ERP Architectural Lighting Platform",
    category: "Enterprise ERP & CRM",
    url: "https://ekonn.vercel.app/",
    displayUrl: "ekonn.vercel.app",
    image: "/images/ekonn.png",
    badge: "Live App",
    tags: ["React.js", "Node.js", "PostgreSQL", "Docker", "Redis", "JWT & RBAC"],
    description: "Enterprise architectural lighting ERP platform managing inquiries, project 360 workspaces, quotation engine with TDS bundling, purchase orders, and multi-depot inventory.",
  },
  {
    id: "assetzo",
    title: "Assetzo Property Platform",
    subtitle: "Property Listing & Homestays Booking",
    category: "Real Estate & Homestay",
    url: "https://assetzo.com/",
    displayUrl: "assetzo.com",
    image: "/images/assetzo.png",
    badge: "Production",
    tags: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Payment Gateway"],
    description: "Full-scale property marketplace for Rent, Sale, and Lease along with short-term Homestay booking and payment gateway integration.",
  },
  {
    id: "hms",
    title: "Hospital Management SaaS",
    subtitle: "Healthcare Organization Management CRM",
    category: "Healthcare SaaS",
    url: "https://ayurflex.digiflex.ai/",
    displayUrl: "ayurflex.digiflex.ai",
    image: "/images/hms.png",
    badge: "SaaS Portal",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "RBAC"],
    description: "SaaS-based Hospital Management System with organization-specific clinical workflows, doctor & patient tracking, and role-based access control.",
  },
  {
    id: "angelsmartalgo",
    title: "AngelSmartAlgo Platform",
    subtitle: "Stock & Portfolio Management Platform",
    category: "FinTech & Stock Trading",
    url: "https://www.angelsmartalgo.com/",
    displayUrl: "angelsmartalgo.com",
    image: "/images/angleAlgo.png",
    badge: "FinTech",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    description: "Stock trading and client portfolio management desk with live holding trackers, admin approval workflows, and transaction ledgers.",
  },
];

const blogPosts = [];

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
    icon: "/icons/mail.svg",
    bg: "#ea4335",
    link: "mailto:ashishkhopde7089@gmail.com",
  },
  {
    id: 4,
    text: "Phone",
    icon: "/icons/phone.svg",
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
    icon: "/icons/work.svg",
    title: "Projects",
  },
  {
    id: 3,
    icon: "/icons/user.svg",
    title: "People",
  },
  {
    id: 4,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    title: "Ashish Khopde",
    subtitle: "MERN Stack Developer",
    category: "People",
    img: "/images/ashish.png",
  },
  {
    id: 2,
    title: "Tractors24 Marketplace",
    subtitle: "Tractor & Services Platform",
    category: "Projects",
    img: "/images/tractors24.png",
  },
  {
    id: 3,
    title: "EKONN Light CRM",
    subtitle: "Lumina ERP Architecture",
    category: "Projects",
    img: "/images/ekonn.png",
  },
  {
    id: 4,
    title: "Assetzo Property Platform",
    subtitle: "Property Listing & Homestays",
    category: "Projects",
    img: "/images/assetzo.png",
  },
  {
    id: 5,
    title: "Hospital Management SaaS",
    subtitle: "Healthcare SaaS CRM",
    category: "Projects",
    img: "/images/hms.png",
  },
  {
    id: 6,
    title: "AngelSmartAlgo Platform",
    subtitle: "Stock & Portfolio Management",
    category: "Projects",
    img: "/images/angleAlgo.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  projectsList,
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

    // ▶ Project 2: EKONN Light CRM
    {
      id: 6,
      name: "EKONN Light CRM",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-64",
      windowPosition: "top-[19vh] left-6",
      children: [
        {
          id: 1,
          name: "EKONN CRM Flow.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-10",
          subtitle: "Lumina ERP — Architectural Lighting CRM & ERP Platform",
          image: "/images/ekonn.png",
          description: [
            "Technologies: React.js, Node.js, Express.js, PostgreSQL, MongoDB, TypeScript, Redis, Docker, REST APIs, JWT & RBAC",
            "### 1. Executive Summary",
            "Lumina ERP / EKONN Light CRM (Electric Light & LED) is an enterprise management platform designed for architectural, commercial, and industrial lighting businesses.",
            "The system manages the entire project lifecycle—from initial architect inquiry and technical lighting design to custom quotation revisions, vendor procurement, warehouse inventory, GST invoicing, and executive reporting.",
            "### 2. End-to-End Screen Architecture & Flow",
            "• 1. Access & Overview: Secure role-based login (/login) with Quick Switch roles (Admin, Sales Manager, Project Manager, Design Consultant) leading to the Executive Dashboard (/dashboard) with real-time KPI blocks (Total Revenue, Active Projects, Win Rate %, Material Delays) and interactive monthly revenue charts.",
            "• 2. Sales & Inquiries Pipeline (/inquiries): Dual view mode featuring a drag-and-drop Kanban Board (New → Contacted → Qualified → Converted) and sortable tabular list with a one-click 'Convert to Project' modal.",
            "• 3. Projects 360° Workspace (/projects/:id): Centralized workspace with Overview, Parties & Contacts (Architect, Lighting Designer, Electrical Consultant, Contractor), Interactive Milestones timeline, linked Quotations, and linked Purchase Orders.",
            "• 4. Quotations Engine (/quotations/new, /quotations/:id): Step-by-step proposal builder with catalog product selection, line-item pricing (Qty, Unit Price, Line Discount), dynamic 18% GST calculation, Technical Data Sheet (TDS) bundling, and revision tracking (R0 → R1) preserving historical baselines.",
            "• 5. Procurement & Purchase Orders (/purchase-orders): Automated supplier PO generation upon won quotation status, tracking dispatch dates, shipping milestones, and Goods Receipt Notes (GRN) on warehouse arrival.",
            "• 6. Multi-Warehouse Inventory (/inventory): Real-time multi-depot stock monitoring, low-stock threshold alerts, chronological Stock Movement Ledger (Receipts, Dispatches, Adjustments), and Product-Warehouse matrix.",
            "• 7. Invoices & Billing (/invoices, /payments): GST-compliant tax invoicing linked to quotations, HSN summary print layouts, and cash inflow/outflow ledger supporting NEFT, RTGS, Cheque, and UPI with automated status updates.",
            "• 8. Business Intelligence & Reports (/reports): 10 analytical report dimensions (Region-wise, Client-Type, Project Status, Product Type, Deal Value, Supplier Volume, Inventory Valuation, Material Delay, Team Performance) with interactive drilldown and native OpenXML Excel (.xlsx) export with embedded charts.",
          ],
        },
        {
          id: 2,
          name: "Live Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ekonn.questdigiflex.in/",
          position: "top-8 left-60",
        },
        {
          id: 4,
          name: "EKONN Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-8 left-108",
          imageUrl: "/images/ekonn.png",
        },
      ],
    },

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
  name: "Archive",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Early UI Mockup.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "Legacy Flow.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-48",
      imageUrl: "/images/trash-2.png",
    },
    {
      id: 3,
      name: "Archived Notes.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-8 left-88",
      subtitle: "Archived Drafts & Prototypes",
      description: [
        "### Archive & Trash Bin",
        "• Early exploratory wireframes and retired interface components.",
        "• Legacy architectural diagrams superseded by current modular ERP and SaaS architectures.",
        "• Previous iterations of design assets kept for historical reference.",
      ],
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
