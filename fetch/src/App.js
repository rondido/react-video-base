import logo from "./logo.svg";
import "./App.css";
import TextMocking from "./components/TextMocking";
import Counter from "./features/counter/Counter";
import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import { observableTodoStore } from "./app/ObservableTodoStore";
function App() {
  return (
    <div className="App">
      {/* <TextMocking />
      <Counter /> */}
      {/* <MobxExample /> */}
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
