import AchievementCard from '../../shared/ui/AchievementCard'

import { achievements } from '../../shared/constants/achievements'

import { useUserStore } from '../../app/store/useUserStore'
import PageWrapper from '../../shared/ui/PageWrapper'

export default function AchievementsPage() {
  const xp = useUserStore((state) => state.xp)

  return (
      <PageWrapper>
    <div>
      <h1 className="text-5xl font-bold mb-4">
        Achievements
      </h1>

      <p className="text-gray-400 mb-10">
        Unlock rewards by earning XP.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            unlocked={xp >= achievement.xpRequired}
            Icon={achievement.icon}
            color={achievement.color}
          />
        ))}
      </div>
    </div>
  </PageWrapper>  
)
}