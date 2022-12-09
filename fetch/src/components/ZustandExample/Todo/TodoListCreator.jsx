import React from 'react'
import { useState } from 'react'
import { useStore } from './TodoStore';

export default function TodoListCreator() {
    const [inputValue,setInputValue] = useState("");
    const [todoList,setTodoList]= useStore(state=> [
      state.todoListState,
      state.setTodoListState,
    ]);

    const addItem = () =>{
        setTodoList([
            ...todoList,
            {
                id:getId(),
                text:inputValue,
                isComplaete:false,
            },
        ])
        setInputValue("");
    }
    const onChange = ({target:{value}}) =>{
        setInputValue(value);
    }
    
  return (
    <div>
        <input type="text" value={inputValue} onChange={onChange}/>
        <button onClick={addItem}>Add</button>
    </div>
  )
  // 고유 id 생성 유틸리티
  function getId(){
    let id =0;
    return id++;
  }
}


