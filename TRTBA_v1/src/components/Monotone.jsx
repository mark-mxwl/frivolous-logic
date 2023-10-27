import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export default function Monotone() {
  // this arr is randomly SORTED by getRandomColors (via useEffect)
  const [slotColor, setSlotColor] = useState([
    {
      id: 1,
      value: "gold",
      isHeld: false,
    },
    {
      id: 2,
      value: "white",
      isHeld: false,
    },
    {
      id: 3,
      value: "gray",
      isHeld: false,
    },
    {
      id: 4,
      value: "pink",
      isHeld: false,
    },
    {
      id: 5,
      value: "turquoise",
      isHeld: false,
    },
  ]);

  // this arr is POPULATED by handleSlotClick
  const [selectedColors, setSelectedColors] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [intervalDecrement, setIntervalDecrement] = useState();

  useEffect(() => {
    if (toggle === true) {
      const interval = setInterval(() => {
        setSlotColor(getRandomColors);
      }, intervalDecrement);
      return () => clearInterval(interval);
    }
  }, [getRandomColors]);

  function getRandomColors() {
    return slotColor.toSorted(() => 0.5 - Math.random());
  }

  function handleStartClick(e) {
    setToggle((prev) => !prev);
    setIntervalDecrement(1000);
    getRandomColors();
  }

  function handleSlotClick(e) {
    const currentObj = slotColor.find(({ id }) => String(id) === e.target.id);
    setSelectedColors((prev) => [...prev, currentObj]);
    setIntervalDecrement((prev) => prev - 250);
    // console.log(currentObj);
    // console.log(selectedColors);
  }

  return (
    <div className="puzzle-container">
      <FontAwesomeIcon 
        icon={toggle ? faStop : faPlay}
        id="start-btn"
        className="social-icons"
        onClick={handleStartClick}
      />
      <div className="diamond-container">
        {slotColor.map((color) => {
          return (
            <div
            id={color.id}
            className={toggle ? `diamond ${color.value}` : 'diamond'}
            onClick={handleSlotClick}
            ></div>
          )
        }).slice(0, 4)}
      </div>
    </div>
  );
}
