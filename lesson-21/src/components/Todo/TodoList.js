import Todo from './Todo';

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index + 1} todo={todo} />);
}

export default TodoList;
