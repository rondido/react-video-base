import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/SWR/Profile";
import TextMocking from "./TestMocking";
import Cache from "./components/SWR/Cache";
import Fetcher from "./components/SWR/Fetcher";
import Mutate from "./components/SWR/Mutate";
import Pagenation from "./components/SWR/Pagenation";

function App() {
  return (
    <div cassName="App">
      {/* <TextMocking /> */}
      {/* <Profile />
      <Cache /> */}
      {/* <Fetcher /> */}
      <Mutate />
      <Pagenation />
    </div>
  );
}

export default App;
