import { useState, useEffect } from 'react';

export default function Navigation(props) {
  const { handleClick, handleMobileClick, handleHamburgerClick, toggle } = props;
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const styles = dimensions.width >= 480 ? "inline-block" : "none"
  
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const showMe = { visibility: toggle ? "visible" : "hidden" };

  return (
    <header>
      <div className="header-container">
      {dimensions.width >= 925 ? (
        <>
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
            <img 
              onClick={handleClick} 
              src='icons/FL_logo_text_color.svg' 
              className="logo-icons" 
              style={{ height: '25px', marginBottom: '22px' }}
            />
            <img 
              onClick={handleClick} 
              src='icons/monotone_icon.svg' 
              className="logo-icons"
            />
          </div>
        </>
      ) : (
        <>
          <a className="hamburger-a" onClick={handleHamburgerClick}>
            |||
          </a>
          <div className="hamburger-nav-dropdown" style={showMe}>
            <a 
              id="puzzles" 
              className="hamburger-item" 
              onClick={handleMobileClick}
            >
              PUZZLES
            </a>
            <a
              id="lore"
              className="hamburger-item"
              onClick={handleMobileClick}
            >
              LORE
            </a>
            <a
              id="games"
              className="hamburger-item"
              onClick={handleMobileClick}
            >
              GAMES
            </a>
            <a 
              id="connect" 
              className="hamburger-item" 
              onClick={handleMobileClick}
            >
              CONNECT
            </a>
          </div>
          <div>
            <img 
              onClick={handleClick} 
              src='icons/FL_logo_text_color.svg' 
              className="logo-icons" 
              style={{ height: '25px', marginBottom: '22px', display: styles }}
            />
            <img 
              onClick={handleClick} 
              src='icons/monotone_icon.svg' 
              className="logo-icons"
            />
          </div>
        </>
      )}
      </div>
    </header>
  );
}
