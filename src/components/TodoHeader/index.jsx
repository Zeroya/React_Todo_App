import React, { useRef } from 'react'
import './style.scss';


const TodoHeader = ({todos, addTodo}) => {
  const inputRef = useRef(null);


  const createTodo = (event) => {
    event.preventDefault();

    const todoObj = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      completed: false,
    };

    addTodo(todoObj);

    inputRef.current.value = "";
  }


  return (
    <div className='header-wrapper'>
      <form  onSubmit={createTodo} className='form'>
      <input ref={inputRef} type='text'/>
      <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}


export default TodoHeader;
