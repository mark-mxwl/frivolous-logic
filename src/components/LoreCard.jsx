
export default function LoreCard(props) {
  
  const { handleLoreClick, title, id, icon, image } = props;
  const styles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };
 
  return (
    <>
      <div className="card-container" id={id} onClick={handleLoreClick}>
        <div className="card-container-top" id={id} onClick={handleLoreClick}>
          <img src={image} style={styles} id={id} onClick={handleLoreClick} />
        </div>
        <div className="card-container-bottom" id={id} onClick={handleLoreClick}>
          <h3 id={id} onClick={handleLoreClick}>{title}</h3>
          <img src={`icons/${icon}`} className="social-icons" id={id} onClick={handleLoreClick} />
        </div>
      </div>
    </>
  );
}
