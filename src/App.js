import "./App.css";
import Background from "./img/night.jpg";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="Card"
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover",
            height: "100%",
            color: "#f5f5f5",
          }}
        >
          <SearchEngine defaultCity="Darmstadt" />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
