import React, { Component } from 'react';
import './header.css'
import {Link} from 'react-router-dom';
// import './public/main.js';

const url = "https://userlogin-h5v5.onrender.com/api/auth/userInfo";


class Header extends Component{

  constructor(){

    super()

    this.state={
      userData:''
    }
  }
  handleLogout = () => {
    sessionStorage.removeItem('ltk')
    sessionStorage.removeItem('userInfo')
    this.setState({userData:''})
    this.props.history.push('/')
}

  conditionalHeader = () => {
    if(this.state.userData.name){
        let data = this.state.userData;
        let outArray = [data.name,data.email,data.phone];
        sessionStorage.setItem('userInfo',outArray)
        return(
            <>
                <li><Link to="/" className="btn btn-success" id='login'>
                    <span className="glyphicon glyphicon-user " ></span> Hi {data.name}
                </Link> </li>&nbsp;
                <li><button onClick={this.handleLogout} className="btn btn-danger" id='login'>
                    <span className="glyphicon glyphicon-log-out"></span> Logout
                </button></li>
            </>
        )
       

    }else{
        return(
            <>
                <li><Link to="/login" className="btn btn-success" id='login'>
                    <span className="glyphicon glyphicon-log-in"></span> Login
                </Link></li> &nbsp;
                <li><Link to="/register" className="btn btn-danger" id='login'>
                    <span className="glyphicon glyphicon-user"></span> Register
                </Link></li>
            </>
        )
    }
    
}

  render(){
    return (
<>
<div className="wrapper">
    <nav>

      <button onClick={window['myDark']} id="darkLight" className="darkMode">Dark mode</button>

      <input type="checkbox" id="show-search"/>
      <input type="checkbox" id="show-menu"/>
      <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
      <div className="content">
        <div id="location" >
        <p id="out" className="location" ></p> 
   
        <p id="weatherOut" className="location"></p>
      </div>
      <div className="logo" id="logo"><a href="#"><img src="images/homepage/logo.png" alt=""/></a>
      </div>

        <ul className="links mobileMenu">
          <li><Link to='/' id="navLinks">Home</Link></li>
          
          <li>
            <a href="#" className="desktop-link navLinks">Watches</a>
            <input type="checkbox" id="show-features"/>
            <label htmlFor="show-features">Watches</label>
            <ul>
              <li><a href="#">Smart Watch</a></li>
              <li><a href="#">Chain Watch</a></li>
              <li><a href="#">Tommy Hilfiger</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-link navLinks">Collections</a>
            <input type="checkbox" id="show-collections"/>
            <label htmlFor="show-collections">Collections</label>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Luxury</a></li>
            </ul>
          </li>
          {this.conditionalHeader()}
          {/* <li><Link to="/login" className="navLinks">Login</Link></li> */}
          {/* <li><Link to="/register" className="navLinks">Register</Link></li> */}
          {/* <li><a href="#" className="navLinks">Cart</a></li> */}
        </ul>
      </div>
      <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
      <form action="#" className="search-box">
        <input type="search" id="Search" placeholder="Type Something to Search..." required/>
        <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>

</>
    )
  }

  componentDidMount(){
    fetch(url,{
      method:'GET',
      headers:{
        'x-access-token':sessionStorage.getItem('ltk')
      }
    })
.then((res)=>res.json())
.then(data=>{
  this.setState({
    userData:data
})
})
  }
}

export default Header;
