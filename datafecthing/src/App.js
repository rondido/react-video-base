import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/SWR/Profile";
import TextMocking from "./TestMocking";
import Cache from "./components/SWR/Cache";
import Fetcher from "./components/SWR/Fetcher";
import Mutate from "./components/SWR/Mutate";
import Pagenation from "./components/SWR/Pagenation";
import Example from "./components/ReactQuery/Example";
import { QueryClientProvider, QueryClient } from "react-query";
import QuickStared from "./components/ReactQuery/QuickStared";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <div cassName="App">
      {/* <TextMocking /> */}
      {/* <Profile />
      <Cache /> */}
      {/* <Fetcher /> */}
      {/* <Mutate />
      <Pagenation /> */}
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStared />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
