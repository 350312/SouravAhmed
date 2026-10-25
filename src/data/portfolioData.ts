import { Project, SkillCategory, InfoRow, TimelineItem, CorePillar } from '../types';

export const PROFILE_AVATAR = "/assets/aistudio/image_4b97ffa9.png";

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'monpura-tales-rpg',
    icon: '🗡️',
    tag: 'Classic 2D Action RPG',
    category: 'Games & Tools',
    title: 'Monpura Tales — Classic 2D Action RPG',
    desc: 'A retro pixel-art 2D action role-playing adventure built for the web. Features real-time player combat, dungeon exploration, enemy state machines, and responsive canvas rendering.',
    detailedOverview: 'Monpura Tales is an immersive browser-based 2D action role-playing game developed to deliver classic 16-bit nostalgic adventure without plugins or heavy engines. Engineered with pure HTML5 Canvas and TypeScript, it incorporates responsive 60 FPS sprite rendering, tilemap collision matrices, dynamic inventory management, health systems, and retro audio synthesis.',
    highlights: [
      'Custom 2D canvas sprite loop and smooth 60 FPS animation framework',
      'Tile-based collision detection, weapon mechanics, and enemy AI state machines',
      'Zero-dependency web runtime with responsive controls on both desktop and mobile'
    ],
    stack: ['TypeScript', 'HTML5 Canvas', 'Web Audio API', 'State Machine', 'Vercel'],
    link: 'https://rpg-game-mu-seven.vercel.app/',
    github: 'https://github.com/350312',
    image: '/images/projects/rpg-game.png',
    featured: true
  },
  {
    id: 'bup-cse-notice-management',
    icon: '🏛️',
    tag: 'Academic Management',
    category: 'Full-Stack & Web',
    title: 'BUP CSE Notice & Course Board',
    desc: 'A centralized academic management and notice board built for the Dept. of Computer Science & Engineering at Bangladesh University of Professionals (BUP).',
    detailedOverview: 'A production-grade departmental notice and academic scheduling hub designed to eliminate fragmented messaging across social platforms. The system provides dedicated semester channels (1st through 8th semester plus Masters), automated test and exam schedules, downloadable syllabus materials, and secure authentication for department administrators.',
    highlights: [
      'Structured 8-semester course and class test announcement segregation',
      'Secure administrative dashboard for faculty with CRUD notice orchestration',
      'Searchable notice archive with urgent exam alert banners and deadline countdowns'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Role-Based Auth', 'Tailwind CSS', 'Vercel'],
    link: 'https://bup-cse-notice-management.vercel.app/',
    github: 'https://github.com/350312',
    image: '/images/projects/bup-cse-notice-management.png',
    featured: true
  },
  {
    id: 'frmc-lc-bmss',
    icon: '🩺',
    tag: 'Healthcare Community Hub',
    category: 'Full-Stack & Web',
    title: 'FRMC-LC BMSS — Medical Students\' Society Platform',
    desc: 'Official digital portal for Fazlur Rahman Medical College Local Committee of Bangladesh Medical Students\' Society (BMSS), coordinating medical education, blood donor network, and standing committees.',
    detailedOverview: 'FRMC-LC BMSS is a student-led medical community web platform operating across medical education (SCOME), sexual & reproductive health (SCORA), public health (SCOPH), human rights & peace (SCORP), and research exchange (SCORE). Features a searchable emergency blood donor registry, standing committee portals, executive member rosters, and community event publishing.',
    highlights: [
      'Emergency blood donor database with real-time blood group search and contact requests',
      'Six dedicated standing committee modules with activity archives and event coverage',
      'Responsive community portal supporting dark/light theme switching and member directory'
    ],
    stack: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Search Indexing', 'Responsive Design'],
    link: 'https://www.frmc-lc-bmss.com/',
    github: 'https://github.com/350312',
    image: '/images/projects/frmc-lc-bmss.png',
    featured: true
  },
  {
    id: 'docdoc-ai-health',
    icon: '🩺',
    tag: 'AI Health Consultant',
    category: 'AI & Automation',
    title: 'Doc-Doc — AI Clinical & Health Companion',
    desc: 'An AI-driven diagnostic triage and patient health companion tracking daily vitals, medication adherence, and clinical consultation prep with contextual symptom analysis.',
    detailedOverview: 'Doc-Doc is engineered to address the critical friction in pre-clinical triage. By integrating advanced conversational LLMs with medical terminology embeddings and clinical triage logic, the system conducts multi-turn interviews, analyzes vitals, and flags severity levels with confidence-scored insights.',
    highlights: [
      'Multi-turn conversational triage powered by Python and specialized health context models',
      'Django REST framework backend with isolated patient record encryption',
      'Structured clinical summary export for downstream doctors and telemedicine providers'
    ],
    stack: ['Python', 'Django', 'AI Triage', 'Vector Embeddings', 'REST APIs', 'Vercel'],
    link: 'https://doc-doc-app.vercel.app/',
    github: 'https://github.com/350312?tab=stars',
    image: '/images/projects/docdoc-ai-health.png',
    featured: true
  },
  {
    id: 'whatsannounce-ai',
    icon: '💬',
    tag: 'AI Telemetry & Broadcast',
    category: 'AI & Automation',
    title: 'WhatsAnnounce AI — Auto-Broadcast WhatsApp Bot',
    desc: 'An AI-driven broadcasting engine that formats unstructured announcements into structured WhatsApp messages, organizes audience segments, and delivers via anti-spam paced delivery queues.',
    detailedOverview: 'Engineered to streamline mass communications without risking phone number bans. Users can dictate or type unstructured announcements; the AI assistant parses content, drafts formatted markdown for WhatsApp, and dispatches messages one-by-one with intelligent stagger intervals (10s to 60s) across segmented contact groups.',
    highlights: [
      'AI Copilot transforming raw speech and text into calibrated broadcast messages',
      'Anti-spam pacing engine with adjustable interval delays (10s-60s) to prevent throttling',
      'Segmented recipient targeting (Team, Clients, VIP, Vendors) with queue progress telemetry'
    ],
    stack: ['React', 'TypeScript', 'AI Copilot / LLM', 'WhatsApp API', 'Queue Engine'],
    link: '',
    image: '/images/projects/whatsannounce-ai.png',
    featured: true
  },
  {
    id: 'multi-agent-cognitive-engine',
    icon: '🧠',
    tag: 'Agent Orchestration',
    category: 'AI & Automation',
    title: 'Autonomous Multi-Agent Cognitive Architecture',
    desc: 'A modular multi-agent cognitive architecture orchestrating deliberate thinking, tool invocation, computer vision desktop control, episodic memory, and agent-to-agent negotiation.',
    detailedOverview: 'A deep agentic system framework exploring autonomous computer use and complex problem solving. Links a central thinking agent with specialized modules: tool use harnesses, persistent vector/episodic memory, desktop computer use, I/O prompt adaptation, and multi-agent coordination.',
    highlights: [
      'Six-pillar cognitive orchestration: Thinking, Tool Use, Other Agents, Memory, Computer Use, I/O Prompt',
      'Autonomous task decomposition with hierarchical multi-agent delegation',
      'Long-term memory persistence grounding agent decisions across extended sessions'
    ],
    stack: ['Python', 'Agentic Systems', 'Computer Use', 'Vector Embeddings', 'Function Calling'],
    link: '',
    image: '/images/projects/multi-agent-cognitive-engine.png',
    featured: true
  },
  {
    id: 'nobotech-solution-ltd',
    icon: '🏢',
    tag: 'Enterprise Cloud Hub',
    category: 'Full-Stack & Web',
    title: 'Nobotech Solution Ltd — IT Solutions & Cloud Platform',
    desc: 'Corporate digital presence and service architecture platform for Nobotech Solution Ltd, showcasing resilient software engineering, cloud infrastructure, and AI systems.',
    detailedOverview: 'Engineered and deployed the production web presence for Nobotech Solution Ltd. Designed with an ultra-clean corporate visual identity, responsive navigation, service discovery pathways, and high-performance cloud deployment.',
    highlights: [
      'Production-grade responsive web presence built for high availability',
      'Service architecture showcases covering AI systems, software, and cloud infrastructure',
      'Client consultation onboarding with interactive project scoping workflow'
    ],
    stack: ['React', 'Next.js / Node.js', 'Cloud Infrastructure', 'Tailwind CSS', 'Vercel'],
    link: 'https://nobotech-site-qbwr.vercel.app/',
    image: '/images/projects/nobotech-solution.png',
    featured: true
  },
  {
    id: 'gmail-auto-reply-n8n',
    icon: '📩',
    tag: 'Autonomous Pipeline',
    category: 'AI & Automation',
    title: 'Gmail Auto-Reply & Context Synthesis Engine',
    desc: 'An end-to-end n8n workflow that ingests incoming corporate emails, synthesizes conversation thread history via LLMs, and drafts calibrated, context-aware responses.',
    detailedOverview: 'Built to eradicate manual executive communication overhead. The engine operates on an event-driven webhook architecture, parsing complex multi-party threads, querying historical interaction data, and generating professional email drafts categorized by urgency and tone.',
    highlights: [
      'Zero-touch webhook pipeline deployed on self-hosted n8n infrastructure',
      'Context-aware LLM synthesis factoring thread history and sentiment analysis',
      'Human-in-the-loop review queue preventing unauthorized dispatches'
    ],
    stack: ['n8n', 'OpenAI APIs', 'Webhook Routing', 'Gmail API', 'JSON Logic'],
    link: '',
    image: '/src/assets/images/n8n_automation_workflow_1792895628787.jpg',
    featured: false
  },
  {
    id: 'rag-knowledge-assistant',
    icon: '📚',
    tag: 'Enterprise RAG',
    category: 'AI & Automation',
    title: 'RAG Knowledge Assistant & Semantic Retrieval',
    desc: 'A robust Retrieval-Augmented Generation pipeline that grounds LLM responses strictly within authenticated enterprise documentation to prevent hallucinations.',
    detailedOverview: 'A foundational research and deployment project focused on high-precision information extraction. Documents are parsed, chunked with semantic boundaries, indexed into vector embeddings, and retrieved using hybrid keyword-vector similarity scoring to deliver verifiable, cited answers.',
    highlights: [
      'Hybrid semantic vector search with source citation and chunk verification',
      'Zero-hallucination guardrails and prompt safety constraints',
      'Scalable Python backend supporting PDF, Markdown, and tabular dataset ingestion'
    ],
    stack: ['Python', 'RAG Pipelines', 'Vector Search', 'LangChain', 'FastAPI'],
    link: '',
    image: '/src/assets/images/rag_knowledge_assistant_1792895629604.jpg',
    featured: false
  },
  {
    id: 'snake-water-gun-game',
    icon: '🐍',
    tag: 'Interactive Web',
    category: 'Games & Tools',
    title: 'Snake, Water & Gun — Real-Time Web Game',
    desc: 'A snappy browser-based strategic twist on rock-paper-scissors with instant computer AI decision engine and dynamic scorekeeping.',
    detailedOverview: 'A foundational JavaScript game project demonstrating DOM manipulation, state management, computer probability engines, and fluid animations for instant interactive gameplay.',
    highlights: [
      'Custom game loop with probability-weighted opponent decision logic',
      'Responsive, lightweight CSS animations without external library overhead',
      'Persistent local streak counter and game telemetry'
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic', 'Vercel'],
    link: 'https://snake-water-gun-game-blue.vercel.app/',
    featured: false
  }
];

export const CORE_PILLARS: CorePillar[] = [
  {
    title: 'Autonomous n8n Pipelines',
    tag: 'Workflow Engineering',
    description: 'Transforming complex, multi-party business bottlenecks into zero-touch autonomous execution graphs.',
    points: [
      'Event-driven webhook listeners with robust retry and error recovery protocols',
      'Multi-model LLM chaining for text extraction, classification, and validation',
      'Seamless bi-directional integration across Gmail, Slack, CRM, and internal databases'
    ],
    icon: 'Workflow'
  },
  {
    title: 'RAG & Vector Knowledge Systems',
    tag: 'AI Integration Research',
    description: 'Grounding generative models in verifiable company knowledge to eliminate hallucinations and ambiguity.',
    points: [
      'Semantic document chunking, metadata extraction, and vector embedding indexing',
      'Hybrid keyword + similarity retrieval for strict, cited answer synthesis',
      'Security-scoped access controls ensuring private document confidentiality'
    ],
    icon: 'Database'
  },
  {
    title: 'Voice & Conversational Agents',
    tag: 'Applied Speech AI',
    description: 'Developing low-latency voice pipelines that listen, understand intent, and respond naturally.',
    points: [
      'Acoustic buffer streaming with high-accuracy speech-to-text conversion',
      'Intent parsing models routing user queries to appropriate backend actions',
      'Custom synthesized voice responses configured for clinical and support scenarios'
    ],
    icon: 'Mic'
  },
  {
    title: 'Scalable Backends & APIs',
    tag: 'Full-Stack Architecture',
    description: 'Building reliable Python and Django backends that power production web applications.',
    points: [
      'RESTful API design with clean serialisation, JWT security, and relational models',
      'Asynchronous task workers for heavy data processing and background automation',
      'Comprehensive system documentation and Excel/Canva architectural schemas'
    ],
    icon: 'Server'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 't1',
    period: '2023 — Present',
    title: 'B.Sc. in Computer Science & Engineering',
    organization: 'Bangladesh University of Professionals (BUP)',
    location: 'Dhaka, Bangladesh',
    description: 'Pursuing undergraduate degree in Computer Science & Engineering with intensive coursework in Data Structures, Algorithms, Database Systems, Software Engineering, and AI Integration.',
    highlights: [
      'Core focus on backend engineering, distributed systems, and applied machine learning',
      'Active research in AI model integration and enterprise autonomous workflow architectures',
      'Collaborative projects spanning Full-Stack development and Python automation'
    ],
    type: 'education'
  },
  {
    id: 't2',
    period: '2023 — Present',
    title: 'Independent AI Automation & Backend Developer',
    organization: 'Freelance & Open Source Projects',
    location: 'Dhaka, Bangladesh',
    description: 'Designing and deploying autonomous workflows, RAG query pipelines, and Django services for clients and specialized problem domains.',
    highlights: [
      'Created custom n8n pipelines for automated email processing, CRM sync, and content generation',
      'Developed Doc-Doc AI Clinical Consultant with conversational symptom triage',
      'Published scalable full-stack applications with production uptime on Vercel'
    ],
    type: 'experience'
  },
  {
    id: 't3',
    period: 'Graduated',
    title: 'Higher Secondary Certificate (Science)',
    organization: 'St. Joseph Higher Secondary School',
    location: 'Dhaka, Bangladesh',
    description: 'Completed rigorous pre-university science education at one of Bangladesh’s premier academic institutions, fostering a disciplined foundation in mathematics, analytical logic, and computing.',
    highlights: [
      'Rigorous mathematical and computational foundations',
      'Early exploration into programming, algorithmic thinking, and system design'
    ],
    type: 'education'
  }
];

export const INFO_ROWS: InfoRow[] = [
  { label: 'Full Name', value: 'Sourav Ahmed' },
  { label: 'Current Education', value: 'B.Sc. in CSE, BUP' },
  { label: 'Foundational School', value: 'St. Joseph Higher Secondary School' },
  { label: 'Career Trajectory', value: 'AI Engineer / Systems Automator' },
  { label: 'Primary Tech', value: 'Python, Django, n8n, React' },
  { label: 'Research Focus', value: 'Production AI Integration & RAG' },
  { label: 'Location', value: 'Dhaka, Bangladesh (UTC+6)' },
  { label: 'Availability', value: 'Internships & Freelance Automation' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Automation',
    description: 'Autonomous multi-step agentic pipelines, document grounding, and conversational engines',
    skills: [
      { name: 'n8n Workflows', level: 90, color: 'var(--cyan)', category: 'AI' },
      { name: 'RAG Knowledge Pipelines', level: 82, color: 'var(--cyan)', category: 'AI' },
      { name: 'Voice & Conversational AI', level: 78, color: 'var(--cyan)', category: 'AI' },
      { name: 'Prompt Engineering & LLMs', level: 88, color: 'var(--cyan)', category: 'AI' },
      { name: 'AI Integration Research', level: 85, color: 'var(--cyan)', category: 'AI' }
    ]
  },
  {
    title: 'Backend & Architecture',
    description: 'High-availability server infrastructure, data models, and API development',
    skills: [
      { name: 'Python', level: 92, color: 'var(--violet)', category: 'Backend' },
      { name: 'Django / Django REST', level: 84, color: 'var(--violet)', category: 'Backend' },
      { name: 'Node.js & Express', level: 76, color: 'var(--violet)', category: 'Backend' },
      { name: 'Java (Core & OOP)', level: 72, color: 'var(--violet)', category: 'Backend' },
      { name: 'SQL & Database Schemas', level: 80, color: 'var(--violet)', category: 'Backend' }
    ]
  },
  {
    title: 'Frontend & Web Systems',
    description: 'Performant, accessible, and responsive user interfaces with modular design systems',
    skills: [
      { name: 'React', level: 85, color: 'var(--pink)', category: 'Frontend' },
      { name: 'TypeScript & JavaScript', level: 84, color: 'var(--pink)', category: 'Frontend' },
      { name: 'HTML5 & Modern CSS', level: 90, color: 'var(--pink)', category: 'Frontend' },
      { name: 'Tailwind CSS', level: 88, color: 'var(--pink)', category: 'Frontend' },
      { name: 'Responsive UI Architecture', level: 92, color: 'var(--pink)', category: 'Frontend' }
    ]
  },
  {
    title: 'Data & Professional Delivery',
    description: 'Documentation, mathematical data handling, and executive stakeholder presentation',
    skills: [
      { name: 'NumPy & Data Arrays', level: 78, color: 'var(--amber)', category: 'Data' },
      { name: 'MS Excel (Modeling & Logic)', level: 85, color: 'var(--amber)', category: 'Tools' },
      { name: 'Canva (Architecture Schemas)', level: 88, color: 'var(--amber)', category: 'Tools' },
      { name: 'Git & Version Control', level: 88, color: 'var(--amber)', category: 'Tools' },
      { name: 'Docker Fundamentals', level: 70, color: 'var(--amber)', category: 'Tools' }
    ]
  }
];

export const ACCENT_COLORS = ['#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B'];

// Storage helpers
const STORAGE_KEY = 'sourav_portfolio_projects_v4';

export async function getStoredProjects(): Promise<Project[]> {
  try {
    if (typeof window !== 'undefined' && (window as any).storage?.get) {
      const res = await (window as any).storage.get('projects', true);
      if (res && res.value) {
        const parsed = JSON.parse(res.value);
        if (Array.isArray(parsed) && parsed.some((p: Project) => p.id === 'monpura-tales-rpg')) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.warn('Error reading from window.storage:', e);
  }

  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.some((p: Project) => p.id === 'monpura-tales-rpg')) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error reading from localStorage:', e);
  }

  return DEFAULT_PROJECTS;
}

export async function setStoredProjects(projects: Project[]): Promise<boolean> {
  const json = JSON.stringify(projects);
  let saved = false;

  try {
    localStorage.setItem(STORAGE_KEY, json);
    saved = true;
  } catch (e) {
    console.warn('Error writing to localStorage:', e);
  }

  try {
    if (typeof window !== 'undefined' && (window as any).storage?.set) {
      await (window as any).storage.set('projects', json, true);
      saved = true;
    }
  } catch (e) {
    console.warn('Error writing to window.storage:', e);
  }

  return saved;
}
