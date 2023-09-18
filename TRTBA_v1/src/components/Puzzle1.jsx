import { useState, useEffect } from 'react'

export default function Puzzle1(){
    const colors = ["gold", "white", "gray", "pink", "turquoise"]
    const randomColors = colors.sort(() => .5 - Math.random()).slice(0, 4)
    const [slotColor, setSlotColor] = useState([])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSlotColor(randomColors)}, 1000)
        return () => clearInterval(interval)
    }, [randomColors])
    
    function handleSlotClick(e){
        console.log(e)
    }

    return (
        <div className="diamond-container">
            <div id={slotColor[0]} className="diamond" onClick={handleSlotClick}></div>
            <div id={slotColor[1]} className="diamond" onClick={handleSlotClick}></div>
            <div id={slotColor[2]} className="diamond" onClick={handleSlotClick}></div>
            <div id={slotColor[3]} className="diamond" onClick={handleSlotClick}></div>
        </div>
    )
}