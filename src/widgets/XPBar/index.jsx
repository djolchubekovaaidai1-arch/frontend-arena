import { useUserStore } from '../../app/store/useUserStore'

export default function XPBar() {
  const { xp, level } = useUserStore()

  const progress = xp % 300
  const percent = (progress / 300) * 100

  return (
    <div className="w-full md:w-[250px]">
      <div className="flex justify-between mb-2 text-sm text-gray-300">
        <span>Level {level}</span>
        <span>{xp} XP</span>
      </div>

      <div className="h-[10px] bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-500 glow"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}