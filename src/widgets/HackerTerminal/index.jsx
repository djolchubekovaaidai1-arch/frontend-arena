import { useEffect, useState } from 'react'

const lines = [
  '> Initializing Frontend Arena...',
  '> Loading JavaScript challenges...',
  '> Loading React modules...',
  '> User XP synced successfully.',
  '> Hacker mode activated.',
]

export default function HackerTerminal() {
  const [displayedLines, setDisplayedLines] = useState([])

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setDisplayedLines((prev) => [
        ...prev,
        lines[index],
      ])

      index++

      if (index >= lines.length) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="
      bg-black
      border
      border-green-400
      rounded-2xl
      p-6
      font-mono
      glow
      min-h-[250px]
    ">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-3 text-green-400 text-sm md:text-base">
        {displayedLines.map((line, index) => (
          <p key={index}>
            {line}
          </p>
        ))}

        <span className="animate-pulse">
          █
        </span>
      </div>
    </div>
  )
}