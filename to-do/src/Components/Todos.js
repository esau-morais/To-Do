import React from "react";

const Todos = ({ todos, deleteTodos }) => {



  const todoList = todos.length ? (
    todos.map((todo, index) => {
      return (
        <div className="collection-item" key={index}>

          {todo}{" "}
          <button className="btn-delete" onClick={() => {
              deleteTodos(index);
            }}  > 
            <i class="fas fa-trash-alt fa-lg"></i>
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!!.. You can add new one.....  <i class="fas fa-pen"></i></p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
