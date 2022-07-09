import React from 'react';
import '../App.css';

function About() {
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
            <section class="about-header">
		        <h1>About</h1>
	        </section>

            <section class="about-us">
		
		    <div class="row">
		    	<div class="about-col">
		    		<h1>We are all about showcasing art and just that</h1>
		    		<p>This is a completely free service purely for the sake of showcasing and advertising your own art as well as maybe looking for a piece of art you would like to purchase. All purchases will be directly with the creator of the artwork. Each post has the associated artist's name and contact email.</p>
		    		<a href="/posts" class="hero-btn gold-btn">START EXPLORING</a>
		    	</div>
		    	<div class="about-col">
		    		<img class="post" src={require("../grimmjow_ulqiorra_resized.png")} alt="" />
                </div>
		    </div>

	        </section>

            <section class="footer">
		        <h4>About Us</h4>
		        <p>This website was solely created to preserve all art and ensure everyone has the chance for their work to be seen by the world.</p>
		        <p>Copyright <i class="fa fa-copyright"></i> 2022 [YAOi Productions]</p>
	        </section>
        </div>
    )
}

export default About;