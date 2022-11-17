import React, { useEffect, useState } from 'react'
import Comments from './Comments';

const commentList =[
    {title:"commnet1", content:"message1", likes:1},
    {title:"commnet2", content:"message2", likes:2},
    {title:"commnet3", content:"message3", likes:3},
]

export default function Memo() {
    const [comments, setComments] = useState(commentList);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setComments((prevComments) => [
                ...prevComments,
                {
                    title:`commnet${prevComments.length +1}`, content:`message${prevComments.length + 1}`, likes:1
                },
            ]);
        },1000);
        
        //클린업
        return () =>{
            clearInterval(timer);
        }
    },[]);

  return (
    <Comments commentList={comments}/>
  )
}
