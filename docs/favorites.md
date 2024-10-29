---
title: Favorite Duas
---

<script setup>
import { computed } from 'vue'
import DuaCard from './.vitepress/theme/components/DuaCard.vue'
import { useDuas } from './.vitepress/theme/composables/useDuas'
import { useFavorites } from './.vitepress/theme/composables/useFavorites'

const { duas } = useDuas()
const { favorites, toggleFavorite } = useFavorites()

const favoriteDuas = computed(() => 
  duas.value.filter(dua => favorites.value.includes(dua.id))
)
</script>

# Favorite Duas

<div class="max-w-4xl mx-auto py-8">
  <div v-if="favoriteDuas.length === 0" class="text-center py-12">
    <div class="text-4xl mb-4">📖</div>
    <h3 class="text-xl font-semibold mb-2">No favorites yet</h3>
    <p class="text-gray-600 dark:text-gray-300">
      Start adding duas to your favorites by clicking the heart icon
    </p>
  </div>

  <div v-else class="space-y-6">
    <DuaCard
      v-for="dua in favoriteDuas"
      :key="dua.id"
      :dua="dua"
      :show-favorite-button="true"
      :is-favorite="true"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</div>