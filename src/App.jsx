import { useState } from 'react'
import Header from './components/Header'
import StatusSection from './components/StatusSection'
import LanguageList from './components/LanguageList'
import WordDisplay from './components/WordDisplay'
import Keyboard from './components/Keyboard'
import NewGameButton from './components/NewGameButton'
import Confetti from 'react-confetti'
import { languages } from './components/languages'
import { getRandomWord } from './components/utils'
import './App.css'

function App() {

  const [word, setWord] = useState(getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const wordArray = word.split('').map(letter => letter.toUpperCase())

  const wrongGuessCount = guessedLetters.filter(letter => !wordArray.includes(letter)).length
  
  const isGameWon = wordArray.every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount == languages.length - 1
  const isGameOver = isGameLost || isGameWon

  const resetGame = () => {
    setWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <main>
      <Header/>
      <StatusSection wrongGuessCount={wrongGuessCount} guessedLetters={guessedLetters} wordArray={wordArray} isGameOver={isGameOver} isGameLost={isGameLost} isGameWon={isGameWon}/>
      <LanguageList wrongGuessCount={wrongGuessCount}/>
      <WordDisplay wordArray={wordArray} guessedLetters={guessedLetters} isGameLost={isGameLost}/>
      <Keyboard word={wordArray} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isGameOver={isGameOver}/>
      {isGameOver && <NewGameButton resetGame={resetGame}/>}
      {isGameWon && <Confetti />}
    </main>
  )
}

export default App
