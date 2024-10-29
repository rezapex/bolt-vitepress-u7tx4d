import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'
import ThemeToggle from './components/ThemeToggle.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThemeToggle', ThemeToggle)
  }
} as Theme