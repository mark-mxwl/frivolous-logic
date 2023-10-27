import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevConnect() {
  const styles = { textDecoration: "none", fontWeight: "bold" };

  return (
    <div className="page-content">
      <div className="content-container">
        <p>
          <i>Frivolous Logic</i> was created by developer Mark Maxwell
          using JavaScript, React, HTML, CSS, and Vite technologies. Data is
          consumed from{" "}
          <a href="https://rawg.io/apidocs" style={styles}>
            Rawg API
          </a>{" "}
          and{" "}
          <a href="https://github.com/lukePeavey/quotable" style={styles}>
            Quotable API
          </a>
          .
        </p>
        <p>
          To contribute to <i>Frivolous Logic</i>, connect with Mark on{" "}
          <a href="https://github.com/mark-mxwl" style={styles}>
            GitHub
          </a>
          .
          <div style={{ position: "fixed", marginTop: "1rem" }}>
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icons"
              onClick={() =>
                window.open("https://github.com/mark-mxwl", "_blank")
              }
            />
          </div>
        </p>
      </div>
    </div>
  );
}
