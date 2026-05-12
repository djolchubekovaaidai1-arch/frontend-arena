import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'
import { FaTrophy, FaRedo, FaChartLine } from 'react-icons/fa'


import { useUserStore } from '../../app/store/useUserStore'

export default function Result({ score, total, onRestart }) {
    const xp = useUserStore((state) => state.xp)
    const reset = useUserStore((state) => state.reset)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const percent = Math.round((score / total) * 100)

    let message = ''
    if (percent === 100) message = 'Perfect Run'
    else if (percent >= 70) message = 'Good Job'
    else message = 'Keep Practicing'

    return (
        <div className="relative bg-[#111] border border-cyan-400 rounded-2xl p-10 text-center glow overflow-hidden">

            {/* Confetti */}
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={false}
                numberOfPieces={250}
            />

            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-6">
                <FaTrophy className="text-yellow-400 text-3xl" />
                <h2 className="text-4xl font-bold">
                    Quiz Completed
                </h2>
            </div>

            {/* Score */}
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {score} / {total} ({percent}%)
            </h3>

            {/* Message */}
            <p className="text-lg text-gray-300 mb-6">
                {message}
            </p>

            {/* XP */}
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
                <FaChartLine />
                <span>Total XP: {xp}</span>
            </div>

            {/* Button */}
            <button
                onClick={() => {
                    reset()
                    onRestart()
                }}
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto"
            >
                <FaRedo />
                Try Again
            </button>
        </div>
    )
}