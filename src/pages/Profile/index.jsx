import { FaUserAstronaut, FaCode, FaTrophy } from 'react-icons/fa'

import { useUserStore } from '../../app/store/useUserStore'
import PageWrapper from '../../shared/ui/PageWrapper'

export default function ProfilePage() {
  const { xp, level } = useUserStore()

  return (
    <PageWrapper>
    <div>
      <h1 className="text-5xl font-bold mb-10">
        Profile
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#111] border border-cyan-400 rounded-2xl p-6 glow">
          <FaUserAstronaut className="text-4xl text-cyan-400 mb-4" />

          <h2 className="text-2xl font-bold mb-2">
            Frontend Player
          </h2>

          <p className="text-gray-400">
            Level {level}
          </p>
        </div>

        <div className="bg-[#111] border border-purple-400 rounded-2xl p-6 glow">
          <FaCode className="text-4xl text-purple-400 mb-4" />

          <h2 className="text-2xl font-bold mb-2">
            Total XP
          </h2>

          <p className="text-gray-400">
            {xp} XP
          </p>
        </div>

        <div className="bg-[#111] border border-yellow-400 rounded-2xl p-6 glow">
          <FaTrophy className="text-4xl text-yellow-400 mb-4" />

          <h2 className="text-2xl font-bold mb-2">
            Achievements
          </h2>

          <p className="text-gray-400">
            Coming Soon
          </p>
        </div>

      </div>
    </div>
    </PageWrapper>
  )
}