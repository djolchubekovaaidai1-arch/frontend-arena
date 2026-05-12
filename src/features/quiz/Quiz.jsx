import { useState } from 'react'
import Result from './Result'

import { useUserStore } from '../../app/store/useUserStore'

export default function Quiz({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)

    const addXP = useUserStore((state) => state.addXP)

    const question = questions[currentQuestion]

    const handleAnswer = (index) => {
        setSelectedAnswer(index)

        if (index === question.correct) {
            setIsCorrect(true)
            setScore((s) => s + 1)
            addXP(question.xp)
        } else {
            setIsCorrect(false)
        }
    }

    const nextQuestion = () => {
        setSelectedAnswer(null)
        setIsCorrect(null)

        const next = currentQuestion + 1

        if (next >= questions.length) {
            setFinished(true)
            return
        }

        setCurrentQuestion(next)
    }

    if (currentQuestion >= questions.length) {
        return (
            <div className="bg-[#111] p-8 rounded-2xl border border-cyan-400 glow">
                <h2 className="text-3xl font-bold mb-4">
                    Quiz Completed 🎉
                </h2>

                <p className="text-gray-400">
                    Great job hacker.
                </p>
            </div>
        )
    }
    if (finished) {
        return (
            <Result
                score={score}
                total={questions.length}
                onRestart={() => {
                    setCurrentQuestion(0)
                    setScore(0)
                    setFinished(false)
                    setSelectedAnswer(null)
                    setIsCorrect(null)
                }}
            />
        )
    }

    return (
        <div className="bg-[#111] p-8 rounded-2xl border border-cyan-400 glow max-w-[700px]">
            <p className="text-cyan-400 mb-3">
                Question {currentQuestion + 1} / {questions.length}
            </p>

            <h2 className="text-3xl font-bold mb-8">
                {question.question}
            </h2>

            <div className="flex flex-col gap-4">
                {question.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`
              p-4
              rounded-xl
              border
              transition-all
              text-left
              ${selectedAnswer === index
                                ? index === question.correct
                                    ? 'border-green-400 bg-green-400/10'
                                    : 'border-red-400 bg-red-400/10'
                                : 'border-[#2a2a2a] hover:border-cyan-400'
                            }
            `}
                    >
                        {answer}
                    </button>
                ))}
            </div>

            {selectedAnswer !== null && (
                <button
                    onClick={nextQuestion}
                    className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                >
                    Next Question
                </button>
            )}
        </div>
    )
}