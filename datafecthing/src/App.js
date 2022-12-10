import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/SWR/Profile";
import TextMocking from "./TestMocking";
import Cache from "./components/SWR/Cache";

function App() {
  return (
    <div cassName="App">
      {/* <TextMocking /> */}
      <Profile />
      <Cache />
    </div>
  );
}

export default App;
