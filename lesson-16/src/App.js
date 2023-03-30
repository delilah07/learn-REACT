import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Inside of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another Text Inside of the Wrapper</h2>
        <p>Text</p>
        <input type="number" placeholder="Number" />
      </Wrapper>
    </div>
  );
}

export default App;
