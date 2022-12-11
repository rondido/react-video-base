import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/SWR/Profile";
import TextMocking from "./TestMocking";
import Cache from "./components/SWR/Cache";
import Fetcher from "./components/SWR/Fetcher";

function App() {
  return (
    <div cassName="App">
      {/* <TextMocking /> */}
      {/* <Profile />
      <Cache /> */}
      <Fetcher />
    </div>
  );
}

export default App;
