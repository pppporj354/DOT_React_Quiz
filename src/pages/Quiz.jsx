import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { quizService } from "../service/Api"
import { QuestionContainer } from "../component/QuestionContainer"
import { Button } from "../component/Button"

export const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isFinished, setIsFinished] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await quizService.fetchQuestions()
        console.log(data)
        if (data && Array.isArray(data)) {
          setQuestions(data)
        } else {
          console.error("Invalid data format:", data)
        }
      } catch (error) {
        console.error("Error fetching questions:", error)
      }
    }

    fetchQuestions()
  }, [])

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timerId)
    } else if (timeLeft === 0) {
      setIsFinished(true)
      navigate("/finish", {
        state: { score, totalQuestions: questions.length },
      })
    }
  }, [timeLeft, isFinished, navigate, score, questions.length])

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setIsFinished(true)
      navigate("/finish", {
        state: { score, totalQuestions: questions.length },
      })
    }
  }

  if (questions.length === 0) {
    return <div>Loading...</div>
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 rounded-lg shadow-lg">
        <QuestionContainer
          number={currentQuestionIndex + 1}
          questionText={currentQuestion.question}
          answers={currentQuestion.answers.map((answer) => (
            <Button
              key={answer.text}
              onClick={() => handleAnswer(answer.isCorrect)}
              className="rounded-sm"
            >
              {answer.text}
            </Button>
          ))}
        />

        <p className="absolute top-0 left-0 m-4 p-2 bg-white rounded-full shadow-md">
          Time left: {timeLeft} seconds
        </p>
      </div>
    </>
  )
}
