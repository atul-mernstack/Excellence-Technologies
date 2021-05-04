import React, {useState} from 'react';
const Todo=()=>{
    const [todo, setTodo]=useState("");
  const [todoItems,setTodoItems]=useState([]);

  const todoHandler=(e)=>{
    setTodo(e.target.value);
  }

  const saveTodo=()=>{
    setTodoItems([...todoItems,todo]);
    setTodo("");
  }

  return (
    <div >
        <form className="form-inline mt-3" style={{justifyContent:"center"}}>
        <input type="text" className="form-control mr-2" style={{width:"350px"}} onChange={todoHandler} value={todo} placeholder="Input todo item"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={saveTodo}>Save Todo</button>
        </form>
        
        <table style={{marginLeft:"auto", marginRight:"auto", width:"470px", marginTop:"5px"}} className="table table-striped">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Todo-Items</th>
            </tr>
          </thead>
          <tbody>
            {todoItems.map((value,index)=>{
              return(
              <tr key={index} style={{textAlign:"left"}}>
              <td>{index+1}</td>
              <td>{value}</td>
            </tr>
              )
            })}            
          </tbody>
        </table>
    </div>
  );
}

export default Todo;