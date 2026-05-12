import Quiz from '../../features/quiz/Quiz'

import { htmlQuestions } from '../../shared/constants/htmlQuestions'

export default function HTMLPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-3">
        HTML Challenges
      </h1>

      <p className="text-gray-400 mb-10">
        Improve your semantic HTML skills.
      </p>

      <Quiz questions={htmlQuestions} />
    </div>
  )
}