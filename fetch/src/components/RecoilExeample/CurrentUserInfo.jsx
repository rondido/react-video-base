import axios from 'axios';
import React from 'react'
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import ErrorBoundary from './ErrorBoundary';

// const currentUserIdState = atom({
//     key:'CurrentUserID',
//     default:2,
// })


// const tableOfUser=[{name:'park'},{name:'min'}];

// const currentUserNameState = selector({
//     key:'CurrentUserName',
//     get:({get})=>{
//         return tableOfUser[get(cureentUserIdState)].name;
//     },
// })

// const currentUserNameQuery = selector({
//     key:'CurrentUserName',
//     get: async({get})=>{
//         const response = await axios.get(
//             `/api/user-name?id=${get(currentUserIdState)}`
//         )        
//         return response.data.name;
//     }
// })


//이코드로 인해 atom이 필요없어졌다
//currentUseNameQuery에 (1)를 없애주어야함
const currentUserNameQuery = selectorFamily({
    key:'CurrentUserName',
    get: id => async()=>{
        const response = await axios.get(
            `/api/user-name?id=${id}`
        )        
        return response.data.name;
    }
})

function CurrentUser() { 
//     const userName = useRecoilValue(currentUserNameQuery(1));    
    
//   return (
//     <div>
//         {userName}
    
//     </div>
//   )
 //이코드를 사용하면 errorboundary와 suspence를 다 카바할 수 있다.
    const userName = useRecoilValueLoadable(currentUserNameQuery(1));    
    if(userName.state === 'loading'){
        return <div>loading....</div>;
    }
    if(userName.state === 'hasError'){
        return <div>Something ....</div>
    }
    return <div>{userName.contents}</div>;
}

export default function CureentUserInfo(){
    return (
    <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
            <CurrentUser/>
        </React.Suspense>
    </ErrorBoundary>
    )
}