import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Quiz } from "./pages/Quiz"
import { Finish } from "./pages/Finish"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistered, setIsRegistered] = useState(
    !!localStorage.getItem("user")
  )

  const handleRegister = () => {
    setIsRegistered(true)
    setIsLoggedIn(true) // Set user as logged in after registration
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="*" element={<Navigate to="/quiz" />} />
          </>
        ) : (
          <>
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="*"
              element={<Navigate to={isRegistered ? "/login" : "/register"} />}
            />
          </>
        )}
      </Routes>
    </Router>
  )
}
