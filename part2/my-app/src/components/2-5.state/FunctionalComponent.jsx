import React, { useEffect, useState } from 'react';

function FunctionalComponent(props) {
    const [date,setDate] = useState(new Date());
    const tick = () => {
        setDate(new Date());
    }
    useEffect(() =>{
        const interval = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(interval);
        }
    },[])
    return (
        <div>
            <h1>Hello, world! function</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default FunctionalComponent;