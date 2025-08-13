import { Touchpoint, ModuleCategory, TimelineEvent, Metric } from './types';


export const touchpointsData: Touchpoint[] = [
  {
    title: 'AI Training Modules',
    description: '24 self-paced learning tracks designed to build core and advanced AI skills across teams. Each module includes real-world use cases, prompts, and challenges tailored to different roles.',
    format: 'Video-based learning',
    audience: 'Global Agency',
    cadence: 'Monthly releases'
  },
  {
    title: 'Creative Council Sessions',
    description: "Quarterly creative workshops focused on exploring AI's role in creativity, collaboration, and concept development. A dedicated space for experimentation, feedback, and future-forward thinking.",
    format: 'Live interactive sessions',
    audience: 'Creative Council',
    cadence: 'Quarterly'
  },
  {
    title: 'Office Hour Sessions',
    description: 'Monthly open-format sessions where attendees can ask questions, troubleshoot ideas, and explore AI techniques in real time. Flexible and interactive—driven by participant needs.',
    format: 'Live Q&A sessions',
    audience: 'Global Agency',
    cadence: 'Monthly'
  },
  {
    title: 'OK Tomorrow Community Hub',
    description: 'A central destination for AI enablement—housing training modules, recorded sessions, prompt libraries, and shared challenges. A living resource and collaborative learning space.',
    format: 'Online learning platform',
    audience: 'Global Agency',
    cadence: 'Always available'
  },
  {
    title: 'Advisory Meetings',
    description: 'Targeted sessions for IT, Operations, and BD leads to review AI implementation progress, surface needs, and align on evolving best practices across systems, teams, and workflows.',
    format: 'Strategic planning sessions',
    audience: 'IT, Operations, BD Teams',
    cadence: 'Quarterly'
  },
  {
    title: 'Inspirational Keynotes',
    description: 'Quarterly thought-provoking, organization-wide talks designed to inspire, inform, and energize teams around the future of AI, innovation, and creative leadership.',
    format: 'Company-wide presentations',
    audience: 'Global Agency',
    cadence: 'Quarterly'
  }
];

export const moduleJourneyData: ModuleCategory[] = [
    {
        category: "Foundations & Orientation",
        purpose: "These modules onboard participants, set the stage for the masterclass, and provide foundational skills for engaging with the rest of the program.",
        modules: [
            { title: "Welcome to the Masterclass", description: "Introduction to the overall program and expectations." },
            { title: "Orientation", description: "Overview of structure, resources, and navigation for the course." },
            { title: "Fictional Role Playing", description: "Immersive exercises to develop creative empathy and perspective-shifting skills." },
            { title: "Building with Layers", description: "Techniques for constructing ideas and projects in structured, incremental steps." },
        ]
    },
    {
        category: "Creative Concept Development",
        purpose: "These modules focus on ideation, brainstorming, and creative frameworks to generate and refine original ideas.",
        modules: [
            { title: "Prompt Libraries", description: "A repository of starting points to spark creative output." },
            { title: "Creative Association Brand Game", description: "Playful exercises to connect disparate concepts and generate fresh branding ideas." },
            { title: "Naming Themes", description: "Strategies for creating impactful and memorable names." },
            { title: "Taste Reverse Engineer", description: "Deconstructing successful examples to understand their appeal and apply the principles." },
            { title: "Visualizing Personas", description: "Mapping and illustrating audience archetypes to inform creative work." },
        ]
    },
    {
        category: "Brand & Strategic Thinking",
        purpose: "These modules develop skills in branding, consistency, and forward-looking strategic planning.",
        modules: [
            { title: "Project & Context", description: "Establishing scope, goals, and background for creative initiatives." },
            { title: "Brand Voice Consistency", description: "Maintaining a cohesive tone and personality across all outputs." },
            { title: "Brand Exploration", description: "Identifying opportunities for brand growth and differentiation." },
            { title: "Strategic Scenario Planning", description: "Anticipating and preparing for potential future challenges and opportunities." },
        ]
    },
    {
        category: "Collaboration & Knowledge Sharing",
        purpose: "These modules provide tools, methods, and protocols for working effectively with others and synthesizing shared information.",
        modules: [
            { title: "Collaboration Protocols", description: "Best practices for team communication and workflow." },
            { title: "The Creative Canvas", description: "A visual framework for capturing, organizing, and developing ideas collaboratively." },
            { title: "Search & Synthesis for Shared Knowledge", description: "Methods for gathering, evaluating, and integrating diverse inputs." },
        ]
    },
    {
        category: "Reflective & Adaptive Learning",
        purpose: "These modules help participants reflect on their creative processes, adapt, and continually improve.",
        modules: [
            { title: "Mind Walk", description: "Guided mental exercises to explore and deepen creative thinking." },
            { title: "Creative Retrospective", description: "Reviewing past work to identify lessons and insights." },
            { title: "Hyperlearning Loop", description: "Rapid feedback and iteration cycles to accelerate growth." },
            { title: "Ethical AI Collaborator", description: "Guidelines for responsible use of AI in creative work." },
        ]
    },
    {
        category: "Creative Execution & Production",
        purpose: "These modules turn ideas into tangible outputs, streamlining production and integrating tools.",
        modules: [
            { title: "Landing Page Crystallizer", description: "Designing and refining high-impact landing pages." },
            { title: "Creative Production Pipeline", description: "End-to-end process for bringing creative projects to completion." },
            { title: "Zapier", description: "Automating workflows for efficiency." },
            { title: "Dify", description: "Using AI tools to generate and enhance creative content." },
            { title: "Inspiration Engine", description: "Systems and sources to sustain long-term creative momentum." },
        ]
    }
];

