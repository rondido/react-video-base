import React from 'react'
import {useQueryClient,useQuery,useMutation} from 'react-query';
import GlobalLoader from './GlobalLoader';
import {getTodos, postTodo} from './my-api';
export default function QuickStared() {
    const queryClient = useQueryClient();

    const query = useQuery("todos", getTodos);

    const mutation = useMutation(postTodo, {
        onSuccess:() =>{
            queryClient.invalidateQueries("todos");
        },
    })
    if(query.isLoading){
        return "Loading ...";
    }
    if(query.error){
        return "error"
    }
  return (
    <div>
        <GlobalLoader/>
        <ul>
            {query.data.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
        <button onClick={() =>{
            mutation.mutate({
                id:Date.now(),
                title:"react-query"
            });
        }}
        >
            Add Todo
        </button>
    </div>
  )
}
