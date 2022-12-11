import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then((res)=>res.data);


export default function Profile() {
    const { data, error, isLoading } = useSWR('/api/user/123', fetcher)
    console.log(data)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  return (
    //데이터 렌더링
    <div>        
        <div>hello{data.name}!</div>
    </div>
  )
}



