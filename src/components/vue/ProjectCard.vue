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
      <i v-if="project.icon" :class="`bi ${project.icon}`" class="project-icon"></i>
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
  background: var(--card);
  border: 1px solid var(--lavender-border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--ease-smooth);
  box-shadow: 0 0 20px rgba(212, 180, 240, 0.1);
}

.project-card:hover {
  background: var(--card-hover);
  border-color: var(--lavender);
  box-shadow: 0 0 30px var(--lavender-glow);
  transform: translateY(-4px);
}

.project-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--bg-deep);
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--ease-smooth);
}

.project-icon {
  font-size: 5rem;
  color: rgba(212, 180, 240, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.project-card:hover .project-card-image img {
  transform: scale(1.05);
}

.project-card-content {
  padding: 1.5rem;
}

.project-card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--lavender);
  margin-bottom: 0.75rem;
  text-shadow: 0 0 15px var(--lavender-glow);
}

.project-card-description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: rgba(237, 230, 245, 0.75);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
