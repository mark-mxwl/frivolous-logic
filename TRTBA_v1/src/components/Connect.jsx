import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevConnect() {
  return (
    <div className="page-content">
      <div className="content-box-layout-2">
        <div className="def-box-title">
          <h2 style={{ color: `silver` }}>For the Devs...</h2>
        </div>
        <p>
          This web app was created by Mark Maxwell in JS/React. To make
          suggestions or contribute to the repo, connect with Mark on GitHub.
        </p>
        <FontAwesomeIcon
          icon={faGithub}
          className="social-icons"
          style={{ marginLeft: 0, marginTop: 15 }}
          onClick={() => window.open("https://github.com/mark-mxwl", "_blank")}
        />
      </div>
    </div>
  );
}
