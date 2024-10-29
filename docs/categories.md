---
title: Dua Categories
---

<script setup>
import { ref } from 'vue'
import { useDuas } from './.vitepress/theme/composables/useDuas'

const { getDuasByCategory } = useDuas()
const categories = [
  {
    title: 'Morning & Evening',
    description: 'Daily morning and evening supplications',
    count: getDuasByCategory('Daily').value.length,
    icon: '🌅'
  },
  {
    title: 'Quranic Duas',
    description: 'Supplications from the Holy Quran',
    count: getDuasByCategory('Quranic').value.length,
    icon: '📖'
  },
  {
    title: 'Shia Duas',
    description: 'Traditional Shia supplications',
    count: getDuasByCategory('Shia').value.length,
    icon: '🕌'
  }
]
</script>

# Dua Categories

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
  <div v-for="category in categories" 
       class="category-card">
    <div class="text-4xl mb-4">{{ category.icon }}</div>
    <h3 class="category-title">{{ category.title }}</h3>
    <p class="category-description">{{ category.description }}</p>
    <div class="category-count">
      {{ category.count }} duas
    </div>
  </div>
</div>