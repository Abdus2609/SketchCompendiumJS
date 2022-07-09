import React from 'react';
import "../App.css"
// import {Link, Routes, Router, Route} from 'react-router-dom';
// import Navbar from '../Navbar';
// import About from './About';
// import Posts from './Posts';
// import Contact from './Contact';

function Home() {
    window.addEventListener('scroll', reveal);

	  function reveal() {
	  	var reveals = document.querySelectorAll('.post');

	  	for (var i = 0; i < reveals.length; i++) {

	  		var windowHeight = window.innerHeight;
	  		var revealTop = reveals[i].getBoundingClientRect().top;
	  		var revealPoint = 150;

	  		if (revealTop < windowHeight - revealPoint) {
	  			reveals[i].classList.add('active');
	  		} else {
	  			reveals[i].classList.remove('active');
	  		}
	  	}
	  } 

    return (
     <div>
      
      <section className='header'>
        <div class="text-box">
          <h1>WELCOME TO THE SKETCH COMPENDIUM</h1>
          <p>This is just a space for showcasing any and all art. We welcome all styles and genres. Have fun!</p>
          <a href="/posts" class="hero-btn">Click here to see some posts</a>
          <br />
          <a href="/contact" class="hero-btn">Click here to post your first masterpiece</a>
        </div>
      </section>

      <section className="example-posts">
        <h1>Some of our posts</h1>
        <p>Here are some of our popular posts. Post yours and you could be here too!</p>
        <div className="row">
          <div className="post">
            <img src={require("../images/ichigo_2.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/borushiki.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/kaneki.jpg")} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={require("../images/batman_laughs.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/eren_yeager.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/ulqiorra.JPG")} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={require("../images/sukuna_3.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/tanjiro.jpg")} alt=""/>
          </div>
          <div className="post">
            <img src={require("../images/bardock.JPG")} alt=""/>
          </div>
        </div>				
      </section>

      <section class="join">
		    <h1>Start your artistic adventure here and upload<br />some of your work to be showcased</h1>
		    <a href="/contact" class="hero-btn">CREATE A POST</a>
	    </section>
    

      <section class="footer">
		    <h4>About Us</h4>
		    <p>This website was solely created to preserve all art and ensure everyone has the chance for their work to be seen by the world.</p>
		    <p>Copyright <i class="fa fa-copyright"></i> 2022 [YAOi Productions]</p>
	    </section>
    </div>
  )
}

export default Home;