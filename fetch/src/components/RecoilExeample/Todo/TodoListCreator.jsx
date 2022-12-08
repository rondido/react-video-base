import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from './TodoStore';

export default function TodoListCreator() {
    const [inputValue,setInputValue] = useState("");
    const setTodoList= useRecoilState(todoListState);

    const addItem = () =>{
        setTodoList((oldTodoList)=>[
            ...oldTodoList,
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
        <input type="text" value={inputValue} onChang={onChange}/>
        <button onClick={addItem}></button>
    </div>
  )
  // 고유 id 생성 유틸리티
  let id =0;
  function getId(){
    return id++;
  }
}


