import '../styles/NewGameButton.css'

export default function NewGameButton(props) {
    return(
        <button className="new-game" onClick={props.resetGame}>New Game</button>
    )
}