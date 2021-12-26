import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Card">
          <Weather />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
