import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {/* {todos.length ? (
        todos.map((todo, index) => <Todo key={index + 1} todo={todo} />)
      ) : (
        <h2>ToDo List is Empty</h2>
      )} */}
      {!todos.length && <h2>ToDo List is Empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
