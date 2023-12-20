import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export default function Monotone() {
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
      value: "turquoise",
      isHeld: false,
    },
  ]);

  const [toggle, setToggle] = useState(false);
  const [intervalDecrement, setIntervalDecrement] = useState();
  const [winningColor, setWinningColor] = useState([
    "red",
    "blue",
    "purple",
    "green",
  ]);
  const winningMessage = "YOU WIN!";
  const styles = { padding: "0.4em .8em", fontSize: ".9em" };

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

  function getWinningColor() {
    return winningColor.toSorted(() => 0.5 - Math.random());
  }

  function handleStartClick(e) {
    setToggle((prev) => !prev);
    setIntervalDecrement(800);
    setSlotColor((prevSlots) =>
      prevSlots.map((slot) => {
        return { ...slot, isHeld: false };
      })
    );
    getRandomColors();
    setWinningColor(getWinningColor);
  }

  function handleSlotClick(e) {
    const currentObj = slotColor.find(
      ({ id, isHeld }) => String(id) === e.target.id && isHeld === isHeld
    );
    const index = currentObj.id;

    setIntervalDecrement((prev) => (prev >= 350 ? prev - 150 : prev));
    setSlotColor((prevSlots) =>
      prevSlots.map((slot) => {
        return slot.id === index ? { ...slot, isHeld: true } : slot;
      })
    );
  }

  return (
    <div className="puzzle-container">
      <FontAwesomeIcon
        icon={toggle ? faStop : faPlay}
        id="start-btn"
        className="social-icons"
        onClick={handleStartClick}
      />
      {slotColor.every((color) => color.isHeld === true) ? (
        <div style={{ margin: "auto", padding: 0 }}>
          <h2>{winningMessage}</h2>
          <button onClick={handleStartClick} style={styles}>
            Play Again?
          </button>
        </div>
      ) : (
        <div className="diamond-container">
          {toggle === true
            ? slotColor.map((color) => {
                return (
                  <div
                    id={color.id}
                    key={color.id}
                    className={
                      color.isHeld
                        ? `diamond ${winningColor[0]}`
                        : `diamond ${color.value}`
                    }
                    style={{ cursor: "crosshair" }}
                    onClick={handleSlotClick}
                  ></div>
                );
              })
            : slotColor.map((color) => {
                return (
                  <div
                    id={color.id}
                    key={color.id}
                    className={`diamond`}
                    style={{ cursor: "crosshair" }}
                    onClick={handleSlotClick}
                  ></div>
                );
              })}
        </div>
      )}
    </div>
  );
}
