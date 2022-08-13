import Global from "./styles/global";
import { Toaster } from "react-hot-toast";
import RoutesMain from "./routes";

function App() {
  return (
    <div className="App">
      <Global />
      <Toaster />
      <RoutesMain />
    </div>
  );
}

export default App;
