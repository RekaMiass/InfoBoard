import NewsList from "./components/NewsList";
import SidePanel from "./components/side-pannel/SidePanel";
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="side-pannel">
        <SidePanel />
      </div>
      <div className="news"><NewsList /></div>
    </div>
  );
}

export default App;
