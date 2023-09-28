import { useState, useEffect } from 'react'
import Slot from './Slot'

export default function Puzzle1(){
    // this arr is randomly SORTED by getRandomColors every second (via useEffects)
    const colors = [
        {
            value: "gold",
            isHeld: false
        }, 
        {
            value: "white",
            isHeld: false
        }, 
        {
            value: "gray",
            isHeld: false
        }, 
        {
            value: "pink",
            isHeld: false
        }, 
        {
            value: "turquoise",
            isHeld: false
        }
    ]
    //this arr is POPULATED with getRandomColors via useEffect
    const [slotColor, setSlotColor] = useState([])

    //this arr is POPULATED by handleSlotClick and has a max length of 4 items (to determine winner)
    const [selectedColors, setSelectedColors] = useState([])
    
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
        // randomly sorts colors arr, then returns a sliced arr with 4 values [0, 1, 2, 3]
        //          0
        //      2       1
        //          3
       return colors.toSorted(() => .5 - Math.random()).slice(0, 4)
    }
    
    function handleSlotClick(e){
        // setSelectedColors(prev => [...prev, {value: `${e.target.id}`, isHeld: true}].slice(0, 4))

        //need to set e.target.id isHeld to true on click
        setSelectedColors(slotColor)
        console.log(e.target.id)
        console.log(slotColor)
    }

    return (
        <div className='puzzle-layout'>
            <button id="start-btn" onClick={handleStartClick}>Start Game</button><br />
            <div className="diamond-container">
                {/* arr indexes in Slots for isHeld/selectedColor need correct assignment to selected slot */}
                <Slot 
                    slotColor={slotColor[0]?.value}
                    isHeld={selectedColors[0]?.isHeld}
                    selectedColor={selectedColors[0]?.value} 
                    handleSlotClick={handleSlotClick}
                />
                <Slot 
                    slotColor={slotColor[1]?.value}
                    isHeld={selectedColors[1]?.isHeld} 
                    selectedColor={selectedColors[1]?.value} 
                    handleSlotClick={handleSlotClick}
                />
                <Slot 
                    slotColor={slotColor[2]?.value}
                    isHeld={selectedColors[2]?.isHeld} 
                    selectedColor={selectedColors[2]?.value} 
                    handleSlotClick={handleSlotClick}
                />
                <Slot 
                    slotColor={slotColor[3]?.value}
                    isHeld={selectedColors[3]?.isHeld}
                    selectedColor={selectedColors[3]?.value} 
                    handleSlotClick={handleSlotClick} 
                />
            </div>
        </div>
    )
}