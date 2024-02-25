import React, { Component } from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import Search from './component/Home/Search';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid back-img">
       <header className="hstack gap-3">
        <div id='brand'>Zomato App</div>
        <div className="p-2 mt-3 ms-auto">
          <Link className="btn btn-info" to="/">Home</Link>
        </div>
        
       
        <div className="p-2 mt-3 ms-auto">
            <a href="#" className="Login">Login</a>
         </div>
         <div class="p-2 mt-3">
            <a href="#" className="creatacc">Create an account</a>
        </div> 
      </header>

     <Search />
      
      </div>

      
    )
  }
}
