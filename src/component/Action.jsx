export const Action = ({ onRestart, onLogout }) => {
  return (
    <div className="justify-center items-center gap-[33px] inline-flex">
      <button
        className="text-white text-xs font-medium font-['Inter']"
        onClick={onRestart}
      >
        Restart Quiz
      </button>
      <button
        className="text-white text-xs font-medium font-['Inter']"
        onClick={onLogout}
      >
        Exit to Login
      </button>
    </div>
  )
}
