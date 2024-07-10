function Scores(){

    return (
        <div className="scores">
            <div className="presentScore"></div>
            <div className="bestScore"></div>
        </div>
    )

}

export default function Header(){
    return (
        <div className="header">
            <div>Memory Game</div>
            <Scores/>
        </div>
    )
}