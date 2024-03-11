import React from 'react'

const style = {
li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
row:'flex',
text:'ml-2 cursor-pointer', 
button: 'cursor-pointer flex items-center'
}
const Todo = ({todo, deleteTodo}) => {
    return (
        <><li className={style.li}>
            <div className={style.row}>
                <p onClick={() => className = { todo,: .text }} {'>'} /></p>
        </div><button onClick={() => deleteTodo(todo.id)}>{FaRegTranshAlt}Delete</button></>
        </li>
    );
};

export default Todo