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
          title: 'Quantum UI Framework',
          description: 'A revolutionary cyberpunk-themed UI framework that manipulates quantum states for smooth transitions.',
          image: '/images/project1.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.'
        },
        {
          id: 2,
          title: 'Neural Network Dashboard',
          description: 'Real-time visualization of AI neural networks with vaporwave aesthetics and glitch effects.',
          image: '/images/project2.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Sed pulvinar proin gravida hendrerit lectus a. Dui faucibus in ornare quam viverra orci sagittis eu. Vitae congue eu consequat ac felis donec et odio pellentesque. Massa tincidunt nunc pulvinar sapien et ligula. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Egestas diam in arcu cursus euismod quis viverra nibh cras.'
        },
        {
          id: 3,
          title: 'Blockchain Explorer 3000',
          description: 'Navigate the blockchain through a neon-soaked interface inspired by 80s sci-fi.',
          image: '/images/project3.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.'
        },
        {
          id: 4,
          title: 'Cyber Security Suite',
          description: 'Advanced security monitoring with holographic data streams and retro terminal aesthetics.',
          image: '/images/project4.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.'
        },
        {
          id: 5,
          title: 'Synth Wave Music Player',
          description: 'A retro-futuristic music player with animated equalizers and gradient-heavy design.',
          image: '/images/project5.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris lectus, lobortis et purus mattis, blandit dictum tellus. Maecenas non lorem quis tellus placerat varius. Nulla facilisi. Aenean congue fringilla justo ut aliquam. Mauris id ex erat. Nunc vulputate neque vitae justo facilisis, non condimentum ante sagittis. Morbi viverra semper lorem nec molestie. Maecenas tincidunt est efficitur ligula euismod, sit amet ornare est vulputate. In tellus odio, tristique quis venenatis eget, pulvinar sit amet mauris.'
        },
        {
          id: 6,
          title: 'Virtual Reality Portal',
          description: 'Step into alternate dimensions through this VR gateway with procedural glitch art.',
          image: '/images/project6.svg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
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
