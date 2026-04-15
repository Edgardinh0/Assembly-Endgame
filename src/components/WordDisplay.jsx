import '../styles/WordDisplay.css'
import clsx from 'clsx'

export default function WordDisplay(props) {
    
    return(
        <div className="word">
            {props.wordArray.map((letter, index) => {
                const shouldReveal = props.isGameLost || props.guessedLetters.includes(letter)
                const letterClassName = clsx(
                    'letter', props.isGameLost && !props.guessedLetters.includes(letter) && 'missed'
                )
                return (
                    <span className={letterClassName} key={index}>{shouldReveal ? letter : ''}</span>
                    )   
                }
            )
        }
        </div>
    )
}