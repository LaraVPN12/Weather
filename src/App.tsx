import "./App.css";
import "tw-elements";
import Modal from "./components/Modal";
import WeatherPanel from "./components/WeatherPanel";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <div>
      <div className="w-full h-screen m-0 flex flex-col justify-center items-center">
        <Modal/>
        <Nav/>
      </div>
    </div></>
  );
}

export default App;
