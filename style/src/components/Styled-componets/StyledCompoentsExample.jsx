import React from 'react'
import styled from 'styled-components';

export default function StyledCompoentsExample() {

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color:palevioletred;
  `
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `
  const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color:${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `
  const TomatoButton = styled(Button)`
    color:tomato;
    border-color: tomato;
  `
  const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()}></Button>
  
  return(
    <>
    <Wrapper>
        <Title>Hello world!</Title>
    </Wrapper>
    <Button onClick={() => alert('normal')}>Normal</Button>
    <Button onClick={() => alert('primary')} primary>Primary</Button>
    <TomatoButton>Tomato</TomatoButton>
    <br/>
    <Button as="a" href="#">
        Link With Button styles
    </Button>
    <TomatoButton as="a" href="#">
        Link With Tomato Button styles
    </TomatoButton>
    <br/>
    <Button as={ReversedButton}>
        Custom Button with Normal Button styles
    </Button>
    </>
  );
  
}
