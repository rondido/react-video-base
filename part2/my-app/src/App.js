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
      <UseRef />
      {/* <UseRefLogin /> */}
    </div>
  );
}

export default App;
