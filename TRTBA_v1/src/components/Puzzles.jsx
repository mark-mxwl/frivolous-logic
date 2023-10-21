import { useState } from "react";
import Monotone from "./Monotone";

export default function Puzzles() {
  
  const puzzleArray = [
    {
      name: "Monotone",
      id: 1,
      desc: "1 a: set all rotating slots to the same color--if you can.",
      puzzle: <Monotone />
    },
    {
      name: "Puzzle 2",
      id: 2,
      desc: "puzzle 2 description",
    },
    {
      name: "Puzzle 3",
      id: 3,
      desc: "puzzle 3 description",
    },
    {
      name: "Puzzle 4",
      id: 4,
      desc: "puzzle 4 description",
    },
    {
      name: "Puzzle 5",
      id: 5,
      desc: "puzzle 5 description",
    },
    {
      name: "Puzzle 6",
      id: 6,
      desc: "puzzle 6 description",
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
        <div className="def-box-content">
          <h2 style={{ fontSize: `1.3em` }}>{puzzleSelection.name}</h2>
          <h3 style={{ fontSize: `.8em`, color: `gray`, marginTop: '0px'}}>[by MVMXL]</h3>
          <p style={{ fontSize: `.8em` }}>
            {puzzleSelection.desc}
          </p>
        </div>
          {puzzleSelection.puzzle}
          <div className="dropdown">
            <h2 style={{fontSize: '1em'}}>CHOOSE A PUZZLE</h2>
              <div className="dropdown-content">
                {puzzleArray.map((puzzle) => (
                  <h3 style={{ fontSize: `.7em` }}>
                  <a id={puzzle.id} key={puzzle.id} onClick={handlePuzzleClick}>
                    {puzzle.name}
                  </a>
                  </h3>
                ))}
              </div>
          </div>
      </div>
    </>
  );
}
