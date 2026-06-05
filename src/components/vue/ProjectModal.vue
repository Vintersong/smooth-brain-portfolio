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
            <i v-if="project.icon" :class="`bi ${project.icon}`" class="modal-icon" :aria-label="project.title"></i>
            <img v-else :src="project.image" :alt="project.title" />
          </div>
          
          <div class="modal-body">
            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-description">{{ project.description }}</p>
            
            <div v-if="project.technologies" class="modal-technologies">
              <h3 class="details-heading">.technologies</h3>
              <ul class="technologies-list">
                <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
              </ul>
            </div>
            
            <div class="modal-details">
              <h3 class="details-heading">.details</h3>
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
  background: rgba(18, 18, 42, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-card);
  position: relative;
}

.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--bg-raised);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.15s ease;
  font-size: 1rem;
  font-family: var(--font-mono);
}

.modal-close:hover {
  background: var(--bg-overlay);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-image {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: var(--bg-raised);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-icon {
  font-size: 8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.modal-technologies {
  margin-bottom: var(--space-8);
}

.technologies-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.technologies-list li {
  color: var(--accent-secondary);
  border: 1px solid var(--accent-secondary);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  letter-spacing: 0.04em;
}

.modal-body {
  padding: var(--space-8);
}

.modal-title {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--space-4);
  letter-spacing: 0.02em;
}

.modal-description {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.modal-details {
  border-top: 1px solid var(--border-subtle);
  padding-top: var(--space-6);
}

.details-heading {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: var(--space-4);
  letter-spacing: 0.02em;
}

.details-text {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-primary);
  line-height: 1.8;
  margin: 0;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.2s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(16px);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-container {
    margin: 0.5rem;
    max-height: 95vh;
  }

  .modal-image {
    height: 200px;
  }

  .modal-body {
    padding: var(--space-6);
  }

  .modal-title {
    font-size: 1.25rem;
  }
}
</style>
