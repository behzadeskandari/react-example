import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
    state = {
        name : 'behzad',
        title: 'programmer',
        keyword: '',
        count : 0,
    }


  inputChangeHander = (event) => {
        console.log(event.target.value)
        console.log('hey')
        this.setState({keyword : event.target.value});
  }
  addOne(){
    //   this.setState(this.state.count + 1)
    this.setState((state, props)=> ({
        count : state.count + 1
    }));
}
  render() {
    return (
        <header>
            <div className="logo">Logo</div>
            <input onChange={this.inputChangeHander} />
            {/* <div>{this.state.keyword}</div>
            <div>{this.state.count}</div>
            <button onClick={() => this.addOne()}></button> */}
        </header>

    )
  }
}
