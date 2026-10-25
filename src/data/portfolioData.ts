import { Project, SkillCategory, InfoRow, TimelineItem, CorePillar } from '../types';

export const PROFILE_AVATAR = "/assets/aistudio/image_4b97ffa9.png";

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'p2',
    icon: '🩺',
    tag: 'AI Health Consultant',
    category: 'AI & Automation',
    title: 'Doc-Doc — AI Clinical & Health Consultant',
    desc: 'An AI-driven diagnostic triage system that conducts conversational medical inquiry, contextualizes symptoms, and provides clinical guidance before physician consultation.',
    detailedOverview: 'Doc-Doc is engineered to address the critical friction in pre-clinical triage. By integrating advanced conversational LLMs with medical terminology embeddings and clinical triage logic, the system conducts multi-turn interviews, analyzes vitals, and flags severity levels with confidence-scored insights.',
    highlights: [
      'Multi-turn conversational triage powered by Python and specialized health context models',
      'Django REST framework backend with isolated patient record encryption',
      'Structured clinical summary export for downstream doctors and telemedicine providers'
    ],
    stack: ['Python', 'Django', 'AI Triage', 'Vector Embeddings', 'REST APIs'],
    link: 'https://doc-doc-app.vercel.app/',
    github: 'https://github.com/350312?tab=stars',
    image: '/src/assets/images/docdoc_ai_health_1792895629150.jpg',
    featured: true
  },
  {
    id: 'p6',
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
    featured: true
  },
  {
    id: 'p5',
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
    featured: true
  },
  {
    id: 'p3',
    icon: '🏢',
    tag: 'Enterprise Platform',
    category: 'Full-Stack & Web',
    title: 'Nobotech Solution LTD — Enterprise Platform',
    desc: 'A scalable corporate web application and service hub engineered for high availability, responsive multi-tenant presentation, and client onboarding.',
    detailedOverview: 'Architected and built the public-facing and service infrastructure for Nobotech Solutions. The platform features an optimized Node.js runtime, accessible modular design systems, dynamic service booking interfaces, and automated inquiry distribution.',
    highlights: [
      'High-performance Node.js server architecture with sub-100ms response times',
      'Responsive design system engineered for executive desktops down to mobile views',
      'Integrated contact ingestion and lead capture pipeline'
    ],
    stack: ['Node.js', 'Express', 'HTML5', 'Modern CSS', 'Cloud Deployment'],
    link: 'https://nobotech-site-qbwr.vercel.app/',
    image: '/src/assets/images/nobotech_startup_platform_1792895629812.jpg',
    featured: true
  },
  {
    id: 'p4',
    icon: '🎙️',
    tag: 'Conversational Voice',
    category: 'AI & Automation',
    title: 'Personal Voice Agent & Speech Pipeline',
    desc: 'A real-time Python-driven voice assistant that captures spoken input, performs acoustic transcription, classifies user intent, and replies in low-latency synthesized speech.',
    detailedOverview: 'Built to explore seamless natural human-computer interfaces. The system streams audio buffers, leverages state-of-the-art speech-to-text models, routes commands through an intent classifier, and synthesizes expressive audio responses with minimal turnaround latency.',
    highlights: [
      'Low-latency voice streaming and local acoustic buffer processing',
      'Intent classification engine routing tasks to automation webhooks',
      'Customizable voice personality and context persistence'
    ],
    stack: ['Python', 'Speech Recognition', 'TTS Engine', 'Audio Processing', 'Threading'],
    link: '',
    featured: false
  },
  {
    id: 'p7',
    icon: '📝',
    tag: 'Content Automation',
    category: 'AI & Automation',
    title: 'AI Script Generator & Creative Workflow',
    desc: 'An automated pipeline that converts single-topic prompts into fully structured, scene-by-scene multimedia scripts ready for recording and production.',
    detailedOverview: 'Engineered for creators and media production agencies. The workflow handles research aggregation, hook generation, script pacing, and visual cue annotations, delivering structured content outputs in minutes.',
    highlights: [
      'Multi-stage generative sequence: Topic -> Hook -> Narrative Beats -> Full Script',
      'Customizable tone filters for educational, technical, and storytelling formats',
      'Automated Google Drive and Notion export'
    ],
    stack: ['n8n', 'LLM Prompt Engineering', 'Notion API', 'Google Workspace'],
    link: '',
    featured: false
  },
  {
    id: 'p8',
    icon: '📞',
    tag: 'Autonomous Telephony',
    category: 'AI & Automation',
    title: 'Automated Voice Agent for Customer Inquiries',
    desc: 'A voice-driven n8n workflow that routes incoming customer calls, resolves frequent queries via dynamic knowledge lookups, and escalates edge cases.',
    detailedOverview: 'An autonomous customer support agent capable of handling end-to-end inbound customer requests. Connects telephony webhooks with vector knowledge bases to answer FAQs accurately while logging call summaries to CRM databases.',
    highlights: [
      'Interactive voice response (IVR) integrated with intelligent conversational agents',
      'Direct CRM synchronization and automated ticket generation for escalations',
      'Tested with simulated support queries for high intent accuracy'
    ],
    stack: ['n8n', 'Voice AI', 'Webhook Infrastructure', 'CRM Integration'],
    link: '',
    featured: false
  },
  {
    id: 'p1',
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
export async function getStoredProjects(): Promise<Project[]> {
  try {
    if (typeof window !== 'undefined' && (window as any).storage?.get) {
      const res = await (window as any).storage.get('projects', true);
      if (res && res.value) {
        return JSON.parse(res.value);
      }
    }
  } catch (e) {
    console.warn('Error reading from window.storage:', e);
  }

  try {
    const local = localStorage.getItem('sourav_portfolio_projects_v2');
    if (local) {
      return JSON.parse(local);
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
    localStorage.setItem('sourav_portfolio_projects_v2', json);
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
