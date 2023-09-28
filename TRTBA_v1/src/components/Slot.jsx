

export default function Slot(props) {
    const { slotColor, isHeld, selectedColor, handleSlotClick } = props
    
    return (
        //isHeld/selectedColor currently used for prop testing only
        <div id={slotColor} className={`diamond ${isHeld ? selectedColor : slotColor}`} onClick={handleSlotClick} ></div>
    )
}
