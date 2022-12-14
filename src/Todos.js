import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map((todo) => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : ( 
    <p className="center">You don't have any Todos.</p>
    )
            
    return ( 
        <div className="collection todos">
            {todoList}
        </div>
     );
}
 
export default Todos;