import HeaderItem from "./components/header/HeaderItem";
import NewsList from "./components/main content/NewsList";
import SidePanel from "./components/side-pannel/SidePanel";
import './App.css'

function App() {

  return (
    <div>
      <HeaderItem />
      <div className="App">
        <div className="side-pannel">
          <SidePanel />
        </div>
        <div className="news"><NewsList /></div>
      </div>
    </div>
  );
}

export default App;
