import { useState, useEffect } from "react";

export default function GameDetail(props) {
  const [gameData, setGameData] = useState();
  const [screenshots, setScreenshots] = useState();
  const { id } = props;
  const styles = { 
    color: 'gray', 
    fontSize: '.7em', 
    fontStyle: 'italic' 
  }
  const imgStyles = {
    maxWidth: '100%',
    height: 'auto'
  }

  async function getGames() {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id ? id : 2873}?key=${
          import.meta.env.VITE_RAWG_API_KEY
        }`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
        console.log('Error:', error)
    }
  }

  async function getScreenshots() {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id ? id : 2873}/screenshots?key=${
          import.meta.env.VITE_RAWG_API_KEY
        }`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch {
        console.log('Error:', error)
    }
  }

  useEffect(() => {

    getGames().then((data) => {
      setGameData(data);
    });

    getScreenshots().then((data) => {
      setScreenshots(data);
    });

  }, [id]);

  return (
    <>    
      <div className="content-container" style={{marginTop: '-70px'}}>
        <span>
        <h2 style={{ color: 'silver' }}>{gameData?.name} ({gameData?.released.slice(0, 4)})</h2>
          <p style={{ fontSize: '.8em' }}>
            <b>STUDIO:</b>{" "}
            {gameData?.developers.map((developer) => developer.name).join(", ")}
            <br />
            <b>GENRES:</b>{" "}
            {gameData?.genres.map((genre) => genre.name).join(", ")}
            <br />
            <b>RELEASED:</b>{" "}
            {gameData?.released}
            <br />
            <b>PLATFORMS:</b>{" "}
            {gameData?.platforms.map((platform) => platform.platform.name).join(", ")}
            <br />
            <b>STORES:</b>{" "}
            {gameData?.stores.map((store) => store.store.name).join(", ")}
          </p>
        </span>
        <div className="screenshot-grid">
          {
            screenshots?.results.map((shot) => {
              return (
                <img src={shot.image} 
                className="image1" style={imgStyles} 
                />
              )
            })
          }
        </div>
        <p style={{ color: 'rgba(255, 255, 255, .87)' }}>{gameData?.description_raw}</p>
        <p style={styles}>Game data sourced from {" "} 
          <a href="https://rawg.io/apidocs" target="_blank">RAWG API</a>
        </p>
      </div>
    </>
  );
}
