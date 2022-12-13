import axios from 'axios'
import React from 'react'
import useSWR,{ SWRConfig, useSWRConfig } from 'swr'

export default function Mutate() {
  return (
    <SWRConfig>
        <Page/>
        <Profile/>
    </SWRConfig>
  )
}

const fetcher = (url) => axios.get(url).then((res)=>res.data) ;

const Page = () =>{
    const {data} = useSWR("/api/user/123",fetcher);
    const{mutate}  = useSWRConfig();
    if(!data){
        return <div>loading...</div>
    }
    return (
        <div>
            <h1> My name is {data.name}</h1>
            <button onClick={async () =>{
                const newName = data.name.toUpperCase();

                mutate("/api/user/123",{...data,name:newName},false);

                mutate("api/user/123");
            }}>
                My name
            </button>
        </div>
    )
}

const Profile = () =>{
    const {data,mutate} = useSWR("/api/user/124",fetcher);
    if(!data){
        return <div>loading...</div>
    }
    return (
        <div>
            <h1> My name is {data.name}</h1>
            <button onClick={async () =>{
                const newName = data.name.toUpperCase();

                mutate({...data,name:newName},false);

                mutate();
            }}>
                My name
            </button>
        </div>
    )
}