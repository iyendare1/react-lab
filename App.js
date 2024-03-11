import react, {useState, useEffect } from "react";
import  "./App.css";
import todos from '../todos.json/data'
import {db} from '../firebase'
import {query, collection, onSnapshot} from 'firebase/database'

const style = {
  bg:'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]',
  container: 'bg-slate-100 max-width-[500px] w-full m-auto rounded-md shadow-xl',
  heading: 'text-3xl font-bold text-center text-gray-800 p-2',
  form: 'flex justify-between',
  input: 'border p-2 w-full text-xl h-full',
  
}

function App() {}
  const [todos, setTodos] = useState(['Learn React'])

  //Create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
  }
  //Read todo from frirebase
  useEffect (()=>{
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) = {
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
    })
  })
  return () => unsubscribe()
},[])

  //Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(db, 'todos', id)
  }
return (
  <><div className={style.bg}>
    <div className={style.container}>
      <h1 className={style.heading}>2 Do List</h1><p>manage all your to-dos in one place.</p><span>sdfsdf</span>
    </div>

    <div>
      <a>Try out the demo</a>
      <a>Create A Free Account</a>
    </div>
    <p>No Credit Card Required</p><form className={style.form}>
      <input className="{style.input} type=" text />
      <button class="delete">Delete</button>
    <form onSubmit={createTodo} className={style.form}>
      <input className={style.input} type='text'></input>
      </form>

    <ul>
      {todos.map((todo, index) => (
        <Todo 
        key={index} 
        todo={todo}
        deleteTodo={deleteTodo}
         />
      ))}
    </ul></>
      
      </div>
  );
{"}"}
  </div>

      
export default App;