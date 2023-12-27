import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Form from "./Form";

export default function DevConnect() {
  const styles = { textDecoration: "none", fontWeight: "bold" };
  const [overlay, setOverlay] = useState("hidden");

  return (
    <div className="page-content">
      <div className="about-overlay" style={{ visibility: `${overlay}` }}>
        <div style={{ paddingBottom: "40px" }}>
          <h1 className="x-btn" onClick={() => setOverlay("hidden")}>
            X
          </h1>
        </div>
        <div style={{ paddingTop: "80px" }}>
          <img className="img-about" src="images/Mark_about_pic_1.jpg" />
        </div>
        <h2>Mark Maxwell</h2>
        <h3 style={{ color: "#D4B16A" }}>Software Engineer</h3>
        <p>
          The twistiest paths are often the truest. I spent over a decade as a
          songwriter, music producer, and film composer before transitioning
          into the world of software development. My passion for technology and
          problem solving led me to dabble in various programming languages over
          the years, but it wasn't until I was introduced to JavaScript that my
          heart was set. More than anything, I love a good challenge, learning
          new technologies, and solving puzzles. This is where Frivolous Logic
          comes in.
        </p>
        <p>
          Puzzles have been a lifelong passion of mine, and I've always yearned
          for a way to share that passion with others. <i>Frivolous Logic</i> is
          still very much in its infancy, but I hope that one day it will serve
          as a boundless portal for puzzle exploration and education.
        </p>
        <p style={{ paddingBottom: "40px" }}>
          To learn more about what I'm up to, check out{" "}
          <a href="https://www.markmaxwelldev.com" target="_blank">
            markmaxwelldev.com
          </a>
        </p>
      </div>
      <div className="content-container">
        <p>
          <i>Frivolous Logic</i> was created by{" "}
          <a onClick={() => setOverlay("visible")}>Mark Maxwell</a>{" "}
          in JS/React. Data is consumed from{" "}
          <a href="https://rawg.io/apidocs" style={styles}>
            Rawg API
          </a>{" "}
          and{" "}
          <a href="https://github.com/lukePeavey/quotable" style={styles}>
            Quotable API
          </a>
          . Additional content is gathered from Wikipedia under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            style={styles}
          >
            CC BY-SA 4.0
          </a>
          .
        </p>
        <p>
          This project is actively in development. To contribute to{" "}
          <i>Frivolous Logic</i> or offer suggestions for future content, connect with
          Mark on{" "}
          <a href="https://github.com/mark-mxwl" style={styles}>
            GitHub
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/mark-mxwl/" style={styles}>
            LinkedIn
          </a>
          ,{" "}
          <a href="https://instagram.com/_mark_maxwell" style={styles}>
            Instagram
          </a>
          ,{" "}
          <a href="https://www.markmaxwelldev.com" style={styles}>
            markmaxwelldev.com
          </a>
          , or via the form below. Thanks for exploring!
        </p>
        <div>
          <FontAwesomeIcon
            icon={faGithub}
            className="social-icons"
            onClick={() =>
              window.open("https://github.com/mark-mxwl", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="social-icons"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mark-mxwl/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icons"
            onClick={() =>
              window.open("https://www.instagram.com/_mark_maxwell", "_blank")
            }
          />
          <img
            src="icons/M_nav_icon_color_2.svg"
            className="social-icons"
            onClick={() =>
              window.open("https://www.markmaxwelldev.com", "_blank")
            }
          />
        </div>
        <Form />
      </div>
    </div>
  );
}
