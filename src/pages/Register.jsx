import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputField } from "../component/InputField"

export const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !password) {
      alert("Username and password are required")
      return
    }

    try {
      localStorage.setItem("user", JSON.stringify({ username, password }))
      onRegister()
      navigate("/quiz")
    } catch (error) {
      // console.error("Error:", error)
      alert("Failed to register")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[579px] h-[470px] px-[89px] py-[185px] bg-[#333333] rounded-3xl flex flex-col justify-center items-center gap-2.5">
        <h1 className="w-[381px] text-white text-[32px] font-semibold font-['Inter']">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="self-stretch h-[220px] p-2.5 flex flex-col justify-start items-start gap-2"
        >
          <div className="self-stretch h-[35px] p-2.5 bg-gradient-to-r from-white to-white rounded-[18px] shadow border border-[#363636] flex justify-center items-center gap-2.5">
            <InputField
              label="Username:"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-[362px] text-center text-white text-xs font-normal font-['Inter']"
            />
          </div>
          <div className="self-stretch h-[35px] p-2.5 bg-gradient-to-r from-white to-white rounded-[18px] shadow border border-[#363636] flex justify-center items-center gap-2.5">
            <InputField
              label="Password:"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-[362px] text-center text-white text-xs font-normal font-['Inter']"
            />
          </div>
          <div className="self-stretch h-[114px] pt-6 flex flex-col justify-center items-center gap-1">
            <button
              type="submit"
              className="w-[184px] h-[35px] p-2.5 bg-gradient-to-r from-white to-gray-300 rounded-[18px] shadow border border-[#363636] flex justify-center items-center gap-2.5 hover:bg-gray-700"
            >
              <span className="text-center text-[#343434] text-xs font-normal font-['Inter']">
                Register
              </span>
            </button>
            <span className="text-center text-[#ababab] text-[10px] font-normal font-['Inter']">
              or
            </span>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-[184px] h-[35px] p-2.5 rounded-[18px] border border-[#9c9c9c] flex justify-center items-center gap-2.5 hover:bg-gray-700"
            >
              <span className="text-center text-white text-xs font-normal font-['Inter']">
                Login
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
