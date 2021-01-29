import { FC, MouseEvent } from 'react'

import { AnswerObject } from '../App'

// https://opentdb.com/api.php?amount=10&type=multiple

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
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <button 
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div> 
        </div>
    )

export default QuestionCard