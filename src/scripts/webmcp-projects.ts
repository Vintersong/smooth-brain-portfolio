/**
 * webmcp-projects.ts
 * WebMCP tool registrations for the /projects page.
 *
 * Tools exposed:
 *   - list_projects   : Returns all projects with id, title, description, technologies
 *   - get_project     : Returns full details for a single project by id or title
 *   - filter_projects : Returns projects matching a given technology tag or keyword
 *   - open_project    : Opens the detail modal for a specific project by id
 *
 * Loaded via <script> in projects.astro after the Vue component mounts.
 */

import { registerTools } from '../utils/webmcp';

// Mirror of the project data in Projects.vue — kept in sync here so the
// tool handlers don't depend on Vue reactivity or DOM scraping.
const PROJECTS = [
  {
    id: 0,
    title: '.audit-aiBETA',
    description: 'Free machine-legibility scanner. Nine server-side checks against raw HTML. Is your site legible to AI?',
    details: 'AuditAI audits how well a website can be parsed by AI systems like ChatGPT, Perplexity, and Claude. Nine server-side checks run against the raw HTML response. Returns a Machine Legibility Score (MLS) out of 100 with exact fixes. Checks: SSR detection, content clarity, llms.txt presence, schema.org markup, robots.txt AI crawler rules, heading hierarchy, URL structure, structured data completeness, and token efficiency.',
    technologies: ['.React', '.TypeScript', '.Lovable', '.Cloudflare Workers', '.Vite'],
    link: 'https://ai-readability-guard.lovable.app/',
    status: 'live',
  },
  {
    id: 1,
    title: '.n.o.v.a',
    description: 'Non Organic Virtual Assistant. Persistent AI memory system with shard architecture, confidence decay, and multi-agent orchestration.',
    details: 'NOVA is a persistent memory system for AI agents built as an MCP server. Stores conversations and decisions as modular JSON shards with metadata, confidence scores, and time-based decay rates. Retrieval runs a dual-pass pipeline (HUGINN fast pass → MUNINN deep rerank) with spreading activation BFS over the knowledge graph. HMAC-SHA256 signs embeddings. NÓTT daemon handles background decay and compaction. Forgemaster orchestration layer decomposes tasks into typed tickets across a three-tier model hierarchy. 37 MCP tools. 221 agent personas.',
    technologies: ['.Python', '.MCP', '.Claude', '.Gemini', '.Docker', '.SQLite'],
    link: null,
    status: 'wip',
  },
  {
    id: 2,
    title: '.chromatic',
    description: 'Bullet heaven with a 2-primary color commitment tree, music-reactive enemy spawning, and 18 named synergies. Built in LÖVE2D.',
    details: 'CHROMATIC is a Vampire Survivors-style bullet heaven built in LÖVE2D (Lua). Auto-aim shooting with a 2-primary color commitment tree. MusicReactor does BPM detection and feeds BASS/MIDS/TREBLE weights into formation-based enemy spawning. Eight artifacts scale up to Lv5. SynergySystem houses 18 named combo unlocks. Custom GLSL shaders with moonshine bloom pass and beat-reactive grid ripples.',
    technologies: ['.Lua', '.LÖVE2D', '.GLSL', '.LangChain', '.GitHub Actions'],
    link: 'https://vintersong.github.io/love2d-RGB/',
    status: 'live',
  },
  {
    id: 3,
    title: '.infinite-backlog',
    description: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
    details: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
    technologies: ['.Steam API', '.React', '.Chart.js'],
    link: null,
    status: 'concept',
  },
  {
    id: 4,
    title: '.grandma-souls',
    description: "Soulslike but you're a grandmother. Parry with knitting needles. Estus flask is soup.",
    details: "Soulslike but you're a grandmother. Parry with knitting needles. Estus flask is soup.",
    technologies: ['.unreal-engine-5.4', '.blender', '.matriarch-AI'],
    link: null,
    status: 'concept',
  },
  {
    id: 5,
    title: '.linkedin-survival-horror',
    description: 'Roguelike where you navigate recruiter DMs. Permadeath. "Quick chat?" is the final boss.',
    details: 'Roguelike where you navigate recruiter DMs. Permadeath. "Quick chat?" is the final boss.',
    technologies: ['.godot-engine-4.3', '.procedural-generation', '.trauma-simulation'],
    link: null,
    status: 'concept',
  },
];

function findProject(idOrTitle: unknown) {
  if (typeof idOrTitle === 'number') {
    return PROJECTS.find(p => p.id === idOrTitle) ?? null;
  }
  if (typeof idOrTitle === 'string') {
    const q = idOrTitle.toLowerCase();
    return PROJECTS.find(
      p => p.title.toLowerCase().includes(q) || String(p.id) === q
    ) ?? null;
  }
  return null;
}

registerTools([
  {
    name: 'list_projects',
    description:
      'Returns all projects in the .smooth-brain-designs portfolio with id, title, description, technologies, and status.',
    schema: {
      type: 'object',
      properties: {},
      required: [],
    },
    handler: () => PROJECTS.map(({ id, title, description, technologies, status, link }) => ({
      id, title, description, technologies, status, link,
    })),
  },
  {
    name: 'get_project',
    description:
      'Returns full details for a single project. Pass either a numeric id (0–5) or a string matching the project title.',
    schema: {
      type: 'object',
      properties: {
        id_or_title: {
          oneOf: [
            { type: 'number', description: 'Numeric project id (0–5)' },
            { type: 'string', description: 'Project title or partial match string' },
          ],
        },
      },
      required: ['id_or_title'],
    },
    handler: ({ id_or_title }) => {
      const project = findProject(id_or_title);
      if (!project) return { error: `No project found matching "${id_or_title}"` };
      return project;
    },
  },
  {
    name: 'filter_projects',
    description:
      'Returns projects whose technologies or description contain the given keyword. Case-insensitive. Example: "Python", "Lua", "MCP", "live".',
    schema: {
      type: 'object',
      properties: {
        keyword: {
          type: 'string',
          description: 'Technology tag, stack name, or status keyword to filter by.',
        },
      },
      required: ['keyword'],
    },
    handler: ({ keyword }) => {
      if (typeof keyword !== 'string') return { error: 'keyword must be a string' };
      const q = keyword.toLowerCase();
      return PROJECTS.filter(
        p =>
          p.technologies.some(t => t.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q) ||
          p.status.toLowerCase().includes(q)
      ).map(({ id, title, description, technologies, status, link }) => ({
        id, title, description, technologies, status, link,
      }));
    },
  },
  {
    name: 'open_project',
    description:
      'Opens the detail modal for a specific project in the UI. Pass the numeric project id. Returns confirmation or error.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Numeric project id (0–5)' },
      },
      required: ['id'],
    },
    handler: ({ id }) => {
      const project = PROJECTS.find(p => p.id === id);
      if (!project) return { error: `No project with id ${id}` };
      // Dispatch a custom event that Projects.vue can listen for
      window.dispatchEvent(
        new CustomEvent('webmcp:open-project', { detail: { id } })
      );
      return { success: true, opened: project.title };
    },
  },
]);
