---
title: Search Duas
---

<script setup>
import { ref } from 'vue'
import DuaCard from './.vitepress/theme/components/DuaCard.vue'
import { useDuas } from './.vitepress/theme/composables/useDuas'
import { useFavorites } from './.vitepress/theme/composables/useFavorites'

const searchQuery = ref('')
const { searchDuas } = useDuas()
const { toggleFavorite, isFavorite } = useFavorites()

const filteredDuas = searchDuas(searchQuery.value)
</script>

# Search Duas

<div class="max-w-4xl mx-auto py-8">
  <div class="mb-8">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search duas..."
      class="search-input"
      aria-label="Search duas"
    />
  </div>

  <div class="space-y-6">
    <DuaCard
      v-for="dua in filteredDuas"
      :key="dua.id"
      :dua="dua"
      :show-favorite-button="true"
      :is-favorite="isFavorite(dua.id)"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</div>