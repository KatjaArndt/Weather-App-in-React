import "./app.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <div className="github-repository">
        <a
          href="https://github.com/KatjaArndt/Weather-App"
          target="_blank"
          rel="noreferrer"
          alt="Link to github repository"
          className="link-dark"
        >
          Open-Source Code
        </a>
        &nbsp;by Katja Arndt
      </div>
    </div>
  );
}
