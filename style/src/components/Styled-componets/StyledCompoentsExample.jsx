import React, { useState } from 'react'
import styled, { keyframes,ThemeProvider,createGlobalStyle } from 'styled-components';



  const Input = styled.input.attrs((props) => ({
    type:"text",
    size:props.size || "1em",
  }))`
    border: 2px solid palevioletred;
    margin: ${(props)=>props.size};
    padding: ${(props)=>props.size};
  `
  const PasswordInput = styled(Input).attrs({
    type:"password",
  })`
    border:2px solid aqua;
  `;

  const rotate = keyframes`
    from {
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
  `
  const Rotate = styled.div`
    display:inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size:1.2rem;
  `
  const Button = styled.button`
    font-size:1em;
    margin: 1em;
    padding:0.25em 1em;
    border-radius: 3px;

    color:${props=> props.theme.color};
    border: 2px solid ${props => props.theme.borderColor};
  `
  Button.defaultProps ={
    theme:{
        color:"palevioletred",
        borderColor:"blue"
    }
  }
  const defaultTheme= {
    color:"mediumseagreen",
    borderColor:"pink"
    
  }
 
  const redTheme = {
    color:"red",
    borderColor:"pink"
    
  } 
  const GloBalStyle = createGlobalStyle`
    button {
        background-color: pink;
    }
  `
export default function StyledCompoentsExample() {    
    const [theme, setTheme] = useState(defaultTheme);
  return(
 
    <>
     <Input placeholder='A bigger text input' size="2em"/>
     <br/>
    <PasswordInput placeholder='A bigger password input' size="2em"/>
    <br/>
     <Rotate>💻</Rotate>
    <br/>
    <div>
        <GloBalStyle/>
        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>
        <Button>Normal</Button>
        <ThemeProvider theme={theme}>
            <Button>Themed</Button>
        </ThemeProvider>
    </div>
    <div>
        <button>Other</button>
    </div>
    </>
  );
  
}
