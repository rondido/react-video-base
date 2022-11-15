import Event from './2-7.Event/Event';
import './App.css';
import Composition from './components/2-4.Props/Composition';
import Extaction from './components/2-4.Props/Extaction';
import ClassComponent from './components/2-5.state/ClassComponent';
import FunctionalComponent from './components/2-5.state/FunctionalComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
function App() {
  return (
    <div className="App">
      {/* <Composition/>
      <FunctionalComponent/>
      <Extaction/>
      <ClassComponent/> */}
      {/* <ClassComponent2/> */}
      <Event/>
    </div>
  );
}

export default App;
