import React, { useState } from 'react';
import './Todos';
import AddTodo from './AddTodo';
import Todos from './Todos';
import Heading from './Heading';
function App() {
   
  

  const [todos, setTodos] = useState([]);
  const deleteTodos = (id) => {
    console.log(id);
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItems, index )=> {
        return index !== id;
      });
    });
   
  }

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  return (
    <div className="todo-app container">
      <Heading />
      <Todos todos={todos} deleteTodos={deleteTodos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );


}

export default App;
