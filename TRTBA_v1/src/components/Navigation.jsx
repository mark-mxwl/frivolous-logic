
export default function Navigation(props) {
  const { handleClick } = props;

  return (
    <header>
      <div className="header-container">
        <nav>
          <button id="puzzles" onClick={handleClick}>
            PUZZLES
          </button>
          <button id="lore" onClick={handleClick}>
            LORE
          </button>
          <button id="games" onClick={handleClick}>
            GAMES
          </button>
          <button id="connect" onClick={handleClick}>
            CONNECT
          </button>
        </nav>
      </div>
    </header>
  );
}
