import { ref, computed } from 'vue'

export interface Dua {
  id: number
  arabic: string
  transliteration: string
  translation: string
  reference: string
  category: string
  audio?: string
}

const duas = ref<Dua[]>([
  {
    id: 1,
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina adhaban-nar',
    translation: 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire',
    reference: 'Quran 2:201',
    category: 'Quranic'
  },
  {
    id: 2,
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ',
    transliteration: 'Allahumma salli \'ala Muhammadin wa aali Muhammad',
    translation: 'O Allah, send blessings upon Muhammad and the family of Muhammad',
    reference: 'Shia Tradition',
    category: 'Daily'
  },
  {
    id: 3,
    arabic: 'يَا عَلِيُّ يَا عَظِيمُ يَا غَفُورُ يَا رَحِيمُ',
    transliteration: 'Ya Aliyyu Ya Azhimu Ya Ghafuru Ya Rahimu',
    translation: 'O Most High, O Magnificent, O All-Forgiving, O Most Merciful',
    reference: 'Dua Jawshan Kabir',
    category: 'Shia'
  },
  {
    id: 4,
    arabic: 'اللَّهُمَّ كُنْ لِوَلِيِّكَ الحُجَّةِ بْنِ الحَسَنِ',
    transliteration: 'Allahumma kun li-waliyyikal-hujjat ibnil-hasan',
    translation: 'O Allah, be, for Your representative, the Hujjat, son of Al-Hasan',
    reference: 'Dua al-Faraj',
    category: 'Shia'
  },
  {
    id: 5,
    arabic: 'يا مَنْ اَظْهَرَ الْجَميلَ وَسَتَرَ الْقَبيحَ',
    transliteration: 'Ya man adhharal jamila wa sataral qabih',
    translation: 'O He who reveals the beautiful and conceals the ugly',
    reference: 'Dua Abu Hamza Thumali',
    category: 'Shia'
  }
])

export function useDuas() {
  const getDuasByCategory = (category: string) => {
    return computed(() => duas.value.filter(dua => dua.category === category))
  }

  const searchDuas = (query: string) => {
    return computed(() => {
      if (!query) return duas.value
      const lowercaseQuery = query.toLowerCase()
      return duas.value.filter(dua => 
        dua.translation.toLowerCase().includes(lowercaseQuery) ||
        dua.transliteration.toLowerCase().includes(lowercaseQuery)
      )
    })
  }

  return {
    duas,
    getDuasByCategory,
    searchDuas
  }
}