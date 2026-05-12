import Quiz from '../../features/quiz/Quiz'

import { reactQuestions } from '../../shared/constants/reactQuestions'

export default function ReactPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-3">
        React Challenges
      </h1>

      <p className="text-gray-400 mb-10">
        Test your React knowledge.
      </p>

      <Quiz questions={reactQuestions} />
    </div>
  )
}