import './App.css';
import Grid from './components/Grid';
import Kyeboard from './components/Kyeboard';
import { createContext,useEffect,useState } from 'react';
import { gridDefault, generateWords } from './components/Word';
import GameOver from './components/GameOver';


export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(gridDefault);
  const [currentAttempt, setCurrentAttempt]= useState({attempt: 0, letterPosition:0})
  const [wordSet, setWords] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setGameOver] = useState ({gameOver:false, guessedWord:false})
  const [correctWord, setCorrectWord] = useState("")
  // const correctWord= "RIGHT"

  useEffect(()=>{
    generateWords().then((word)=>{
     setWords(word.wordSet)
     setCorrectWord(word.todaysWord)
    })
  }, [])

  const onSelect = (keyValue) =>{
    if (currentAttempt.letterPosition>4) return
    const newGrid = [...grid] 
    newGrid[currentAttempt.attempt][currentAttempt.letterPosition]=keyValue
    setGrid(newGrid)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }
  const onDelete = () =>{
    if (currentAttempt.letterPosition === 0) return
        const newGrid = [...grid] 
        newGrid[currentAttempt.attempt][currentAttempt.letterPosition - 1]=""
        setGrid(newGrid)
        setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
  }
  const onEnter = () =>{
    if(currentAttempt.letterPosition !== 5) return;

    let currentWord = "";
     for (let i = 0 ; i < 5; i++){
      currentWord += grid[currentAttempt.attempt][i]
     }
     
if (wordSet.has(currentWord.toLowerCase())){
  setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition:0})
}

else {
    alert("Word not found")
    }

  if (currentWord === correctWord){
    setGameOver({gameOver: true, guessedWord: true})
    return 
  }
    
if (currentAttempt===5){
  setGameOver({gameOver:true, guessedWord:false})
}
  
  }
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{grid, setGrid, currentAttempt, setCurrentAttempt, onDelete, onEnter,onSelect, correctWord ,disabledLetters, setDisabledLetters,gameOver, setGameOver}}>
      <div className='game'>
      <Grid/>
     {gameOver.gameOver? <GameOver/>: <Kyeboard/>}
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
