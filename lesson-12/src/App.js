import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const buttonStyle = { backgroundColor: 'lightgreen' };

function App() {
  let [count, setCount] = useState(0);
  const increamentCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increamentCount} />
      <Button onClick={increamentCount} />
      <Button onClick={increamentCount} />

      {count > 0 && (
        <div>
          {/* <button style={{ backgroundColor: 'lightgreen' }}>Reset</button> */}
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
      {/* {!!count && (
        <div>
         
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )} */}
    </div>
  );
}

export default App;
