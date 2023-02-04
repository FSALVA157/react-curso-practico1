import { useState } from 'react';
import './App.css';
import { AddUser } from './components/users/AddUser';
import { UsersList } from './components/users/UsersList';

function App() {
  const [peopleList, setPeopleList] = useState([
    {id:1, name: "Fernando Javier", age: "50"},
    {id: 2, name: "María de los Angeles", age: "40"}
  ])

  const handleAddPerson = (newPerson) => {
    setPeopleList(prevState => {
      return   [...prevState, newPerson]
    })    
  }

  return (
    <div>      
      <AddUser addPerson={handleAddPerson}/>
      <UsersList peopleList={peopleList}></UsersList>
    </div>
    

  );
}

export default App;
