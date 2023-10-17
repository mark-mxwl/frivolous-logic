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
        <div className="content-box-layout-1">
          <div className="def-box-title">
            <h2 style={{ fontSize: `1.3em`, marginRight: 5 }}>{puzzleSelection.name}</h2>
            <h3 style={{ color: "gray" }}>puzzle</h3>
          </div>
          <div className="def-box-content">
            <h3 style={{ fontSize: `.8em`, color: `#805F15` }}>[by MVMXL]</h3>
            <p style={{ fontSize: `.7em` }}>
              {puzzleSelection.desc}
            </p>
          </div>
        </div>
        <div>
          {puzzleSelection.puzzle}
        </div>
        <div className="content-box-layout-3">
          {puzzleArray.map((puzzle) => (
              <h3 style={{ color: `#36454F`, fontSize: `.7em` }}>
              <a id={puzzle.id} key={puzzle.id} onClick={handlePuzzleClick}>
                {puzzle.name}
              </a>
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}
