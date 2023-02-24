import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  let [count, setCount] = useState(0);
  const increamentCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increamentCount} />
      <Button onClick={increamentCount} />
      <Button onClick={increamentCount} />
    </div>
  );
}

export default App;
