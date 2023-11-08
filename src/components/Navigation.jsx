import { useState, useEffect } from 'react';

export default function Navigation(props) {
  const { handleClick } = props;
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const styles = dimensions.width >= 925 ? "inline-block" : "none";
  
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  }, [])

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
        <div>
          <img src='icons/FL_logo_text_color.svg' className="logo-icons" style={{ marginRight: '-50px', display: styles }}/>
          <img src='icons/monotone_icon.svg' className="logo-icons" style={{ transform: 'scale(1)', display: styles }}/>
        </div>
      </div>
    </header>
  );
}
