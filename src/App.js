import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
