import axios from 'axios'
import React from 'react'
import useSWR,{ SWRConfig } from 'swr'

export default function Fetcher() {

  return (
    <SWRConfig
    value={{
         fetcher : (...args) => axios.get(...args).then((res)=>res),
    }}>
        <Page/>
    </SWRConfig>
  )
}

const Page = () =>{
    const {data,error} = useSWR('/api/user/123',{onErrorRetry: (error,{retrycount},revalidate) => {
        console.dir(error);
        if(error.message.includes(400)) {
            alert(400);
            return;
        }
        if(retrycount > 3){
            return;
        }
        setTimeout(()=>revalidate({retrycount}),1000);
    }})
    if(error){
        return <div>error</div>
    }
    if(!data){
        return <div>loading..</div>
    }
    return <div>{data.name}</div>
}
