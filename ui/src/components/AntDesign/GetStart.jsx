import { DatePicker, message,Alert } from 'antd';
import React, { useState } from 'react'

export default function GetStart() {
 const [date,setDate] = useState(null);
 const handleChange = (value) =>{
    message.info(
        `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    )
    setDate(value);
 }
 return(
    <div style={{width:400, margin: "100px auto"}}>
        <DatePicker onChange={handleChange} />
        <div style={{marginTop:16}}>
           <Alert
                message="Selected Date"
                description={date ? date.foramt("YYYY-MM-DD") : "None"}
           />
        </div>        
    </div>
 )
}
