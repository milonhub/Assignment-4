import {useState} from 'react';
import './App.css';
import Todo from './Todo/Todo';
import Todos from './Todo/Todos';
import style from "./App.module.css"



function App() {
const [userData, setUserData] = useState([])
  const handleUser = (user) => {
    setUserData((preuserdata) => {
      return [...preuserdata, {user}]
    });
  }
  console.log(userData)
  return (
    <div className= {style.container}>
      <Todos onAdduser = {handleUser}/>

      <div className={style.dflex}>
      {userData.map((user)=> {
        return <Todo user = {user} key= {Math.random()}/>
      })}
      </div>
     
    </div>
  );
}

export default App;
