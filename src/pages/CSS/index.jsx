import Quiz from '../../features/quiz/Quiz'

import { cssQuestions } from '../../shared/constants/cssQuestions'

export default function CSSPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-3">
        CSS Challenges
      </h1>

      <p className="text-gray-400 mb-10">
        Practice layouts and styling.
      </p>

      <Quiz questions={cssQuestions} />
    </div>
  )
}