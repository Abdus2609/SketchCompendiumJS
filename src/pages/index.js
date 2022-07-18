import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import "../App.css"
import { firestore } from '../firebaseconfig';

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

    const [topPosts, setTopPosts] = useState([]);

    const db = collection(firestore, "posts");

    useEffect(() => {
      onSnapshot(query(db, orderBy("numLikes", "desc")), (snapshot) => {
        const newTopPosts = [];
        snapshot.forEach((doc) => {
          newTopPosts.push(doc.data().url)
        })

        const topNinePosts = newTopPosts.slice(0, 9);
        setTopPosts(topNinePosts);
      })
    });

    return (
     <div>
      
      <section className='header'>
        <div class="text-box">
          <h1>WELCOME TO THE SKETCH COMPENDIUM</h1>
          <p>This is just a space for showcasing any and all art. We welcome all styles and genres. Have fun!</p>
          <a href="/posts" class="hero-btn">Click here to see some posts</a>
          <br />
          <a href="/postform" class="hero-btn">Click here to post your first masterpiece</a>
        </div>
      </section>

      <section className="example-posts">
        <h1>Some of our posts</h1>
        <p>Here are some of our popular posts. Post yours and you could be here too!</p>
        <div className="row">
          <div className="post">
            <img src={topPosts[0]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[1]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[2]} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={topPosts[3]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[4]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[5]} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="post">
            <img src={topPosts[6]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[7]} alt=""/>
          </div>
          <div className="post">
            <img src={topPosts[8]} alt=""/>
          </div>
        </div>				
      </section>

      <section class="join">
		    <h1>Start your artistic adventure here and upload<br />some of your work to be showcased</h1>
		    <a href="/postform" class="hero-btn">CREATE A POST</a>
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