

export default function Navigation(props){
    const { handleClick } = props
    
    return (
        <div>
            <nav>
                <button id="puzzles" onClick={handleClick}>PUZZLES</button>
                <button id="lore" onClick={handleClick}>LORE</button>
                <button id="games" onClick={handleClick}>GAMES</button>
            </nav>
        </div>

    )
}