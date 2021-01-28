import { MouseEvent } from 'react';
import './App.css';

import QuestionCard from './components/question-card.component'

const  App = () => {

  const startTrivia = async () => {
    // https://opentdb.com/api.php?amount=10&type=multiple
  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>

      <p className="score">Score:</p>

      <p>Loading Questions...</p>

      <QuestionCard />

      <button className='next' onClick={nextQuestion}>Next Question</button>

    </div>

  );
}

export default App;
