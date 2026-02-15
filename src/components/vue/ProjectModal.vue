<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button 
          class="modal-close" 
          @click="closeModal"
          @keydown.enter="closeModal"
          @keydown.space.prevent="closeModal"
          aria-label="Close modal"
          ref="closeButton"
        >
          <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="modal-content">
          <div class="modal-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          
          <div class="modal-body">
            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-description">{{ project.description }}</p>
            
            <div class="modal-details">
              <h3 class="details-heading">Project Details</h3>
              <p class="details-text">{{ project.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      default: null
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  data() {
    return {
      previousActiveElement: null
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.previousActiveElement = document.activeElement;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeydown);
        this.$nextTick(() => {
          if (this.$refs.closeButton) {
            this.$refs.closeButton.focus();
          }
        });
      } else {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.handleKeydown);
        if (this.previousActiveElement) {
          this.previousActiveElement.focus();
        }
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this.handleKeydown);
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 10, 20, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background: var(--card);
  border: 1px solid var(--lavender-border);
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 60px var(--lavender-glow);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--bg-deep);
  border: 1px solid var(--lavender-border);
  color: var(--lavender);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all var(--ease-quick);
  font-size: 1.2rem;
}

.modal-close:hover {
  background: var(--card-hover);
  border-color: var(--lavender);
  box-shadow: 0 0 20px var(--lavender-glow);
  transform: rotate(90deg);
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: var(--bg-deep);
  border-radius: 16px 16px 0 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2rem;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--lavender);
  margin-bottom: 1rem;
  text-shadow: 0 0 20px var(--lavender-glow);
}

.modal-description {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--accent);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--teal-glow);
}

.modal-details {
  border-top: 1px solid var(--lavender-border);
  padding-top: 1.5rem;
}

.details-heading {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--teal);
  margin-bottom: 1rem;
  text-shadow: 0 0 15px var(--teal-glow);
}

.details-text {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: rgba(237, 230, 245, 0.8);
  line-height: 1.8;
  margin: 0;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--ease-smooth);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform var(--ease-smooth);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9) translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-container {
    margin: 1rem;
    max-height: 95vh;
  }
  
  .modal-image {
    height: 200px;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
}
</style>
