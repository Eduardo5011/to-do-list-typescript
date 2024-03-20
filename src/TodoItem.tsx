import {Todo} from './types'

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, removeTodo }: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.task}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};
export default TodoItem;
