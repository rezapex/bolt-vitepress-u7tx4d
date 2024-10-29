<!-- Create reusable DuaCard component -->
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Dua {
  id: number
  arabic: string
  transliteration: string
  translation: string
  reference: string
  category: string
}

const props = defineProps<{
  dua: Dua
  showFavoriteButton?: boolean
  isFavorite?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleFavorite', id: number): void
}>()
</script>

<template>
  <div class="dua-card">
    <div class="arabic-text text-right mb-4" dir="rtl">{{ dua.arabic }}</div>
    <div class="text-lg mb-2">{{ dua.transliteration }}</div>
    <div class="text-gray-600 dark:text-gray-300 mb-4">{{ dua.translation }}</div>
    <div class="flex justify-between items-center">
      <div class="text-sm text-gray-500">
        Reference: {{ dua.reference }}
      </div>
      <button 
        v-if="showFavoriteButton"
        @click="emit('toggleFavorite', dua.id)" 
        class="favorite-button"
        :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
      >
        <span v-if="isFavorite">❤️</span>
        <span v-else>🤍</span>
      </button>
    </div>
  </div>
</template>