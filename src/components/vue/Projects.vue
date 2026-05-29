<template>
  <div class="projects-container">
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @open-modal="openModal"
      />
    </div>
    
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import ProjectModal from './ProjectModal.vue';

export default {
  name: 'Projects',
  components: {
    ProjectCard,
    ProjectModal
  },
  data() {
    return {
      isModalOpen: false,
      selectedProject: null,
      projects: [
        {
          id: 0,
          title: '.audit-aiBETA',
          description: 'Free machine-legibility scanner. Nine server-side checks against raw HTML. Is your site legible to AI?',
          image: '/images/project-ai-readability.svg',
          icon: 'bi-shield-check',
          details: 'AuditAI audits how well a website can be parsed by AI systems like ChatGPT, Perplexity, and Claude. Nine server-side checks run against the raw HTML response — no JavaScript executed — exactly what GPTBot, ClaudeBot, and PerplexityBot see. Returns a Machine Legibility Score (MLS) out of 100 with exact fixes. Checks: SSR detection, content clarity, llms.txt presence, schema.org markup, robots.txt AI crawler rules, heading hierarchy, URL structure, structured data completeness, and token efficiency. Also generates a custom llms.txt for your site. Score formula: earned ÷ 180 × 100. Pass = full credit, warn = half, fail = zero.',
          technologies: ['.React', '.TypeScript', '.Lovable', '.Cloudflare Workers', '.Vite'],
          link: 'https://ai-readability-guard.lovable.app/'
        },
        {
          id: 1,
          title: '.n.o.v.a',
          description: 'Non Organic Virtual Assistant. Persistent AI memory system with shard architecture, confidence decay, and multi-agent orchestration.',
          image: '/images/project-nova.svg',
          icon: 'bi-cpu',
          details: 'NOVA is a persistent memory system for AI agents built as an MCP server. Stores conversations and decisions as modular JSON shards with metadata, confidence scores, and time-based decay rates. Retrieval runs a dual-pass pipeline named after Odin\u2019s ravens: HUGINN (Haiku fast pass) feeds into MUNINN (Sonnet deep rerank), with a spreading activation BFS over the knowledge graph as a third pass. HMAC-SHA256 signs embeddings at ingestion and verifies before reranking. N\u00d3TT daemon handles background decay, compaction, and merge suggestions. Forgemaster orchestration layer decomposes tasks into typed tickets and routes them across a three-tier model hierarchy. 37 MCP tools. 221 agent personas. 324 skill library files. Conceived April 2025.',
          technologies: ['.Python', '.MCP', '.Claude', '.Gemini', '.Docker', '.SQLite']
        },
        {
          id: 2,
          title: '.chromatic',
          description: 'Bullet heaven with a 2-primary color commitment tree, music-reactive enemy spawning, and 18 named synergies. Built in L\u00d6VE2D.',
          image: '/images/project-chromatic.svg',
          icon: 'bi-controller',
          details: 'CHROMATIC is a Vampire Survivors-style bullet heaven built in L\u00d6VE2D (Lua). Auto-aim shooting with a 2-primary color commitment tree — pick RED, GREEN, or BLUE first; the third locks out for the run. Secondary palette (YELLOW, MAGENTA, CYAN) unlocks when both primaries are leveled. MusicReactor does BPM detection and feeds BASS/MIDS/TREBLE weights into formation-based enemy spawning. Eight artifacts (Prism, Halo, Mirror, Lens, Diffraction, Refraction, Diffusion, Supernova) scale up to Lv5. SynergySystem houses 18 named combo unlocks. Custom GLSL shaders with moonshine bloom pass, beat-reactive grid ripples, and a separate splash screen shader. Full state machine across 9 states. Playable in browser via love.js.',
          technologies: ['.Lua', '.L\u00d6VE2D', '.GLSL', '.LangChain', '.GitHub Actions'],
          link: 'https://vintersong.github.io/love2d-RGB/'
        },
        {
          id: 3,
          title: '.infinite-backlog',
          description: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
          image: '/images/project-backlog.svg',
          icon: 'bi-hourglass-split',
          details: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
          technologies: ['.Steam API', '.React', '.Chart.js (for crying)']
        },
        {
          id: 4,
          title: '.grandma-souls',
          description: 'Soulslike but you\'re a grandmother. Parry with knitting needles. Estus flask is soup.',
          image: '/images/project-grandma.svg',
          icon: 'bi-heart-pulse',
          details: 'Soulslike but you\'re a grandmother. Parry with knitting needles. Estus flask is soup.',
          technologies: ['.unreal-engine-5.4', '.blender', '.matriarch-AI']
        },
        {
          id: 5,
          title: '.linkedin-survival-horror',
          description: 'Roguelike where you navigate recruiter DMs. Permadeath. "Quick chat?" is the final boss.',
          image: '/images/project-linkedin.svg',
          icon: 'bi-linkedin',
          details: 'Roguelike where you navigate recruiter DMs. Permadeath. "Quick chat?" is the final boss.',
          technologies: ['.godot-engine-4.3', '.procedural-generation', '.trauma-simulation']
        }
      ]
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      setTimeout(() => {
        this.selectedProject = null;
      }, 300);
    }
  }
}
</script>

<style scoped>
.projects-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .projects-container {
    padding: 1rem;
  }
}
</style>
