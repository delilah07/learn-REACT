import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({ resetTodo, deleteCompleted, completedTodosExists }) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset ToDos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Complete ToDos"
        onClick={deleteCompleted}
        disabled={!completedTodosExists}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
