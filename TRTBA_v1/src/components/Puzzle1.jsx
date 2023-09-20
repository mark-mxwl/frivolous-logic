import { useState, useEffect } from 'react'

export default function Puzzle1(){
    const colors = ["gold", "white", "gray", "pink", "turquoise"]
    const [slotColor, setSlotColor] = useState([])
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        if(toggle === true){
        const interval = setInterval(() => {
            setSlotColor(getRandomColors)}, 1000)
        return () => clearInterval(interval)
        }
    }, [getRandomColors])

    function handleStartClick(e){
        setToggle(true)
        getRandomColors()
    }
    function getRandomColors() {
        return colors.sort(() => .5 - Math.random()).slice(0, 4)
    }

    function handleSlotClick(e){
        console.log(e)
    }

    return (
        <div className='puzzle-layout'>
            <button id="start-btn" onClick={handleStartClick}>Start Game</button><br />
            <div className="diamond-container">
                <div id={slotColor[0]} className="diamond" onClick={handleSlotClick}></div>
                <div id={slotColor[1]} className="diamond" onClick={handleSlotClick}></div>
                <div id={slotColor[2]} className="diamond" onClick={handleSlotClick}></div>
                <div id={slotColor[3]} className="diamond" onClick={handleSlotClick}></div>
            </div>
        </div>
    )
}