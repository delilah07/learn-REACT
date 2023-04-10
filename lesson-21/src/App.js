import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
