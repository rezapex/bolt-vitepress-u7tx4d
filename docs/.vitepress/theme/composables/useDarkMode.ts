import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  const updateDarkMode = (value: boolean) => {
    isDark.value = value
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('dark-mode', value.toString())
  }

  const toggleDarkMode = () => {
    updateDarkMode(!isDark.value)
  }

  onMounted(() => {
    const stored = localStorage.getItem('dark-mode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    updateDarkMode(stored ? stored === 'true' : prefersDark)
  })

  return {
    isDark,
    toggleDarkMode
  }
}