import { useState } from "react";
import GameDetail from "./GameDetail";
import { gameTitles } from "../directories/game-directory.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState("");

  function handleGameClick(e) {
    setSelectedGame(e.target.id);
    // console.log(e);
  }

  return (
    <>
      <div className="page-content">
        <div className="dropdown">
          <h2 style={{fontSize: '.85em'}}>
            <span className="social-icons" style={{color: "gray", margin: '.7em' }}><FontAwesomeIcon icon={faBars} />
            </span>EXPLORE PUZZLE-BASED VIDEO GAMES</h2>
          <div className="dropdown-content">
            {gameTitles.map((game) => (
              <h3 style={{ fontSize: `.7em` }}>
                <a id={game.id} key={game.id} onClick={handleGameClick}>
                  {game.name}
                </a>
              </h3>
            ))}
          </div>
        </div>
        <br />
        <GameDetail id={selectedGame} />
      </div>
    </>
  );
}