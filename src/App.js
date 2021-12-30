import "./App.css";
import Background from "./img/noon.jpg";

import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="Card"
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
          }}
        >
          <SearchEngine defaultCity="Darmstadt" />
          <br />
        </div>
        <div className="Footer">
          <a
            href="https://github.com/Nina241o/a-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source code on Github
          </a>{" "}
          by Florina Seipp, hosted on{" "}
          <a
            href="https://thirsty-hodgkin-5fcfe2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </div>
      </div>
    </div>
  );
}
