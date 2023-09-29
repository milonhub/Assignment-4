import React, { useState } from 'react';
// import Todo from './Todo';
// import Todo from "./Todo/Todo"

import style from "./Todos.module.css";

function Todos(props) {

    const [user, setUser] = useState({title: '', des: ''});
    const {title, des} =user;
    

    function handleChange(event) {
      setUser((user) => {

       return {...user, [event.target.name]: event.target.value}})
    }  

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onAdduser(user);
        console.log(user);
        

        setUser({title: "", des:''})
    }

   

  return (
    
    <div style={{margin: "1rem"}}>
         <h1 style={{textAlign:"center", color:"white"}}>Collecting Data from Todo App</h1>
         <div className={style.formContainer}>
         <form onSubmit={handleSubmit}>
            <div className={style.title}>
            <label>Title:</label>
            <input type='text' id="title" name="title" value={title} onChange={handleChange}></input>
            </div>

            <div>
            <label>Desription:</label>
             <textarea name='des' id='des' value={des} onChange={handleChange}></textarea>
            </div>

            <button type='submit'>Send</button>
         </form>
  
         </div>

      </div>
  )
}

export default Todos