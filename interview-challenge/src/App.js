import React, { useState } from "react";
import "./App.css";
import ContentArea from "./components/ContentArea";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [randomButtonClicked, setRandomButtonClicked] = useState(0);
  const [primaryColor, setPrimaryColor] = useState("");

  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <div className="sidebar-container">
          <SideBar
            setRandomButtonClicked={setRandomButtonClicked}
            randomButtonClicked={randomButtonClicked}
            setPrimaryColor={setPrimaryColor}
          />
        </div>
        <div className="content-area-container">
          <ContentArea randomButtonClicked={randomButtonClicked} primaryColor={primaryColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
