<template>
  <div 
    class="project-card"
    @click="$emit('open-modal', project)"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('open-modal', project)"
    @keydown.space.prevent="$emit('open-modal', project)"
    :aria-label="`View details for ${project.title}`"
  >
    <div class="project-card-image">
      <i v-if="project.icon" :class="`bi ${project.icon}`" class="project-icon" :aria-label="project.title"></i>
      <img v-else :src="project.image" :alt="project.title" />
    </div>
    <div class="project-card-content">
      <h3 class="project-card-title">{{ project.title }}</h3>
      <p class="project-card-description">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['open-modal']
}
</script>

<style scoped>
.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  box-shadow: var(--shadow-card);
}

.project-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-accent);
}

.project-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--bg-raised);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-icon {
  font-size: 5rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.project-card-content {
  padding: var(--space-6);
}

.project-card-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--space-3);
  letter-spacing: 0.02em;
}

.project-card-description {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
