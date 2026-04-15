import '../styles/StatusSection.css'
import clsx from 'clsx'
import { getFarewellText } from './utils'
import { languages } from './languages'

export default function StatusSection(props) {
    const isLastGuessedFalse = !props.wordArray.includes(props.guessedLetters[props.guessedLetters.length - 1])
    
    const className = clsx("status", props.isGameWon && 'won', props.isGameLost && 'lost', isLastGuessedFalse && props.wrongGuessCount > 0 && !props.isGameOver && 'farewell')

    return (
        <div className={className}>
            {props.isGameWon && <><h2>Game Won!!!</h2>
            <span>You have saved the programming world</span></>}
            {props.isGameLost && <><h2>Game Lost</h2>
            <span>Better start learning Assembly</span></>}
            {!props.isGameOver && isLastGuessedFalse && (props.wrongGuessCount > 0) && <span>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</span>}
        </div>
    )
}