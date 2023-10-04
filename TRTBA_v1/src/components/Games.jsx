import { useState, useEffect } from 'react'
import GameDetail from './GameDetail'
import { gameTitles } from '../game-directory.js'

export default function Games(){
    
    const [selectedGame, setSelectedGame] = useState("")

    function handleGameClick(e) {
        setSelectedGame(e.target.id)
        console.log(e)
    }

    return (
        <>
            <GameDetail 
                id={selectedGame}
            />
            <div className="content-box-layout-3">
                {gameTitles.map(game => <h3 style={{color: `#36454F`, fontSize: `.7em`}}><a id={game.id} key={game.id} onClick={handleGameClick}>{game.name}</a></h3>)}
            </div>
        </>
    )
}
