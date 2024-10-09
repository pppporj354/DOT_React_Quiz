export const AnswerOption = ({ option, text }) => (
  <div className="self-stretch p-2.5 bg-white rounded-3xl justify-center items-start gap-2.5 inline-flex">
    <div className="text-black text-xs font-bold font-['Inter']">
      {option}. {text}
    </div>
  </div>
)
