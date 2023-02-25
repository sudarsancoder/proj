import React from 'react'

function ToDoItem(props) {
  return (
    <>
    <div key={props.Key}  >

   <li >{props.text} &nbsp;&nbsp;

   <button onClick={()=>{
        props.deleteitems(props.id);
      }} > remove</button>

   </li>
    
       
    </div>
    </>
  )
}

export default ToDoItem;