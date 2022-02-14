import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title ,setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be Blank");
        }
        else{
            addTodo(title,desc);
            setTitle = ("");
            setdesc = ("");
        }
    }
  return (
    <div className="container my-3">
        <h1><span class="badge bg-secondary bg-rounded">Add a todo </span></h1>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label badge bg-secondary bg-opacity-75">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label badge bg-secondary bg-opacity-75">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
      
    </div>
  )
}

export default AddTodo
