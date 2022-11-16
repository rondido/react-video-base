import React,{useReducer, useState} from 'react'

export default function State() {
    const initialState = {count:0, name:'jin'};
    function reducer(state, action){
        switch(action.type){
            case 'reset':
                console.log(initialState)
                return initialState;
            case 'increment':
                return {count: state.count +1, name:'eun'}
            case 'decrement':
                return {count: state.count -1, name:'park'}
            default:
                throw new Error();
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            Count(Redcuer):{state.count}
            name:{state.name}
            <button onClick={() => dispatch({type:'reset'})}>reset</button>
            <button onClick={() => dispatch({type:'increment'})}>+</button>
            <button onClick={() => dispatch({type:'decrement'})}>-</button>
        </div>
    )
}
