import "./App.css";
import LineChart from "./components/Chart";
import Buttons from "./components/Buttons";
import Info from "./components/Info";

function App() {

  return (
    <div className="App">
      <Buttons/>
      <LineChart />
      <Info/>
    </div>
  );
}

export default App;
