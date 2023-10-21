import { useState, useEffect } from "react";

export default function GameDetail(props) {
  const [gameData, setGameData] = useState();
  const { id } = props;

  async function getGames() {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id ? id : 2873}?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`,
      // `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&search=ENTER+GAMES+HERE&page_size=10`,

      {
        method: "GET",
      }
    );
    const data = await response.json();

    // console.log(data)
    return data;
  }

  useEffect(() => {
    getGames().then((data) => {
      setGameData(data);
    });
  }, [id]);

  return (
    <>    
      <div className="content-box-layout-2">
        <span>
        <h2 style={{ color: "silver" }}>{gameData?.name} ({gameData?.released.slice(0, 4)})</h2>
          <p style={{ fontSize: `.7em` }}>
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
        <img src={gameData?.background_image} />
        <p style={{ color: "gray" }}>{gameData?.description_raw}</p>
      </div>
    </>
  );
}
