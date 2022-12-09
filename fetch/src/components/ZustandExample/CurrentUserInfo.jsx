import axios from 'axios';
import React from 'react'
import create from 'zustand';



const useStore = create((set)=>({

    userName:"park",
    fetchUserName:async(id)=>{
        const response = await axios.get(
            `/api/user-name?id=${id}`
        );        
        set({useName:response.data.name});
    }
}))
function CurrentUser() { 
    const userName = useStore(state=>state.useName);    
    
   
    return <div>{userName}</div>;
}

export default function CureentUserInfo(){
    const fetchUserName = useStore(state=>state.fetchUserName);


    return (
        <>
            <CurrentUser/>
            <input onChange={(e)=>fetchUserName(e.target.value)}/>
        </>
    )
}