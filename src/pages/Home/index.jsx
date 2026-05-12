import GameCard from '../../shared/ui/GameCard'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Frontend Arena
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Learn frontend through interactive games.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        <GameCard
          title="JavaScript"
          description="Solve logic and bug challenges."
          color="border-yellow-400"
        />

        <GameCard
          title="HTML"
          description="Learn semantic structure."
          color="border-orange-400"
        />

        <GameCard
          title="CSS"
          description="Master layouts and flexbox."
          color="border-blue-400"
        />

        <GameCard
          title="React"
          description="Understand hooks and state."
          color="border-cyan-400"
        />
      </div>
    </div>
  )
}