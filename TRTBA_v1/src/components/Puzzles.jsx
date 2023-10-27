import { useState } from "react";
import Monotone from "./Monotone";

export default function Puzzles() {
  
  const puzzleArray = [
    {
      name: "Monotone",
      id: 1,
      desc: "1 a: set all rotating slots to the same color--if you can.",
      puzzle: <Monotone />,
      icon: "monotone_icon.svg",
      author: "MVMXL"
    },
    {
      name: "Mystic Square",
      id: 2,
      desc: "Coming soon!",
      author: "???"
    },
    {
      name: "2048",
      id: 3,
      desc: "Coming soon!",
      author: "???"
    }
  ];

  const [puzzleSelection, setPuzzleSelection] = useState(puzzleArray[0])

  function handlePuzzleClick(e) {
    const currentObj = puzzleArray.find(({ id }) => String(id) === e.target.id);
    setPuzzleSelection(currentObj)
    // console.log(e);
  }

  return (
    <>
      <div className="page-content">
        <div className="page-nav-horizontal">
          <button id={puzzleSelection.id} onClick={handlePuzzleClick} style={{ transform: 'scale(1)', padding: '0.3em .6em' }}>
            <img src={`./assets/puzzle_icons/${puzzleSelection.icon}`} id={puzzleSelection.id} className="social-icons" />
          </button>
        </div>
        <div className="def-box-content">
          <h2 style={{ fontSize: `1.3em` }}>{puzzleSelection.name}</h2>
          <h3 style={{ fontSize: `.8em`, color: `gray`}}>[by {puzzleSelection.author}]</h3>
          <p style={{ fontSize: `.8em` }}>
            {puzzleSelection.desc}
          </p>
        </div>
          {puzzleSelection.puzzle}
      </div>
    </>
  );
}
