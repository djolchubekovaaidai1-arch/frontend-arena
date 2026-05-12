import {
  FaRocket,
  FaCode,
  FaReact,
  FaTrophy,
} from 'react-icons/fa'

export const achievements = [
  {
    id: 1,
    title: 'First Steps',
    description: 'Earn 100 XP',
    xpRequired: 100,
    icon: FaRocket,
    color: 'border-cyan-400',
  },

  {
    id: 2,
    title: 'Code Warrior',
    description: 'Earn 300 XP',
    xpRequired: 300,
    icon: FaCode,
    color: 'border-purple-400',
  },

  {
    id: 3,
    title: 'React Explorer',
    description: 'Earn 500 XP',
    xpRequired: 500,
    icon: FaReact,
    color: 'border-blue-400',
  },

  {
    id: 4,
    title: 'Frontend Master',
    description: 'Earn 1000 XP',
    xpRequired: 1000,
    icon: FaTrophy,
    color: 'border-yellow-400',
  },
]