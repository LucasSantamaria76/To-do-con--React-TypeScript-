import { Todo } from '../interfaces/Interfaces';
import TodoCard from './TodoCard';

interface Props {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleDoneTodo: (id: string) => void;
}

const TodoList = ({ todos, removeTodo, toggleDoneTodo }: Props) => {
  return (
    <>
      {todos.length &&
        todos.map((todo) => {
          return (
            <TodoCard
              todo={todo}
              removeTodo={removeTodo}
              toggleDoneTodo={toggleDoneTodo}
              key={todo.id}
            />
          );
        })}
    </>
  );
};

export default TodoList;
