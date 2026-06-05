/**
 * webmcp-cv.ts
 * WebMCP tool registrations for the /cv page.
 *
 * Tools exposed:
 *   - get_cv_summary      : Returns the professional summary text
 *   - get_cv_section      : Returns a named section (experience, education, skills, languages)
 *   - search_cv_skills    : Returns skills matching a keyword across all skill categories
 *   - get_contact_info    : Returns public contact / link info
 *
 * Loaded via <script> in cv.astro.
 */

import { registerTools } from '../utils/webmcp';

const CV = {
  summary:
    'Systems designer and technical generalist. Background in game design, mixed-methods research, UX, and prototyping across multiple platforms. Currently exploring AI-augmented development.',

  experience: [
    {
      title: '.rgb-bullet-hell',
      org: 'Personal Project',
      period: '2025 - Present',
      skills: ['Lua', 'LÖVE2D', 'Game Design', 'Systems Architecture', 'Audio Programming'],
    },
    {
      title: '.nova-cognition-framework',
      org: 'Personal Project',
      period: '2025 - Present',
      skills: ['Python', 'FastAPI', 'AI/LLM Architecture', 'RAG Systems'],
    },
    {
      title: '.game-designer-&-technical-artist',
      org: 'Freelance',
      period: '2022 - Present',
      skills: ['Systems Design', 'Balancing', 'Prototyping', 'AI-Augmented Development'],
    },
    {
      title: '.freelance-renovation-&-construction',
      org: 'Gotland, Sweden',
      period: '2015 - 2017',
      skills: ['Carpentry', 'Project Management', 'Client Communication'],
    },
    {
      title: '.level-1-tech-support',
      org: 'VoiceMailTel, Târgu-Mureș',
      period: '2010',
      skills: ['Remote Troubleshooting', 'Documentation', 'Customer Support'],
    },
    {
      title: '.graphic-designer',
      org: 'Editura Edu, Târgu-Mureș',
      period: '2008 - 2009',
      skills: ['Adobe Creative Suite', 'Flash', 'UX', 'Educational Content'],
    },
  ],

  education: [
    {
      title: '.ma-digital-media-&-game-studies',
      institution: 'Babeș-Bolyai University, Cluj-Napoca',
      period: '2025 - Present (Expected 2027)',
    },
    {
      title: '.ba-game-design',
      institution: 'Uppsala University, Campus Gotland',
      period: '2022 - 2025',
      notes: 'UI/UX principles, player experience design, Unreal Engine, Unity, Love2D',
    },
    {
      title: '.ba-political-science',
      institution: 'Babeș-Bolyai University, Cluj-Napoca',
      period: '2020 - 2022 (On hiatus)',
      notes: 'Research methodologies, qualitative analysis, data interpretation',
    },
  ],

  skills: {
    programming: ['Lua', 'HTML/CSS', 'Python', 'C', 'C++', 'C#', 'JavaScript', 'SQL'],
    gameEngines: ['Unreal Engine 5', 'Love2D', 'Unity'],
    gameEnginesTested: ['Godot', 'Raylib', 'GameMaker', 'Defold', 'SGDK', 'MonoGame', 'Flax', 'LOVR'],
    designTools: ['Photoshop', 'Illustrator', 'Blender', 'Figma', 'InDesign', 'Affinity Designer', 'Substance Painter', 'Substance Designer', 'Aseprite', 'After Effects'],
    research: ['nVivo', 'Excel / Power BI', 'A/B Testing', 'Mixed Methods', 'Qualitative Coding', 'Transmedia Analysis'],
    webFrameworks: ['Bootstrap', 'Astro', 'React', 'Three.js', 'Vite', 'FastAPI'],
    workflow: ['Git', 'JIRA', 'Atlassian Tools', 'Microsoft Office', 'Technical Documentation'],
    professional: ['Remote Support', 'Project Management', 'Problem Solving', 'Systems Thinking', 'AI-Augmented Workflows', 'Context Engineering'],
  },

  languages: [
    { language: 'Romanian', level: 'Native' },
    { language: 'English', level: 'Advanced (C1)' },
    { language: 'Swedish', level: 'Intermediate' },
  ],

  links: {
    site: 'https://smooth-brain-designs.com',
    github: 'https://github.com/Vintersong',
    cv: 'https://smooth-brain-designs.com/cv',
    projects: 'https://smooth-brain-designs.com/projects',
    timeline: 'https://smooth-brain-designs.com/timeline',
  },
};

const VALID_SECTIONS = ['experience', 'education', 'skills', 'languages'] as const;
type Section = typeof VALID_SECTIONS[number];

registerTools([
  {
    name: 'get_cv_summary',
    description: "Returns Andrei Moldovean's professional summary from his CV.",
    schema: { type: 'object', properties: {}, required: [] },
    handler: () => ({ summary: CV.summary }),
  },
  {
    name: 'get_cv_section',
    description:
      'Returns a named section of the CV. Valid sections: "experience", "education", "skills", "languages".',
    schema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
          enum: ['experience', 'education', 'skills', 'languages'],
          description: 'The CV section to retrieve.',
        },
      },
      required: ['section'],
    },
    handler: ({ section }) => {
      if (!VALID_SECTIONS.includes(section as Section)) {
        return { error: `Unknown section "${section}". Valid: ${VALID_SECTIONS.join(', ')}` };
      }
      return { section, data: CV[section as Section] };
    },
  },
  {
    name: 'search_cv_skills',
    description:
      'Searches all skill categories on the CV for a keyword. Returns matching skills with their category. Case-insensitive.',
    schema: {
      type: 'object',
      properties: {
        keyword: {
          type: 'string',
          description: 'Skill name or partial match, e.g. "Python", "Blender", "Lua".',
        },
      },
      required: ['keyword'],
    },
    handler: ({ keyword }) => {
      if (typeof keyword !== 'string') return { error: 'keyword must be a string' };
      const q = keyword.toLowerCase();
      const matches: { category: string; skill: string }[] = [];
      for (const [category, skills] of Object.entries(CV.skills)) {
        for (const skill of skills) {
          if (skill.toLowerCase().includes(q)) {
            matches.push({ category, skill });
          }
        }
      }
      return matches.length
        ? { keyword, matches }
        : { keyword, matches: [], note: 'No skills matched. Try a broader term.' };
    },
  },
  {
    name: 'get_contact_info',
    description: "Returns Andrei Moldovean's public links: portfolio site, GitHub, CV page, projects, and timeline.",
    schema: { type: 'object', properties: {}, required: [] },
    handler: () => CV.links,
  },
]);
