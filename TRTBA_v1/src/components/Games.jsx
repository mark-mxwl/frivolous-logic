import { getGames } from '../server.js'
import { useState, useEffect } from 'react'

export default function Games(){
    const [gameData, setGameData] = useState()
    const gameTitles = ["The Witness", "The Talos Principle", "Manifold Garden", "Quern: Undying Thoughts", "Obduction", "Epitasis", "The Entropy Centre"]
    
    useEffect(() => {
        getGames().then(data => {
            setGameData(data)
        })
    }, [setTimeout, 2000])

    return (
        <>
        <div className="content-box-layout-1">
            <div className="def-box-title">
                <h2 style={{fontSize: `1.3em`, marginRight: 5}}>{gameData?.name}</h2>
                <h3 style={{color: 'gray'}}>game</h3>
            </div>
            <div className="def-box-content">
                <h3 style={{fontSize: `.8em`, color: `#805F15`}}>[gām]</h3>
                <p style={{fontSize: `.7em`}}>studio: {gameData?.developers[2].name}<br />
                genre: {gameData?.genres[2].name}<br />
                released: {gameData?.released.slice(0, 4)}<br />
                platform: {gameData?.platforms[2].platform.name}<br />
                store: {gameData?.stores[1].store.name}
                </p>
            </div>
        </div>
        <div className="content-box-layout-3">
            {gameTitles.map(game => <h3 style={{color: `#36454F`, fontSize: `.7em`}}><a>{game}</a></h3>)}
        </div>
        <div className='content-box-layout-2'>
            <h2 style={{color: 'silver'}}>{gameData?.name}</h2>
            <img src={gameData?.background_image} style={{width: 'inherit'}} />
            <p style={{color: 'gray'}}>{gameData?.description_raw}</p>
        </div>
        </>
    )
}
