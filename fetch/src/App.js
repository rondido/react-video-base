import logo from "./logo.svg";
import "./App.css";
import TextMocking from "./components/TextMocking";
import Counter from "./features/counter/counter";
function App() {
  return (
    <div className="App">
      <TextMocking />
      <Counter />
    </div>
  );
}

export default App;
