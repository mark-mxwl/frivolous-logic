import { useState } from "react";
import Monotone from "./Monotone";

export default function Puzzles() {
  
  const puzzleArray = [
    {
      name: "Monotone",
      id: 1,
      desc: "Click PLAY. Set all slots to the color that appears on your first click.",
      puzzle: <Monotone />,
      icon: "monotone_icon.svg",
      author: "Mark Maxwell"
    }
  ];

  const [puzzleSelection, setPuzzleSelection] = useState(puzzleArray[0]);

  // function handlePuzzleClick(e) {
  //   const currentObj = puzzleArray.find(({ id }) => String(id) === e.target.id);
  //   setPuzzleSelection(currentObj);
  //   // console.log(e);
  // }

  return (
    <>
      <div className="page-content">
        <div className="puzzle-presentation-card">
          <h2 style={{ fontSize: '1.3em' }}>{puzzleSelection.name}</h2>
          <h3 style={{ color: 'gray' }}>[by {puzzleSelection.author}]</h3>
          <p>
            {puzzleSelection.desc}
          </p>
          <div>
            {puzzleSelection.puzzle}
          </div>
        </div>
      </div>
    </>
  );
};
