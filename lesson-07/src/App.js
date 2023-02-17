import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" year="7" hasPet={true} />
      <PetInfo hasPet={false} />
      <PetInfo animal="dog" year={4} hasPet />
    </div>
  );
}

export default App;
