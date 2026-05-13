import {
  FaBolt,
  FaCode,
  FaLayerGroup,
  FaTrophy,
} from 'react-icons/fa'

import GameCard from '../../shared/ui/GameCard'
import StatCard from '../../shared/ui/StatCard'
import PageWrapper from '../../shared/ui/PageWrapper'
import XPChart from '../../widgets/XPChart'
import HackerTerminal from '../../widgets/HackerTerminal'

import { useUserStore } from '../../app/store/useUserStore'

export default function HomePage() {
  const { xp, level, progress } = useUserStore()

  return (
    <PageWrapper>
      <div>

        {/* HERO */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frontend Arena Dashboard
          </h1>

          <p className="text-gray-400 text-lg max-w-[700px]">
            Interactive platform for learning JavaScript, HTML, CSS and React with XP system, levels and challenges.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

          <StatCard
            title="Total XP"
            value={xp}
            Icon={FaBolt}
            color="border-cyan-400"
          />

          <StatCard
            title="Level"
            value={level}
            Icon={FaTrophy}
            color="border-yellow-400"
          />

          <StatCard
            title="Categories"
            value="4"
            Icon={FaLayerGroup}
            color="border-green-400"
          />

          <StatCard
            title="Challenges"
            value="∞"
            Icon={FaCode}
            color="border-purple-400"
          />

        </div>

        {/* CATEGORY PROGRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

          <div className="bg-[#111] border border-yellow-400 p-6 rounded-2xl glow">
            <h3 className="text-xl font-bold mb-2">JavaScript</h3>
            <p className="text-gray-400">{progress.javascript} XP</p>
          </div>

          <div className="bg-[#111] border border-orange-400 p-6 rounded-2xl glow">
            <h3 className="text-xl font-bold mb-2">HTML</h3>
            <p className="text-gray-400">{progress.html} XP</p>
          </div>

          <div className="bg-[#111] border border-blue-400 p-6 rounded-2xl glow">
            <h3 className="text-xl font-bold mb-2">CSS</h3>
            <p className="text-gray-400">{progress.css} XP</p>
          </div>

          <div className="bg-[#111] border border-cyan-400 p-6 rounded-2xl glow">
            <h3 className="text-xl font-bold mb-2">React</h3>
            <p className="text-gray-400">{progress.react} XP</p>
          </div>

        </div>

        {/* COURSES */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Start Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <GameCard
              title="JavaScript"
              description="Logic, functions, arrays and problem solving."
              color="border-yellow-400"
            />

            <GameCard
              title="HTML"
              description="Semantic structure and accessibility."
              color="border-orange-400"
            />

            <GameCard
              title="CSS"
              description="Layouts, flexbox, grid and animations."
              color="border-blue-400"
            />

            <GameCard
              title="React"
              description="Hooks, state management and components."
              color="border-cyan-400"
            />

          </div>
        </div>

        {/* CHART */}
        <div className="mb-12">
          <XPChart />
        </div>

        {/* TERMINAL */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            System Terminal
          </h2>

          <HackerTerminal />
        </div>

      </div>
    </PageWrapper>
  )
}