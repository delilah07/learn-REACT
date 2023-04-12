import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import TodosActions from './components/Todo/TodosActions';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodos(todos.filter((el) => el.id !== id));
  }
  function toggleTodoHandler(id) {
    setTodos(
      todos.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : { ...el }
      )
    );
  }
  function resetTodoHandler() {
    setTodos([]);
  }
  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((el) => !el.isCompleted));
  }

  let completedTodosCount = todos.filter((el) => el.isCompleted).length;

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExists={!!completedTodosCount}
          resetTodo={resetTodoHandler}
          deleteCompleted={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <p>You have completed {completedTodosCount} Todos</p>
      )}
    </div>
  );
}

export default App;
