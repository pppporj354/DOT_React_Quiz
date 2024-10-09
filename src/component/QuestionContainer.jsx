import { QuestionHeader } from "./QuestionHeader"
import { QuestionBody } from "./QuestionBody"
import { AnswerOption } from "./AnswerOption"

export const QuestionContainer = ({ number, questionText, answers }) => (
  <div className="w-[800px] h-[441px] flex-col justify-start items-center gap-[51px] inline-flex">
    <div className="self-stretch h-[200px] px-[53px] py-9 bg-[#333333] rounded-3xl flex-col justify-center items-center gap-2.5 flex">
      <QuestionHeader number={number} />
      <QuestionBody text={questionText} />
    </div>
    <div className="h-[190px] p-2.5 flex-col justify-start items-start gap-2.5 flex">
      {answers.map((answer, index) => (
        <AnswerOption
          key={index}
          option={String.fromCharCode(97 + index)}
          text={answer}
        />
      ))}
    </div>
  </div>
)
