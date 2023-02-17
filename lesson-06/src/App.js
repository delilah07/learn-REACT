import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" year="7" />
      <PetInfo animal="dog" year={4} />
    </div>
  );
}

export default App;
