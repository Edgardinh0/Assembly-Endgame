import '../styles/Keyboard.css'
import clsx from 'clsx'

export default function Keyboard(props) {
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')

    const updateLetters = ( letter) => {
        props.setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
    }

    return (
        <div className="keyboard">
            {alphabet.map(letter => {
                const isGuessed = props.guessedLetters.includes(letter)
                const isCorrect = isGuessed && props.word.includes(letter)
                const isWrong = isGuessed && !props.word.includes(letter)
                const className = clsx({
                    correct: isCorrect,
                    wrong: isWrong
                })
    
            return (
                <button key={letter} 
                        onClick={() =>updateLetters(letter)}
                        className={className}
                        style={{pointerEvents: props.isGameOver ? 'none' : '', opacity: props.isGameOver ? 0.5 : 1}}
                >
                    {letter}
                </button>)
                }
            )
        }
        </div>
    )
} 