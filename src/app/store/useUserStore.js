import { create } from 'zustand'

const getLevelFromXP = (xp) => {
  return Math.floor(xp / 300) + 1
}

export const useUserStore = create((set, get) => ({
  xp: Number(localStorage.getItem('xp')) || 0,
  level: Number(localStorage.getItem('level')) || 1,

  addXP: (value) => {
    const newXP = get().xp + value
    const newLevel = getLevelFromXP(newXP)

    localStorage.setItem('xp', newXP)
    localStorage.setItem('level', newLevel)

    set({
      xp: newXP,
      level: newLevel,
    })
  },

  reset: () => {
    localStorage.setItem('xp', 0)
    localStorage.setItem('level', 1)

    set({
      xp: 0,
      level: 1,
    })
  },
}))