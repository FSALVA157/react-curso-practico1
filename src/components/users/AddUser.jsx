import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import styles from "./addUser.module.css";

export const AddUser = props => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [errorState,setErrorState] = useState(true);

  const nameHandler = event => {
    setEnteredName(event.target.value);
  }

  const ageHandler = event => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    
    if((enteredName.trim().length > 0)
        && (enteredAge.trim().length > 0)
        && (+enteredAge > 0)) {
      props.addPerson({
        id: crypto.randomUUID,
        name: enteredName,
        age: enteredAge
      })
      setEnteredName('')
      setEnteredAge('')
    }else{
      setErrorState(false)
    }
  };

  const formulario =   <Card className={styles.input}>
  <form  onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input value={enteredName} id="userName" type="text" onChange={nameHandler}></input>
    <label htmlFor="age">Age(years)</label>
    <input value={enteredAge} id="age" type="number" onChange={ageHandler}></input>
    <Button type="submit">Add User</Button>
  </form>
</Card>
const errorWindow =   <ErrorModal title="An error ocurred!" message="Something went wrong :(" setOk={setErrorState}/> 

  return (
    <div>
      {      
      (!errorState)? 
        (<div>{formulario} {errorWindow}</div>)
        :formulario             
      }
    </div>
  );
};
