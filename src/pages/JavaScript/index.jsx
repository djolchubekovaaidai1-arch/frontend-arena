import Quiz from '../../features/quiz/Quiz'

import { javascriptQuestions } from '../../shared/constants/javascriptQuestions'
import PageWrapper from '../../shared/ui/PageWrapper'

export default function JavaScriptPage() {
  return (
    <PageWrapper>
    <div>
      <h1 className="text-5xl font-bold mb-3">
        JavaScript Challenges
      </h1>

      <p className="text-gray-400 mb-10">
        Test your JavaScript knowledge.
      </p>

      <Quiz questions={jsQuestions} category="javascript" />
    </div>
    </PageWrapper>
  )
}