import React, { useEffect, useState } from 'react';
import 'bootswatch/dist/morph/bootstrap.min.css';
import { Todo } from './interfaces/Interfaces';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    storedTodos && setTodos(JSON.parse(storedTodos));
  }, []);

  const toggleDoneTodo = (id: string): void => {
    const newTodos = todos.map((todo) => {
      todo.id === id && (todo.done = !todo.done);
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const removeTodo = (id: String): void => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addNewTodo = (todo: Todo): void => {
    const newTodos = [{ ...todo, id: uuidv4() }, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleDoneTodo={toggleDoneTodo}
      />
    </>
  );
}

export default App;
