import { ProjectItem, SkillCategory, ServiceItem, AchievementItem } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Yousef Gamal Hegran',
  title: 'Full Stack PHP & .NET Developer',
  field: 'Full Stack Web Development',
  mainNiche: 'Full Stack PHP & .NET Development',
  headline: 'Building Modern, Reliable & Scalable Web Solutions',
  heroDescription: 'I build complete web applications using modern frontend technologies and powerful PHP and .NET backend solutions.',
  about: 'I am a Full Stack PHP & .NET Developer focused on building modern and reliable web applications. I work across both frontend and backend development using technologies such as PHP, Laravel, C#, .NET, ASP.NET Core, HTML, CSS, JavaScript, Bootstrap, MySQL, SQL, REST APIs, and Git.\n\nI focus on understanding project requirements, developing clean and maintainable code, integrating databases and APIs, and delivering practical web solutions that meet client needs.',
  email: 'yousefgamalhegran@gmail.com',
  education: {
    faculty: 'Faculty of Specific Education',
    university: 'Menoufia University',
    department: 'Educational Technology',
    specialization: 'Computer Teacher',
    academicLevel: 'Third Year',
    description: 'Combining computational concepts, pedagogy, and software development methodologies to build structured educational and web systems.'
  },
  usp: {
    english: 'I help businesses build complete web solutions through Full Stack PHP and .NET development, combining frontend, backend, databases, and APIs to deliver practical and reliable applications.',
    arabic: 'أساعد الشركات وأصحاب المشاريع على بناء حلول ويب متكاملة من خلال تطوير Full Stack باستخدام PHP و.NET، مع الجمع بين الـFrontend والـBackend وقواعد البيانات وواجهات الـAPI لتقديم تطبيقات عملية وموثوقة.',
    supportingPoints: [
      'Full Stack Development',
      'PHP & Laravel Development',
      'C# & .NET Development',
      'Database & API Integration',
      'Complete Web Solutions',
      'Clean & Maintainable Code'
    ]
  },
  cta: {
    headline: "Let's Build Your Next Web Project",
    text: "Have a web project in mind? Let's discuss your requirements and build a reliable solution together."
  },
  testimonialsNote: 'Client testimonials will be added as I complete freelance projects and receive verified client feedback.'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    categoryKey: 'frontend',
    description: 'Building responsive, structured, and user-friendly client-side interfaces.',
    skills: [
      { name: 'HTML', description: 'Semantic markup, accessibility, SEO structure', badge: 'HTML5' },
      { name: 'CSS', description: 'Modern responsive layouts, flexbox, grid, styling', badge: 'CSS3' },
      { name: 'JavaScript', description: 'DOM manipulation, dynamic interactions, ES6+', badge: 'JS ES6+' },
      { name: 'Bootstrap', description: 'Rapid responsive UI prototyping and grid design', badge: 'Bootstrap' }
    ]
  },
  {
    title: 'Backend Development',
    categoryKey: 'backend',
    description: 'Engineering robust server-side business logic, MVC architecture, and backend systems.',
    skills: [
      { name: 'PHP', description: 'Server-side scripting, OOP, MVC architecture', badge: 'PHP 8+' },
      { name: 'Laravel', description: 'Routing, Eloquent ORM, Blade templating, middleware', badge: 'Laravel' },
      { name: 'C#', description: 'Strongly typed object-oriented software engineering', badge: 'C#' },
      { name: '.NET', description: 'Application framework for high-throughput enterprise systems', badge: '.NET' },
      { name: 'ASP.NET Core', description: 'Cross-platform modern web APIs and server applications', badge: 'ASP.NET Core' }
    ]
  },
  {
    title: 'Database Management',
    categoryKey: 'database',
    description: 'Designing relational database models, maintaining schemas, and executing efficient queries.',
    skills: [
      { name: 'MySQL', description: 'Relational data modeling, indexing, foreign keys, ACID compliance', badge: 'MySQL' },
      { name: 'SQL', description: 'Complex queries, schema definition, data manipulation, optimization', badge: 'SQL' }
    ]
  },
  {
    title: 'API & Development Tools',
    categoryKey: 'tools',
    description: 'Standardized communication endpoints, version control, and collaborative workflows.',
    skills: [
      { name: 'REST APIs', description: 'Standardized HTTP endpoints, JSON serialization, client-server decoupling', badge: 'REST' },
      { name: 'Git', description: 'Version control, branch management, repositories, code history', badge: 'Git' }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    technologies: 'HTML, CSS, JS, Bootstrap, PHP, Laravel, .NET, MySQL',
    shortDescription: 'Build complete web applications from frontend to backend.',
    clientValue: 'Provides you with an end-to-end, unified web solution where the user interface, backend server, and database communicate smoothly without technical disconnects.',
    deliverables: [
      'Responsive client interface designed for desktop and mobile',
      'Robust backend logic with secure authentication',
      'Integrated relational database with optimized queries',
      'Clean deployment setup and maintainable codebase'
    ]
  },
  {
    id: 2,
    title: 'PHP & Laravel Development',
    technologies: 'PHP, Laravel, Blade, Eloquent, MySQL',
    shortDescription: 'Develop modern and reliable web applications using PHP and Laravel.',
    clientValue: 'Leverages the battle-tested Laravel ecosystem to deliver rapid, organized, and secure applications with clean MVC architecture and expressive code.',
    deliverables: [
      'Custom web applications and portal backends',
      'Eloquent ORM database modeling and relationships',
      'Role-based access control (RBAC) and authentication',
      'Secure request handling, CSRF protection, and validation'
    ]
  },
  {
    id: 3,
    title: 'C# & .NET Development',
    technologies: 'C#, .NET Framework, Object-Oriented Design',
    shortDescription: 'Build backend systems and web solutions using C# and .NET.',
    clientValue: 'Ensures rock-solid type safety, maintainability, and high-performance business execution tailored for systems that demand stability and consistency.',
    deliverables: [
      'Structured business logic and domain service layers',
      'Object-oriented system architecture and design patterns',
      'Data mapping and reliable backend processing',
      'Maintainable, compile-time verified code structure'
    ]
  },
  {
    id: 4,
    title: 'ASP.NET Core Development',
    technologies: 'ASP.NET Core, C#, Web APIs, Dependency Injection',
    shortDescription: 'Develop scalable web applications and APIs using ASP.NET Core.',
    clientValue: 'Delivers modern, high-speed, cross-platform web backends and microservices equipped with built-in dependency injection, asynchronous handling, and robust security.',
    deliverables: [
      'Modern RESTful web APIs for web and mobile frontends',
      'Asynchronous request pipelines and controller design',
      'Middleware configuration for logging, auth, and error handling',
      'Scalable architecture prepared for future feature growth'
    ]
  },
  {
    id: 5,
    title: 'Database Development',
    technologies: 'MySQL, SQL, Database Normalization',
    shortDescription: 'Design and integrate MySQL and SQL databases with web applications.',
    clientValue: 'Guarantees your data is normalized, protected against corruption, efficiently queried, and seamlessly connected to your backend frameworks.',
    deliverables: [
      'Relational schema design and Entity-Relationship structuring',
      'Foreign key constraints and data integrity rules',
      'Query optimization and indexing for fast lookups',
      'Seamless integration with Laravel Eloquent and .NET ORM'
    ]
  },
  {
    id: 6,
    title: 'REST API Development',
    technologies: 'RESTful Architecture, JSON, HTTP Verbs, Webhooks',
    shortDescription: 'Develop and integrate APIs for web applications.',
    clientValue: 'Allows your application to exchange data securely with third-party platforms, mobile frontends, payment gateways, and automated services.',
    deliverables: [
      'Clean endpoint architecture following HTTP standard practices',
      'Consistent JSON response contracts and error codes',
      'API authentication, token handling, and payload validation',
      'Third-party webhook listeners and data exchange pipelines'
    ]
  },
  {
    id: 7,
    title: 'Website Development & Maintenance',
    technologies: 'HTML, CSS, Bootstrap, JavaScript, PHP, Bug Fixing',
    shortDescription: 'Build, improve, fix, and maintain existing websites.',
    clientValue: 'Helps keep your existing web assets updated, resolving functional bugs, improving responsiveness, and adding requested features as your needs evolve.',
    deliverables: [
      'Bug diagnosis, troubleshooting, and code remediation',
      'Mobile responsiveness fixes and Bootstrap layout adjustments',
      'Feature additions and backend script enhancements',
      'Code refactoring for better readability and maintainability'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sales-management-system',
    title: 'Sales Management System',
    category: 'Web Development',
    technologies: ['PHP', 'Laravel', 'MySQL'],
    description: 'A web-based sales management system designed to manage products, categories, and sales-related data through an organized backend system.',
    status: 'Completed',
    architectureNotes: [
      'Built with Laravel MVC pattern separating controllers, models, and views',
      'Relational MySQL schema tracking inventory, product categories, and transaction histories',
      'Clean administrative dashboard for managing inventory catalog and records',
      'Form validation, secure database transactions, and data filtering'
    ],
    features: [
      'Product and catalog management with categorical classification',
      'Sales transaction logging and record filtering',
      'Structured backend control panel for operational data entry',
      'Relational data integrity ensuring accurate stock and item records'
    ],
    databaseDesign: [
      'Products table with foreign key relations to categories',
      'Sales and transaction log tables with timestamp indexing',
      'ACID transaction guarantees for sales logging'
    ],
    apiIntegration: [
      'Internal RESTful controller endpoints for asynchronous data updates',
      'JSON endpoints for inventory filtering and search'
    ]
  },
  {
    id: 'teacher-saas-platform',
    title: 'Teacher SaaS Platform',
    category: 'SaaS / Web Development',
    technologies: ['Web Development', 'SaaS', 'Backend Architecture'],
    description: 'A SaaS platform concept designed to help teachers create and manage their own branded educational platforms.',
    status: 'Platform Concept',
    architectureNotes: [
      'Designed around a multi-tenant paradigm enabling independent teacher workspaces',
      'Modular course delivery structure with lecture hosting and student access levels',
      'Clear separation of instructor administrative tools and student viewports',
      'Scalable architecture plan accommodating multiple simultaneous educators'
    ],
    features: [
      'Custom workspace setup for individual teachers and tutors',
      'Curriculum and lesson resource management modules',
      'Student enrollment tracking and access permissions',
      'Branded teacher dashboard concept for content distribution'
    ],
    databaseDesign: [
      'Instructor profiles and workspace configuration entities',
      'Courses, modules, lessons, and enrollment mapping tables',
      'Student progress and access permission schema'
    ]
  },
  {
    id: 'pasta-cup-order-automation',
    title: 'Pasta Cup Order Automation',
    category: 'Automation / Web Integration',
    technologies: ['n8n', 'Google Sheets', 'Telegram', 'Facebook Messenger API'],
    description: 'An automated ordering workflow designed to handle customer orders through Messenger, store order information in Google Sheets, and send notifications through Telegram.',
    status: 'Implemented Workflow',
    architectureNotes: [
      'End-to-end webhook architecture connecting messaging platforms to real-time notification pipelines',
      'Event-driven data processing pipeline orchestrated with n8n workflow nodes',
      'Structured payload parsing from Facebook Messenger API into tabular records',
      'Instant dispatch of order summaries directly to kitchen and management devices via Telegram'
    ],
    features: [
      'Automatic reception of incoming customer orders via Facebook Messenger',
      'Real-time data synchronization into Google Sheets for operational tracking',
      'Instant dispatch of formatted order alerts to Telegram channels',
      'Error handling and fallback logging to ensure zero lost customer requests'
    ],
    apiIntegration: [
      'Facebook Messenger Graph API webhook ingestion',
      'Google Sheets REST API for append and update operations',
      'Telegram Bot API for instant dispatch of markdown-formatted alerts'
    ]
  },
  {
    id: 'founders-pilot',
    title: "Founder's Pilot",
    category: 'Web Platform',
    technologies: ['Web Platform', 'Full Stack Architecture', 'Educational Tech'],
    description: 'A hybrid learning platform concept designed to support entrepreneurs and startups.',
    status: 'Platform Concept',
    architectureNotes: [
      'Comprehensive educational repository tailored for early-stage startup founders',
      'Modular roadmap structure guiding users through stages of venture creation',
      'Integration of interactive tools, milestone trackers, and essential startup guides',
      'Intuitive navigation built to reduce cognitive overload for busy entrepreneurs'
    ],
    features: [
      'Venture building curriculum broken down into actionable stages',
      'Milestone tracking system for monitoring startup progress',
      'Resource directory with curated tools, templates, and operational guides',
      'Community discussion and mentor feedback layout concept'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'depi-training',
    title: 'Digital Egypt Pioneers Initiative (DEPI) Training',
    organization: 'Ministry of Communications and Information Technology (MCIT)',
    focus: 'Comprehensive professional training in Full Stack Web Development and industry-standard workflows.',
    category: 'Specialized Track'
  },
  {
    id: 'iti-training',
    title: 'Information Technology Institute (ITI) Technical Training',
    organization: 'ITI Egypt',
    focus: 'Intensive web development foundations, software engineering best practices, and code quality standards.',
    category: 'Specialized Track'
  },
  {
    id: 'dotnet-training',
    title: '.NET & ASP.NET Core Specialized Training',
    organization: 'Professional Technical Track',
    focus: 'Advanced C#, object-oriented programming, MVC architecture, RESTful API development, and SQL integration.',
    category: 'Technical Training'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Workflow Integration Training',
    organization: 'Technical Specialization',
    focus: 'Hands-on workflow automation using n8n, webhook triggers, API pipelines, and cloud data connectivity.',
    category: 'Technical Training'
  },
  {
    id: 'google-ai',
    title: 'Google AI Training',
    organization: 'Google',
    focus: 'Understanding foundational artificial intelligence principles, technological integration, and modern tech applications.',
    category: 'Professional Certification'
  },
  {
    id: 'icdl',
    title: 'ICDL (International Computer Driving Licence)',
    organization: 'ICDL Foundation',
    focus: 'Validated core computational competency, digital workplace literacy, and information management standards.',
    category: 'Professional Certification'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals Training',
    organization: 'Technical Track',
    focus: 'Core security principles, application vulnerabilities, safe authentication practices, and secure data handling.',
    category: 'Technical Training'
  },
  {
    id: 'google-digital-marketing',
    title: 'Google Digital Marketing Certification',
    organization: 'Google',
    focus: 'Digital presence fundamentals, client discovery channels, online positioning, and web visibility.',
    category: 'Professional Certification'
  }
];

export const CONTACT_PLATFORMS = [
  {
    name: 'GitHub',
    placeholder: '[GitHub Profile]',
    description: 'Code repositories & version-controlled projects',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    placeholder: '[LinkedIn Profile]',
    description: 'Professional networking & career updates',
    icon: 'Linkedin'
  },
  {
    name: 'Upwork',
    placeholder: '[Upwork Profile]',
    description: 'Global freelance contracts & web development gigs',
    icon: 'Globe'
  },
  {
    name: 'Mostaql',
    placeholder: '[Mostaql Profile]',
    description: 'Regional freelance projects in the Arab world',
    icon: 'Briefcase'
  },
  {
    name: 'Khamsat',
    placeholder: '[Khamsat Profile]',
    description: 'Micro-services & custom web solutions',
    icon: 'CheckCircle'
  },
  {
    name: 'Nafezly',
    placeholder: '[Nafezly Profile]',
    description: 'Freelance web development & backend integrations',
    icon: 'Layers'
  },
  {
    name: 'Kafiil',
    placeholder: '[Kafiil Profile]',
    description: 'Custom programming & web maintenance tasks',
    icon: 'Code'
  }
];
