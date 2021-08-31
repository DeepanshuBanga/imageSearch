import logo from "./logo.svg";
import "./App.css";
import InputBar from "./components/InputBar";
import Button from "@restart/ui/esm/Button";
import { Provider } from "react-redux";
import store from "./redux/store";
import ImageElements from "./components/ImageElements";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputBar />
        <ImageElements />
      </div>
    </Provider>
  );
}

export default App;
