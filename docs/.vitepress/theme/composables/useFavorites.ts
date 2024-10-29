import { ref, onMounted } from 'vue'
import type { Dua } from './useDuas'

export function useFavorites() {
  const favorites = ref<number[]>([])

  const loadFavorites = () => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      favorites.value = JSON.parse(stored)
    }
  }

  const saveFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const toggleFavorite = (duaId: number) => {
    const index = favorites.value.indexOf(duaId)
    if (index === -1) {
      favorites.value.push(duaId)
    } else {
      favorites.value.splice(index, 1)
    }
    saveFavorites()
  }

  const isFavorite = (duaId: number) => favorites.value.includes(duaId)

  onMounted(loadFavorites)

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
}