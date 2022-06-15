import { Todo } from '../interfaces/Interfaces';

interface Props {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleDoneTodo: (id: string) => void;
}

const TodoCard = ({ todo, removeTodo, toggleDoneTodo }: Props) => {
  return (
    <>
      <div className='container p-1'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-body d-flex justify-content-between align-items-center'>
                <h4
                  className={` ${
                    todo.done ? 'text-decoration-line-through' : ''
                  }`}>
                  {todo.name}
                </h4>
                <div className='d-flex justify-content-between align-items-center'>
                  <button
                    onClick={() => todo.id && toggleDoneTodo(todo.id)}
                    className={`btn ${
                      todo.done ? 'btn-outline-success' : 'btn-outline-danger'
                    }  mx-2 border-0 rounded-circle`}>
                    {todo.done ? '✓' : '✗'}
                  </button>
                  <button
                    className='btn btn-danger border-0 rounded-circle'
                    onClick={() => todo.id && removeTodo(todo.id)}>
                    🗑
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