export const coreSkillsets = [
    "Prompt Engineering & Crafting",
    "AI-Powered Creative Ideation",
    "Strategic AI Integration",
    "Workflow Automation",
    "Ethical AI Application",
];

export const timelineData: TimelineEvent[] = [
    {
        month: 'September',
        trainingModules: [
            { title: 'Welcome to the Masterclass', date: 'Sep 1' },
            { title: 'Orientation', date: 'Sep 10' },
            { title: 'Fictional Role Playing', date: 'Sep 24' },
        ],
        liveSessions: [{ title: 'Q1 Inspirational Event', date: 'Sep 9' }],
        officeHours: { title: 'Office Hours', date: 'Sep 25' }
    },
    {
        month: 'October',
        trainingModules: [
            { title: 'Building with Layers', date: 'Oct 8' },
            { title: 'Prompt Libraries', date: 'Oct 22' },
        ],
        liveSessions: [
            { title: 'Ops & IT Advisory', date: 'Oct 7' },
            { title: 'New Business Session', date: 'Oct 29' },
        ],
        officeHours: { title: 'Office Hours', date: 'Oct 23' }
    },
    {
        month: 'November',
        trainingModules: [
            { title: 'Creative Association Brand Game', date: 'Nov 5' },
            { title: 'Naming Themes', date: 'Nov 19' },
        ],
        liveSessions: [],
    },
    {
        month: 'December',
        trainingModules: [
            { title: 'Taste Reverse Engineer', date: 'Dec 3' },
            { title: 'Visualizing Personas', date: 'Dec 17' },
        ],
        liveSessions: [],
    },
    {
        month: 'January',
        trainingModules: [
            { title: 'Project & Context', date: 'Jan 7' },
            { title: 'Brand Voice Consistency', date: 'Jan 21' },
        ],
        liveSessions: [{ title: 'Q2 Inspirational Event', date: 'Jan 13' }],
        officeHours: { title: 'Office Hours', date: 'Jan 29' }
    },
    {
        month: 'February',
        trainingModules: [
            { title: 'Brand Exploration', date: 'Feb 11' },
            { title: 'Strategic Scenario Planning', date: 'Feb 25' },
        ],
        liveSessions: [{ title: 'Ops & IT Advisory', date: 'Feb 4' }],
        officeHours: { title: 'Office Hours', date: 'Feb 26' }
    },
    {
        month: 'March',
        trainingModules: [
            { title: 'Collaboration Protocols', date: 'Mar 11' },
            { title: 'The Creative Canvas', date: 'Mar 25' },
        ],
        liveSessions: [{ title: 'Creative Council', date: 'Mar 18' }],
        officeHours: { title: 'Office Hours', date: 'Mar 19' }
    },
    {
        month: 'April',
        trainingModules: [
            { title: 'Search & Synthesis for Shared Knowledge', date: 'Apr 8' },
            { title: 'Mind Walk', date: 'Apr 22' },
        ],
        liveSessions: [
            { title: 'Q3 Inspirational Event', date: 'Apr 14' },
            { title: 'Creative Council', date: 'Apr 21' },
        ],
        officeHours: { title: 'Office Hours', date: 'Apr 23' }
    },
    {
        month: 'May',
        trainingModules: [
            { title: 'Creative Retrospective', date: 'May 13' },
            { title: 'Hyperlearning Loop', date: 'May 27' },
        ],
        liveSessions: [
            { title: 'Ops & IT Advisory', date: 'May 6' },
            { title: 'New Business Session', date: 'May 20' },
        ],
        officeHours: { title: 'Office Hours', date: 'May 21' }
    },
    {
        month: 'June',
        trainingModules: [
            { title: 'Ethical AI Collaborator', date: 'Jun 10' },
            { title: 'Landing Page Crystallizer', date: 'Jun 24' },
        ],
        liveSessions: [{ title: 'Creative Council', date: 'Jun 24' }],
        officeHours: { title: 'Office Hours', date: 'Jun 25' }
    },
    {
        month: 'July',
        trainingModules: [
            { title: 'Creative Production Pipeline', date: 'Jul 8' },
            { title: 'Zapier', date: 'Jul 22' },
        ],
        liveSessions: [{ title: 'Q4 Inspirational Event', date: 'Jul 14' }],
        officeHours: { title: 'Office Hours', date: 'Jul 23' }
    },
    {
        month: 'August',
        trainingModules: [
            { title: 'Dify', date: 'Aug 12' },
            { title: 'Inspiration Engine', date: 'Aug 26' },
        ],
        liveSessions: [{ title: 'Ops & IT Advisory', date: 'Aug 5' }],
        officeHours: { title: 'Office Hours', date: 'Aug 20' }
    },
];

