
import './App.css';
import { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import axios from 'axios';
import UserList from './Components/UserList';


function App() {
  const [list, setList] = useState ([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
      setList(result.data);
    });
  }, []); //[] only fires one time when the compent loads

  
  return (
    <div className='app'>
   {list ? <UserList list={list}/>: <Loading/>}
    </div>
  );
}

export default App;
