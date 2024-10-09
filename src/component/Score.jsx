export const Score = ({ score, totalQuestions }) => {
  return (
    <div className="text-white text-sm font-semibold font-[Inter]">
      Score: {score} out of {totalQuestions}
    </div>
  )
}
