import React,{useEffect, useState} from 'react'

export default function withLoading(Component) {
    const withLoadingComponent = (props) =>{
        const [loading, setLoading] = useState(true);
        useEffect(() =>{
            const timer = setTimeout(() => setLoading(false), 1000);
            //클린업
            return() => clearTimeout(timer);
        },[])
        return loading ? <p>Loading...</p> : <Component {...props}/>;
    }
    return withLoadingComponent;
}
