import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter New ToDo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default TodoForm;
