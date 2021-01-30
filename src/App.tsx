import { MouseEvent, useState } from 'react';

import { fetchQuizQuestions } from './API'
import QuestionCard from './components/question/question-card.component'

import { Difficulty, QuestionState } from './API'
import { GlobalStyles, Wrapper } from './App.styles'

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const  App = () => {
  const [loading, setLoading ] = useState(false)
  const [questions, setQuestions ] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)

  console.log(questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if(correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }

  }

  const nextQuestion = () => {
    setInitialLoad(false)
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS - 1) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }
  
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>React Quiz</h1>
        {
        !loading && !initialLoad ? 
          <p className="score">Score: {score}</p>  
          : null
        }

        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS ? 
          (<button className='start' onClick={startTrivia}>
            { initialLoad ? 'Start' : 'Play Again'}
          </button> ) 
          
          : null
        }

       

        {
          loading && <p>Loading Questions...</p>
        }
        
        {

          
        !loading && !gameOver && (
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
              />
          )
        }

        {
          !gameOver && !loading ?
          ( <button className='next'
              disabled={userAnswers.length !== number + 1}
              onClick={nextQuestion}>Next Question</button> )
          : null
        }
        
        

      </Wrapper>
      <p className='copyrights'>
        Background Image: <a href="http://www.freepik.com">Designed by Freepik</a>
      </p>
    </>
  );
}

export default App;
