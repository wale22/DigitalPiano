import Piano  from "./components/Piano";
import './App.css'

function App() {
  return (
    <div className="PianoCont">
      <div className="PianoContTexts">
        <h1>Digital Piano</h1>
        <p>The texts at the top is the key note , while the ones in the bottom are the keys to be pressed.</p>
      </div>
      <Piano/>
    </div>
  );
}

export default App;
