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
          id: 1,
          title: '.data-visualizer',
          description: 'Player metrics dashboard. Numbers become lines. Lines become insights. Insights justify decisions.',
          image: '/images/project-data.svg',
          icon: 'bi-graph-up-arrow',
          details: 'Player metrics dashboard and streamlined cohort visualizer for teams and publishers.',
          technologies: ['.excel', '.power-bi', '.indentation-hell (python)']
        },
        {
          id: 2,
          title: '.infinite-backlog',
          description: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
          image: '/images/project-backlog.svg',
          icon: 'bi-hourglass-split',
          details: 'A project management tool that visualizes your steam library and weeps. Integrates with existential dread.',
          technologies: ['.Steam API', '.React', '.Chart.js (for crying)']
        },
        {
          id: 3,
          title: '.abyss-clicker',
          description: 'Idle game where you click the void. The void clicks back. Prestige system based on ego death.',
          image: '/images/project-abyss.svg',
          icon: 'bi-mouse',
          details: 'Idle game where you click the void. The void clicks back. Prestige system based on ego death.',
          technologies: ['.JavaScript', '.LocalStorage (persistence)', '.Nietzsche.js']
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
