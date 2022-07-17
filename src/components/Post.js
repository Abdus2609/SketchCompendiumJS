import React, { useEffect } from 'react';
import {useState} from 'react';
import { firestore } from '../firebaseconfig';
import "../App.css"
import { doc, updateDoc } from 'firebase/firestore';

function Post({id, artName, name, email, url, numLikes}) {

    const [likes, setLikes] = useState(numLikes);

    const handleLike = async () => {
        const newLikes = likes + 1;
        setLikes(newLikes);

        const ref = doc(firestore, "posts", id);
        await updateDoc(ref, {numLikes: newLikes});
    }

    useEffect(() => {}, [likes])

    const title = (artName !== "") ? <p><strong>Title:</strong> {artName}</p> : <p></p>
    const artist = (name !== "") ? <p><strong>Artist:</strong> {name}</p> : <p></p>
    const contact = (email !== "") ? <p><strong>Contact:</strong> {email}</p> : <p></p>
    const likeButton = (numLikes !== -1) ? <div><button class="like-button" onClick={handleLike}>Likes: {likes}</button></div> : <></>

    return (
        <div>
            <img src={url} alt="" />
            <div>
                {title}
                {artist}
                {contact}
                {likeButton}
            </div>
        </div>
    )
}

export default Post;