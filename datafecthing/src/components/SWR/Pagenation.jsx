import axios from 'axios';
import React from 'react'
import useSWRInfinite from 'swr';

const fetcher = (url) => axios.get(url).then((res)=>res.data) ;

const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // 끝에 도달
    return `/api/users?page=${pageIndex}&limit=5`                    // SWR 키 
  }


export default function Pagenation(){            
        const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
        if (!data) return 'loading'
      
        // 이제 모든 users의 수를 계산할 수 있습니다
        let totalUsers = 0
        for (let i = 0; i < data.length; i++) {
          totalUsers += data[i].length
        }
      
        return (
        <div>
          <p>{totalUsers} users listed</p>
          {data.map((users, index) => {
            // `data`는 각 페이지의 API 응답 배열입니다.
            return users.map(user => <div key={user.id}>{user.name}</div>)
          })}
          <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    )
}