import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props){
    super(props);
    console.log('constructor')
    this.state = {date: new Date()};
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log('componentdidmount')
    this.timerId = setInterval(() => this.tick(),10000);
  }
  componentDidUpdate(){ 
    console.log('componentdidupdate')
  }
  componentWillUnmount(){
    console.log('componentWillunMount')
    clearInterval(this.timerId);
  }

  tick(){
    console.log('tick')
    this.setState({
        date:new Date()
    })
  }
  handleClick = () => {
    alert(this.state.date);
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello ClassComponent</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
