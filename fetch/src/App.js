import logo from "./logo.svg";
import "./App.css";
import Text from "./components/ZustandExample/Text";
import CharacterCounter from "./components/ZustandExample/CharacterCounter";
import TodoList from "./components/ZustandExample/Todo/TodoList";
import CureentUserInfo from "./components/ZustandExample/CurrentUserInfo";
import Scratches from "./components/ZustandExample/Scratches";
import Profile from "./components/SWR/Profile";
// import TextMocking from "./components/TextMocking";
// import Counter from "./features/counter/Counter";
// import MobxExample from "./components/MobxExample";
// import TodoList from "./components/TodoList";
// import { observableTodoStore } from "./app/ObservableTodoStore";
// import { RecoilRoot } from "recoil";
// import FontButton from "./components/RecoilExeample/FontButton";
// import Text from "./components/RecoilExeample/Text";
// import CharacterCounter from "./components/RecoilExeample/CharacterCounter";
// import CurrentUserInfo from "./components/RecoilExeample/CurrentUserInfo";
// import TodoList from "./components/RecoilExeample/Todo/TodoList";
function App() {
  return (
    <div className="App">
      {/* <TextMocking />
      <Counter /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <RecoilRoot> */}
      {/* <FontButton />
        <Text />
        <CharacterCounter />
        <CurrentUserInfo /> */}
      {/* <TodoList /> */}
      {/* </RecoilRoot> */}
      {/* <Text /> */}
      {/* <CharacterCounter /> */}
      {/* <TodoList /> */}
      {/* <CureentUserInfo /> */}
      {/* <Scratches /> */}
      <Profile />
    </div>
  );
}

export default App;
