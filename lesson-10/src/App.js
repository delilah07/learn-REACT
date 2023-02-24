import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const btnTexts = ['click me', 'Click me please', 'Press me', 'Click me again'];

function App() {
  let [count, setCount] = useState(0);
  const increamentCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter count={count} />
      {btnTexts.map((btnText, i) => {
        return <Button onClick={increamentCount} text={btnText} key={i} />;
      })}
    </div>
  );
}

export default App;
