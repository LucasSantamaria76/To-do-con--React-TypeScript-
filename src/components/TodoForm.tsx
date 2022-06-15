import { useRef, useState } from 'react';
import { Todo } from '../interfaces/Interfaces';

type SubmitEvent = React.FormEvent<HTMLFormElement>;

interface Props {
  addNewTodo: (todo: Todo) => void;
}

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

const TodoForm = ({ addNewTodo }: Props) => {
  const [todo, setTodo] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    addNewTodo({ name: todo, done: false });
    setTodo('');
    inputRef.current!.focus();
  };

  return (
    <>
      <div className='container p-4 '>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-header'>
                <h3 className='text-center'>To-do con React-TypeScript</h3>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    onChange={(e) => setTodo(capitalize(e.target.value))}
                    className='form-control'
                    value={todo}
                    ref={inputRef}
                    required
                    autoFocus></input>
                  <button className='btn btn-success btn-block mt-2'>
                    Agregar Tarea
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
