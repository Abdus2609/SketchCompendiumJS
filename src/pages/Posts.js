import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { firestore } from '../firebaseconfig';
import Post from "../components/Post"

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
					id: doc.id,
					artName: doc.data().artName,
					name: doc.data().name,
					email: doc.data().email,
					url: doc.data().url,
					numLikes: doc.data().numLikes,
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
					const length = posts.length;

					if (index % 3 !== 0) {
						return <></>;
					}

					const secondPost = (index + 1 < length) ? 
						{id: posts[index + 1].id,
						artName: posts[index + 1].artName, 
						name: posts[index + 1].name, 
						email: posts[index + 1].email, 
						url: posts[index + 1].url,
						numLikes: posts[index + 1].numLikes} :
						{id: "", artName: "", name: "", email: "", url: "", numLikes: -1}

					const thirdPost = (index + 2 < length) ? 
						{id: posts[index + 2].id,
						artName: posts[index + 2].artName, 
						name: posts[index + 2].name, 
						email: posts[index + 2].email, 
						url: posts[index + 2].url,
						numLikes: posts[index + 2].numLikes} :
						{id: "", artName: "", name: "", email: "", url: "", numLikes: -1}

					return (
						<div class="row">
							<div class="post">
								<Post id={post.id} artName={post.artName} name={post.name} email={post.email} url={post.url} numLikes={post.numLikes} />
							</div>
							<div class="post">
								<Post id={secondPost.id} artName={secondPost.artName} name={secondPost.name} email={secondPost.email} url={secondPost.url} 
									numLikes={secondPost.numLikes} />
							</div>
							<div class="post">
								<Post id={thirdPost.id} artName={thirdPost.artName} name={thirdPost.name} email={thirdPost.email} url={thirdPost.url} 
									numLikes={thirdPost.numLikes} />
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