import React, { Component } from 'react'
import './header.css';


const Header = (props) => {
    return (
        <header>
            <div className='logo'>
                Logo
            </div>
            <input onChange={props.keywords}/>
        </header>
    )
}
export default Header;

// export default class Header extends Component {
//     state = {
//         active: null,
//         name : 'behzad',
//         title: 'programmer',
//         keyword: '',
//         count : 0,
//     }


//   inputChangeHander = (event) => {
//         console.log(event.target.value)
//         console.log('hey')
        
//         const value = event.target.value === ''? 'active': 'not-active';

//         this.setState({
//             active: value,
//             keyword : event.target.value
        
//         });
//   }
//   addOne(){
//     //   this.setState(this.state.count + 1)
//     this.setState((state, props)=> ({
//         count : state.count + 1
//     }));
//   }


//   render() {
//       console.log(this.props,'props')
//     return (
//         <header>
//             <div className={`logo ${this.state.active}`} >Logo</div>
//             <input onChange={this.props.keywords} />
//             {/* <div>{this.state.keyword}</div>
//             <div>{this.state.count}</div>
//             <button onClick={() => this.addOne()}></button> */}
//         </header>

//     )
//   }
// }
