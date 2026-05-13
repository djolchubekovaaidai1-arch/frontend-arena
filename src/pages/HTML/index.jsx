import Quiz from '../../features/quiz/Quiz'

import { htmlQuestions } from '../../shared/constants/htmlQuestions'
import PageWrapper from '../../shared/ui/PageWrapper'

export default function HTMLPage() {
  return (
    <PageWrapper>
      <div>
          <h1 className="text-5xl font-bold mb-3">
        HTML Challenges
      </h1>

      <p className="text-gray-400 mb-10">
        Improve your semantic HTML skills.
      </p>

     <Quiz questions={htmlQuestions} category="html" />
    </div>
    </PageWrapper>
  )
}