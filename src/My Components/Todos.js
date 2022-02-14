import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className ="container">
      <h1><span className="badge bg-secondary bg-rounded">Todos List </span></h1>
      {props.todos.length===0? "Sorryy!! No todos to display":
      props.todos.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      
      })
      }
      

    </div>
  )
}

export default Todos
