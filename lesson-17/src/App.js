import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []); // only one time
  /*useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, [todo]);*/ // a lot of times
  console.log('app render');
  console.log(todo);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
