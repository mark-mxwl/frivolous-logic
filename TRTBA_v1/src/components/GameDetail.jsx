import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGears } from '@fortawesome/free-solid-svg-icons'

export default function GameDetail(props) {
    const [gameData, setGameData] = useState()
    const { id } = props
    // console.log(id)

    async function getGames (){
        const response = await fetch(
            `https://api.rawg.io/api/games/${id ? id : 2873}?key=${import.meta.env.VITE_RAWG_API_KEY}`,
            // `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&search=ENTER+GAMES+HERE&page_size=10`,
    
            {
                method: 'GET'
            }
        )
        const data = await response.json()
        
        // console.log(data)
        return data
    }

    useEffect(() => {
        getGames().then(data => {
            setGameData(data)
        })
    }, [id])

    return (
        <>
            <div className="content-box-layout-1">
                <div className="def-box-title">
                    <h2 style={{fontSize: `1.3em`, marginRight: 5}}>{gameData?.name}</h2>
                    <h3 style={{color: 'gray'}}>game</h3>
                </div>
                <div className="def-box-content">
                    <h3 style={{fontSize: `.8em`, color: `#805F15`}}>[gām]</h3>
                    <p style={{fontSize: `.7em`}}><b>STUDIO:</b> {gameData?.developers.map(developer => developer.name).join(", ")}<br />
                    <b>GENRES:</b> {gameData?.genres.map(genre => genre.name).join(", ")}<br />
                    <b>RELEASED:</b> {gameData?.released.slice(0, 4)}<br />
                    <b>PLATFORMS:</b> {gameData?.platforms.map(platform => platform.platform.name).join(", ")}<br />
                    <b>STORES:</b> {gameData?.stores.map(store => store.store.name).join(", ")}
                    </p>
                </div>
            </div>
            <div className='content-box-layout-2'>
                <h2 style={{color: 'silver'}}>{gameData?.name}</h2>
                <img className="img" src={gameData?.background_image} style={{width: 'inherit'}} />
                <p style={{color: 'gray'}}>{gameData?.description_raw}</p>
            </div>   
        </>
    )
}