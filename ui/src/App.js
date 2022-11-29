// Webpack CSS import
// import "onsenui/css/onsenui.css";
// import "onsenui/css/onsen-css-components.css";
// import OnsenUIExample from "./components/OnsenUI/OnsenUIExample";
// antd 필수 css 경로
//import "./App.css";
import "semantic-ui-css/semantic.min.css";

import AntDesignExample from "./components/AntDesign/AntDesignExample";
import ReactSemanticUIExample from "./components/ReactSemanticUI/ReactSemanticUIExample";

function App() {
  return <ReactSemanticUIExample />;
  //  <AntDesignExample />;
}

export default App;
