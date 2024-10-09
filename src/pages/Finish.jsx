import { useNavigate, useLocation } from "react-router-dom"
import { Title } from "../component/Title"
import { Action } from "../component/Action"
import { Score } from "../component/Score"

export const Finish = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { score, totalQuestions } = location.state

  const handleRestart = () => {
    navigate("/quiz")
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[800px] h-[200px] px-[53px] py-9 bg-[#333333] rounded-3xl flex flex-col justify-center items-center gap-2.5">
        <Title title="Quiz Finished" />
        <Score score={score} totalQuestions={totalQuestions} />
        <Action onRestart={handleRestart} onLogout={handleLogout} />
      </div>
    </div>
  )
}
