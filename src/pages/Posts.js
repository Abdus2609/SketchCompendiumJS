import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { storage, firestore } from '../firebaseconfig';

function Posts() {
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
	
	const [posts, setPosts] = useState([]);

	const db = collection(firestore, "posts");

	useEffect(() => {
		onSnapshot(query(db), (snapshot) => {
			const newPosts = [];
			snapshot.forEach((doc) => {
				newPosts.push(doc.data().url)
			});

			setPosts(newPosts)
		})
	});

    return (
        <div>
            <section class="posts-header">
		        <h1>Posts</h1>
	        </section>    

            <section class="posts">
		        <div class="posts-intro">
		        	<h2>Have a look through these art pieces</h2>
		        	<p>If you find anything you like, feel free to use the details given to contact the artist.</p>
		        </div>

				{posts.map((url) => {
					return (
						<div class="row">
							<div class="post">
								<img src={url} alt="" />
							</div>
							<div class="post">
								<img src={url} alt="" />
							</div>
							<div class="post">
								<img src={url} alt="" />
							</div>
						</div>
					)
				})}

		        {/* <div class="row">
		        	<div class="post">
		        		<img src={require("../images/eren_yeager.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/ichigo_2.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/kaneki.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/nezuko.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/rocklee_gaara.png" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/tanjiro_sun.png" )} alt="" />
		        	</div>
		        </div>		

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/bardock.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/goku_mui.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/gojo_2.JPG" )} alt="" />
		        	</div>
		        </div>		

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/superman.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/uzui.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/vegeta_goku.JPG" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/broly_ssj.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/grimmjow_ulqiorra.png" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/rengoku.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/aizen.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/akaza.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/batman_laughs.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/tanjiro.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/ulqiorra.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/zenitsu.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/kawashikki.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/pokemon.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/shanks.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/ban.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/borushiki.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/gojo.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/majin_vegeta.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/obito_kakashi.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/sukuna_3.jpg" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/gokublack.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/grimmjow.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/hashirama_madara.JPG" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/goku_ssj.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/goku_ssj3.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/goku_ssj4.JPG" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/broly_ss2.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/sukuna_2.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/ichigo.JPG" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/kakashi.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/naruto_sasuke.jpg" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/sukuna.JPG" )} alt="" />
		        	</div>
		        </div>

		        <div class="row">
		        	<div class="post">
		        		<img src={require("../images/goku_ui.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/naruto_so6p.JPG" )} alt="" />
		        	</div>
		        	<div class="post">
		        		<img src={require("../images/gohan_ss2.JPG" )} alt="" />
		        	</div>
		        </div> */}
	        </section>

            <section class="footer">
		        <h4>About Us</h4>
		        <p>This website was solely created to preserve all art and ensure everyone has the chance for their work to be seen by the world.</p>
		        <p>Copyright <i class="fa fa-copyright"></i> 2022 [YAOi Productions]</p>
	        </section>
        </div>
    )
}

export default Posts;