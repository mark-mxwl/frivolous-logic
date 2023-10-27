import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
  const { handleClick } = props;
  const [soundFXToggle, setSoundFXToggle] = useState(true);
  const styles = soundFXToggle ? "silver" : "gray";

  return (
    <footer>
      <div className="footer-container">
        <h3 style={{ fontSize: `.8em` }}>
          SOUND FX{" "}
          <a onClick={() => setSoundFXToggle((prev) => !prev)} 
          style={{ color: styles, textDecoration: 'underline' }}>
            {soundFXToggle ? "ON" : "OFF"}
          </a>
        </h3>
        <a id="puzzle-piece" onClick={handleClick}>
          <FontAwesomeIcon icon={faPuzzlePiece} className="social-icons" />
        </a>
        <h3 style={{ fontSize: `.8em` }}>(c)2023 MVMXL</h3>
      </div>
    </footer>
  );
}
