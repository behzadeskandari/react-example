
    
import React, { Component } 
from 'react'

export default class Life extends Component {
  constructor(props){
        super(props);
        
        this.state = {
            name:'',
        }
        console.log('1');
  }
  static getDerivedStateFromProps(){
    console.log('2');  
    return null;
  }
  componentDidCatch(){

  }  
  componentDidMount(){
    console.log('4');
  }
  componentDidUpdate(){
    console.log('6 ');
  }
  componentWillUnmount(){
    console.log('5');
  }
  shouldComponentUpdate(nextProps,nextState){
    if (nextState.name === 'Steve') {
        return false;
    }
    console.log(nextState);
    console.log(this.state);
    console.log('7');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,PrevState){
    console.log(prevProps);
    console.log(PrevState);
    return null;
  }

  render() {
      console.log('3');
    return (
      <>
      <div>{this.state.name}</div>
      <div>Life</div>
      </>
    )
  }
}
