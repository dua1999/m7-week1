import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currentAttempt,correctWord} = useContext(AppContext)
  return (
   <div className='gameOver'>
   <h3>{gameOver.guessdWord ? "Good Job!" : "Better luck next time"}</h3>
   <h1>Word of the day is : {correctWord}</h1>
   {gameOver.guessdWord && (<h3>You passed in {currentAttempt.attempt} attempts</h3>)}
   </div>
  )
}

export default GameOver