export default function AchievementCard({
  title,
  description,
  unlocked,
  Icon,
  color,
}) {
  return (
    <div
      className={
       ` bg-[#111]
        border
        rounded-2xl
        p-6
        transition-all
        glow
        ${
          unlocked
            ? color
            : 'border-[#2a2a2a] opacity-50'
        }`
      }
    >
      <Icon
        className={
         ` text-4xl mb-4
          ${unlocked ? 'text-white' : 'text-gray-500'}`
        }
      />

      <h3 className="text-2xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>

      <div className="mt-4">
        {unlocked ? (
          <span className="text-green-400 font-semibold">
            Unlocked
          </span>
        ) : (
          <span className="text-gray-500">
            Locked
          </span>
        )}
      </div>
    </div>
  )
}