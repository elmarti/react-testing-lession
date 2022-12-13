import { useEffect, useState } from "react";
import { act } from "@testing-library/react";

export function HttpView (){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function fetchData() {
          await fetch('https://jsonplaceholder.typicode.com/todos').then(async (response) => {
            await act(async () => {
                setTodos(await response.json());
            })
          });
         // now are data is in result and we can parse it as we see fit here.    
        }
        fetchData();
      });


      return <div><ul>
        {todos.map(todo => (<li className="todo-item" key={todo.id}>{todo.title}</li>))}
        </ul></div>
     
}