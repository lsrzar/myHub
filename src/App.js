import React, { useState, useEffect } from 'react';
import './App.css';
// Imports components
import Form from './components/Form';
import TodoList from './components/Todolist';

function App() {
  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // RUN ONCE
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    }
    getLocalTodos();
  }, []);
  //Use Effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    saveLocalTodos();
  }, [todos, status]);
  //Functions & Events
  
  //Save to local
 

  return (
    <div className='App'>
      <header>
      <h1>myHub</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        status={status}
        setStatus={setStatus} 
      />
      <TodoList 
        filteredTodos={filteredTodos} 
        todos={todos} 
        setTodos={setTodos} 
      />
    </div>
  );
};

export default App;
