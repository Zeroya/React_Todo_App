
import { useState, useEffect } from 'react';
import './App.scss';
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>


function App() {
const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

const addTodo = (newTodo) => {
  if (!newTodo.text){
    return;
  }
  setTodos([...todos, newTodo])
};

const removeTodo = (todoId) => {
  const filteredTodos = todos.filter((item) => item.id !== todoId);
  setTodos(filteredTodos);
}

const editTodo = (updatedTodo) => {
  const newTodos = todos.map((itemTodo) => {
    if(itemTodo.id === updatedTodo) {
      return updatedTodo;
    } else {
      return itemTodo;
    }
  });
  setTodos(newTodos);
}

useEffect(() => {
  if (todos.length) return;
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
    .then((response) => response.json())
    .then((json) => {
      setTodos(json);
    });
}, [todos]);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]); 


  return (
    <div className="App">
      <div className="main-wrapper">
        <h1>Todo Input</h1>
        <div className='blockTeck' ><TodoHeader todos = {todos} addTodo={addTodo}/> </div>
      </div>
      <div className="main-wrapper">
        <h1>Todo List</h1>
        <div className='blockTeck' > <TodoList todos = {todos} removeTodo = {removeTodo} editTodo = {editTodo} /> </div>
      </div>
    </div>
  );
}

export default App;
