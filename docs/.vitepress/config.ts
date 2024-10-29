import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Duas.org',
  description: 'A Comprehensive Collection of Islamic Supplications',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories' },
      { text: 'Search', link: '/search' },
      { text: 'Favorites', link: '/favorites' },
      { text: '', link: '', items: [{ text: '', component: 'ThemeToggle' }] }
    ],
    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Morning & Evening', link: '/categories/morning-evening' },
          { text: 'Quranic Duas', link: '/categories/quranic' },
          { text: 'Prophetic Duas', link: '/categories/prophetic' },
          { text: 'Daily Life', link: '/categories/daily' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Duas.org'
    },
    search: {
      provider: 'local'
    }
  }
})