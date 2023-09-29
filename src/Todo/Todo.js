import React from 'react';
import style from "./Todo.module.css"

function Todo(props) {
  const {title, des} = props.user.user;
  return (
  
       <div className={style.output}>
      <h3> {title}</h3>
      <p>{des}</p>
    </div>
  
   
    
  )
}

export default Todo;