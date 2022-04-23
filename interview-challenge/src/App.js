import "./App.css";
import ContentArea from "./components/ContentArea";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content-area-container">
          <ContentArea />
        </div>
      </div>
    </div>
  );
}

export default App;
