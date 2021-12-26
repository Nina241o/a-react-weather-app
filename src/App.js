import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Card">
          <Weather />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
