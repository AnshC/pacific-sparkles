import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){

    useEffect(()=>{
        const menu = document.querySelector('.nav-menu');
        const navbar = document.querySelector('.navbar');
        const navwrapper = document.querySelector('.nav-wrapper')
        const navlinks = document.querySelector('.nav-links')
        const navlink = document.getElementsByClassName('nav-link')

        menu.addEventListener('click',()=>{
            navbar.classList.toggle('navbar-active')
            navwrapper.classList.toggle('nav-wrapper-active');
            navlinks.classList.toggle('nav-active')
        })
        for(var i = 0; i < navlink.length; i++){
            navlink[i].addEventListener('click',()=>{
                navbar.classList.toggle('navbar-active')
                navwrapper.classList.toggle('nav-wrapper-active');
                navlinks.classList.toggle('nav-active')
            })
        }
    })

    return(
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="brand">
                    <h1 className="head">Pacific</h1>
                    <h2 className="subhead">Sparkles</h2>
                </div>
                <div className="nav-menu">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line" id="special"></div>
                </div>
                <ul className="nav-links">
                    <Link className="nav-link" to="/">HOME</Link>
                    <Link className="nav-link" to="/about">ABOUT US</Link>
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/blog">EDITORIAL</Link>
                </ul>
            </div>
        </div>
    )
}