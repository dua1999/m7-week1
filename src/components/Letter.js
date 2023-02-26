import React, {useContext, useEffect} from 'react';
import { AppContext } from '../App';

function Letter({letterPosition,attemptValue}) {
    const {grid, correctWord, currentAttempt, setDisabledLetters}= useContext(AppContext)
    const letter = grid[attemptValue][letterPosition];
    
    const correct = correctWord.toUpperCase[letterPosition] === letter
    const almost = !correct && letter !== "" && correctWord.includes(letter)
    
    const letterState = currentAttempt.attempt > attemptValue && 
    (correct ? "correct" : almost ? "almost" : "error") 
    
    useEffect(()=> {
      if (letter !== "" && !correct && !almost){
        setDisabledLetters((prev) => [...prev, letter])

      }
    }, [currentAttempt.attempt])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter