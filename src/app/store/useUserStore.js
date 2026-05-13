import { create } from 'zustand'

const getLevel = (xp) => Math.floor(xp / 300) + 1

export const useUserStore = create((set, get) => ({
  xp: Number(localStorage.getItem('xp')) || 0,
  level: Number(localStorage.getItem('level')) || 1,

  // 👉 новый объект прогресса по категориям
  progress: JSON.parse(localStorage.getItem('progress')) || {
    javascript: 0,
    html: 0,
    css: 0,
    react: 0,
  },

  addXP: (value, category) => {
    const newXP = get().xp + value
    const newLevel = getLevel(newXP)

    const updatedProgress = {
      ...get().progress,
      [category]: (get().progress[category] || 0) + value,
    }

    localStorage.setItem('xp', newXP)
    localStorage.setItem('level', newLevel)
    localStorage.setItem('progress', JSON.stringify(updatedProgress))

    set({
      xp: newXP,
      level: newLevel,
      progress: updatedProgress,
    })
  },

  reset: () => {
    const resetProgress = {
      javascript: 0,
      html: 0,
      css: 0,
      react: 0,
    }

    localStorage.setItem('xp', 0)
    localStorage.setItem('level', 1)
    localStorage.setItem('progress', JSON.stringify(resetProgress))

    set({
      xp: 0,
      level: 1,
      progress: resetProgress,
    })
  },
}))