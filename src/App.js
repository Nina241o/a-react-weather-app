import "./App.css";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Card">npm
          <SearchEngine defaultCity="Darmstadt" />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
