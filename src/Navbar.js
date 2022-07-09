import React from 'react';
import "./App.css"
import {Link} from 'react-router-dom';

function Navbar() {
    var navLinks = document.getElementById("navLinks");

    function showMenu() {
      navLinks.style.right = "0";
    }
  
    function hideMenu() {
      navLinks.style.right = "-200px";
    }

    return (
        <section className='nav-bar'>
            <nav>
                <a href="/">
                    <img src={require('./logo/logo2.png')} alt=""/>
                </a>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onclick={hideMenu}></i>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/posts">POSTS</a></li>
                        <li><a href="/contact">CONTACT US</a></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onclick={showMenu}></i>
            </nav>
        </section>
    )

}

export default Navbar