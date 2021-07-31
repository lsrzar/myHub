import React from 'react';
// Imports components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                        todo={todo} 
                        todos={todos}  
                        setTodos={setTodos} 
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 