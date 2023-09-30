// // import UseEffect from "./UseEfect/UseEffect";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


// function App() {

//   const handleAdded= () =>{
//        toast("Added new Todo");
//   }

//   return (
//     <div>
//       <h2>Todo App</h2>
//       <button onClick={handleAdded}>Added new Todo</button>
//       <ToastContainer />
//     </div>
    
//   )
    
// }

// export default App;



import React, { useEffect, useState } from 'react';

import Users from './CustomHooks/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error

  const [users, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

// const isLoadingMessage = <p>Data is loading .....</p>
  // step2 : use useEffect for fetching the data including updating isLoading and error states

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
      
      if(!res.ok) {
        throw Error("Data is not successfuly fetched")
      } else {
        return res.json();
      }
      
    })
    .then((data) =>{
      setUser(data);
      setisLoading(false);

    })

    .catch((error) =>{
      setError(error.message)
      setisLoading(false);
    })
  })

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}

      <Users users= {users}/>
    </div>
  );
};

export default App;