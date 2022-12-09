import React from 'react'
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil'
import TodoItem from './TodoItem';
import TodoListCreator from './TodoListCreator';
// import TodoLiStats from './TodoLiStats';
// import TodoListCreator from './TodoListCreator';
// import TodoListFilters from './TodoListFilters';
import { useStore } from './TodoStore'

export default function TodoList() {
    const todoList = useStore((state)=>state.filteredTodoListState());
    //체크됫는지 확인
    // useEffect(()=>{
    //     console.log(`${JSON.stringify(todoList)}`);
    // },[todoList])
  return (
    <div>
        {/* <TodoLiStats/> */}
        {/* <TodoListFilters/> */}
        <TodoListCreator />
        {todoList.map(item =>(
            <TodoItem key={item.id} item={item}/>
        ))}
    </div>
  )
}
