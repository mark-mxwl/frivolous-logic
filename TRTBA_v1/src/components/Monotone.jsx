import { useState, useEffect } from "react";

export default function Monotone() {
  // this arr is randomly SORTED by getRandomColors every second (via useEffect)
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

  useEffect(() => {
    if (toggle === true) {
      const interval = setInterval(() => {
        setSlotColor(getRandomColors);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [getRandomColors]);

  function handleStartClick(e) {
    setToggle(true);
    getRandomColors();
  }

  function handleSlotClick(e) {
    const currentObj = slotColor.find(({ id }) => String(id) === e.target.id);
    setSelectedColors((prev) => [...prev, currentObj]);
    console.log(currentObj);
    console.log(selectedColors);
  }

  function getRandomColors() {
    return slotColor.toSorted(() => 0.5 - Math.random());
  }

  return (
    <div className="puzzle-layout">
      <button id="start-btn" onClick={handleStartClick}>
        Start Game
      </button>
      <br />
      <div className="diamond-container">
        <div
          id={slotColor[0]?.id}
          className={`diamond ${
            selectedColors[0]?.value || slotColor[0]?.value
          }`}
          onClick={handleSlotClick}
        ></div>
        <div
          id={slotColor[1]?.id}
          className={`diamond ${
            selectedColors[1]?.value || slotColor[1]?.value
          }`}
          onClick={handleSlotClick}
        ></div>
        <div
          id={slotColor[2]?.id}
          className={`diamond ${
            selectedColors[2]?.value || slotColor[2]?.value
          }`}
          onClick={handleSlotClick}
        ></div>
        <div
          id={slotColor[3]?.id}
          className={`diamond ${
            selectedColors[3]?.value || slotColor[3]?.value
          }`}
          onClick={handleSlotClick}
        ></div>
      </div>
    </div>
  );
}