export const metricsData: Metric[] = [
    {
        category: 'Engagement Metrics',
        kpis: [
            'Training module completion rates',
            'Office hours attendance',
            'Community hub activity levels',
            'Session feedback scores'
        ],
        target: 'Consistently high completion rates, regular attendance, and positive feedback.'
    },
    {
        category: 'Skill Development',
        kpis: [
            'Pre/post program skill assessments',
            'Practical application demonstrations',
            'Peer evaluation improvements',
            'Tool proficiency certifications'
        ],
        target: 'Measurable improvement in proficiency and application'
    },
    {
        category: 'Business Impact',
        kpis: [
            'Productivity improvements in AI-augmented workflows',
            'Creative output quality enhancements',
            'Time savings on routine tasks',
            'Client satisfaction with AI-enhanced deliverables'
        ],
        target: 'Positive trends in efficiency, quality, and client feedback'
    },
    {
        category: 'Cultural Transformation',
        kpis: [
            'AI tool adoption rates across teams',
            'Cross-department collaboration increases',
            'Innovation project initiations',
            'Employee confidence surveys'
        ],
        target: 'Widespread adoption and increased confidence in using AI'
    },
    {
        category: 'ROI Validation',
        kpis: [
            'Gemini platform utilization rates',
            'Cost savings through workflow automation',
            'Revenue impact from enhanced capabilities',
            'Client retention and satisfaction improvements'
        ],
        target: 'Demonstrable return on investment through key business drivers'
    }
];

export const okTomorrowRoles = [
    "Curriculum Development: Creating and updating all training content",
    "Session Leadership: Hosting and moderating live sessions",
    "Content Support: Internal communications copy and assets",
    "Learning Hub Management: Community hub management and troubleshooting",
    "Expert Consultation: Always-on Slack support for immediate questions",
];

export const wkChampionRoles = [
    "Attendance Tracking: Attendance and engagement reporting",
    "Participation Drive: Encouraging team engagement",
    "Local Coordination: Managing timezone and regional needs",
    "Feedback Loop: Active participation in improvement sessions",
    "Event Management: Hosting live session calls and sending invitations",
    "Internal Communications: Distributing program updates and announcements",
];
