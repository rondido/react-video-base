import React from 'react';
import {Button} from 'react-onsenui';
export default function ButtonExample() {
  const handleClick = () =>{
    alert("test");
  }
  return (
    <div>
       <Button onClick={handleClick} modifier="large--cta">
        Tap Me
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} diabled={true}>
        disabled
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="outline">
       outline
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="light">
       light
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="quiet">
       quiet
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="cta">
       cta
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="material">
       material
       </Button>
       <br/>
       <br/>
       <Button onClick={handleClick} modifier="material--flat">
       flat
       </Button>
    </div>
  )
}
