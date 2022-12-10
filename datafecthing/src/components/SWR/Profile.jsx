import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then((res)=>res.data);


function useUser (id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
  
    return {
      user: data,
      isLoading,
      isError: error
    }
  }

export default function Page() {
    return(<div>
        <Profile id={124}/>
        <Avatar id={124}/>
    </div>)
}


function Profile({id}) {
    const { user, error, isLoading } = useUser(id);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  return (
    //데이터 렌더링
    <div>        
        <div>hello{user.name}!</div>
        
    </div>
  )
}

export function Avatar({id}){
    const { user, error, isLoading } = useUser(id);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  return (
    //데이터 렌더링
    <div>        
        <div>hello{user.name}(Avatar)</div>
    </div>
  )
}
