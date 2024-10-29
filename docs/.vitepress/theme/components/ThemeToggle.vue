<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button 
    @click="toggleDarkMode"
    class="theme-toggle"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    aria-label="Toggle dark mode"
  >
    <span class="theme-toggle-icon">{{ isDark ? '🌙' : '☀️' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background-color: var(--vp-c-bg-soft);
}

.theme-toggle-icon {
  font-size: 1.2rem;
  line-height: 1;
}
</style>