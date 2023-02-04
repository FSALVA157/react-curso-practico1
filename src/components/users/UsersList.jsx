import styles from "./usersList.module.css";
import { Card } from "../UI/Card";

export const UsersList = ({ peopleList }) => {
//    const peoples = (peopleList) => {
//     return (
//      <div>{
     
//     }</div>)
//     }
  return (
    <Card className={styles.users}>
      <ul>
        {
            peopleList.map((person) => {
                return (
                 <li key={person.id}>
                   {person.name} ({person.age} years old)
                 </li>
               );
             })
        }
      </ul>
    </Card>
  );
};
