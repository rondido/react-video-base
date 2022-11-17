import Event from "./components/2-7.Event/Event";
import "./App.css";
import Composition from "./components/2-4.Props/Composition";
import Extaction from "./components/2-4.Props/Extaction";
import ClassComponent from "./components/2-5.state/ClassComponent";
import FunctionalComponent from "./components/2-5.state/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import List from "./components/2-9.List/List";
import React from "react";
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UncontrolledComponent from "./components/2-10.Form/UncontrolledComponent";
import UseRef from "./components/useRef/UseRef";
import UseRefLogin from "./components/useRef/UseRefLogin";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";
import WelcomeDialog from "./components/3-5.Composition/WelcomeDialog";
import Dialog from "./components/3-6.Composition2/Dialog";
import ThankyouDialog from "./components/3-6.Composition2/ThankyouDialog";
import Input from "./components/3-7.HOC/Input";
import Button from "./components/3-7.HOC/Button";
function App() {
  return (
    <div className="App">
      {/* <Composition/>
      <FunctionalComponent/>
      <Extaction/>
      <ClassComponent/> */}
      {/* <ClassComponent2/> */}
      {/* <Event/> */}
      {/* <Condition /> */}
      {/* <List /> */}
      {/* <ControlledComponent />
      <UncontrolledComponent /> */}
      {/* <UseRef /> */}
      {/* <UseRefLogin /> */}
      {/* <Reducer />
      <State /> */}
      {/* <WelcomeDialog /> */}
      {/* <Dialog /> */}
      {/* <ThankyouDialog /> */}
      <Input />
      <br />
      <br />
      <Button />
    </div>
  );
}

export default App;
