import React from 'react'

export default function List() {
//     const numbers =[1,2,3,4,5];

//   return (
//     <div>
//         {numbers.map((item)=>(
//             <li key={item.toString()}>{item}</li>
//         ))}
//     </div>
//   )
    const todos=[
        {id:1, text:"파워에이드"},
        {id:2, text:"딸기우유"},
        {id:3, text:"게토레이"},
        {id:4, text:"매실"},
    ]
    const Item = (props) =>{
        return <li>{props.text}</li>
    }
    
    const todoList = todos.map((todo)=> <Item key={todo.id} {...todo}/>)
    return(
        <div>
            {todoList}
        </div>
    )
}
