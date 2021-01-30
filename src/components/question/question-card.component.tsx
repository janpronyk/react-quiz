import { FC, MouseEvent } from 'react'

import { AnswerObject } from '../../App'
import { QuestionWrapper, ButtonWrapper } from './question-card.styles'


type Props = {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> =  ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions}) => (
        <QuestionWrapper>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map((answer, index) => (
                    <ButtonWrapper 
                        key={index}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}>
                        <button 
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div> 
        </QuestionWrapper>
    )

export default QuestionCard