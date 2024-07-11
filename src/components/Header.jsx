function Scores({score}){

    return (
        <div className="scores">
            <div className="presentScore">{score}</div>
            <div className="bestScore"></div>
        </div>
    )

}

export default function Header({score}){
    return (
        <div className="header">
            <div>Memory Game</div>
            <Scores score={score}/>
        </div>
    )
}