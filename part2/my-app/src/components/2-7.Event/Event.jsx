import React from 'react'

export default function Event() {
    const handleButtonclick = (e) =>{
        console.dir(e);
        console.log('handleclick');
    }
    const handleMouseLeave = (e) =>{
        console.dir(e);
        console.log('handleMouseLeave');
    }
    const handleClickCapture = () =>{
        console.log("handleClickcapture");
    }
    const handleClickCapture2 = () =>{
        console.log("handleClickCapture2");
    } 
    const handleClickBubble = () =>{
        console.log('handleClickBubble');
    }
  return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
            <button onClick={handleButtonclick} onMouseLeave={handleMouseLeave}>Button</button>
        </div>
    </div>
  )
}
