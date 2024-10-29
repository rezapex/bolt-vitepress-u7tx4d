---
layout: home

hero:
  name: "Duas.org"
  text: "Islamic Supplications Repository"
  tagline: A comprehensive collection of authentic duas with translations and audio
  actions:
    - theme: brand
      text: Browse Duas
      link: /categories
    - theme: alt
      text: Search
      link: /search

features:
  - title: Authentic Collection
    icon: 🌙
    details: Carefully curated collection of verified duas from the Quran and Sunnah
  - title: Easy Navigation
    icon: 🎯
    details: Browse by categories or search for specific duas
  - title: Multiple Languages
    icon: 🌍
    details: Arabic text with transliteration and translations
  - title: Audio Recitations
    icon: 🎵
    details: Listen to beautiful recitations of duas
---

<script setup>
import { useDarkMode } from './.vitepress/theme/composables/useDarkMode'
import { useDuas } from './.vitepress/theme/composables/useDuas'

const { isDark, toggleDarkMode } = useDarkMode()
const { getDuasByCategory } = useDuas()
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="category in ['Morning & Evening', 'Quranic Duas', 'Prophetic Duas']" 
         class="category-card">
      <h3 class="text-xl font-semibold mb-2">{{ category }}</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Explore authentic duas from {{ category }}
      </p>
    </div>
  </div>
</div>