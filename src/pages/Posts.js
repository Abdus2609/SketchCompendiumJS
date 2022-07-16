import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { firestore } from '../firebaseconfig';

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
		onSnapshot(query(db, orderBy("createdAt", "desc")), (snapshot) => {
			const newPosts = [];
			snapshot.forEach((doc) => {
				newPosts.push({
					artName: doc.data().artName,
					name: doc.data().name,
					email: doc.data().email,
					url: doc.data().url,
				})
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

				{posts.map((post, index) => {

					if (index % 3 !== 0) {
						return <></>;
					}

					return (
						<div class="row">
							<div class="post">
								<img src={post.url} alt="" />
							</div>
							<div class="post">
								<img src={posts[index + 1].url} alt="" />
							</div>
							<div class="post">
								<img src={posts[index + 2].url} alt="" />
							</div>
						</div>
					)
				})}
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