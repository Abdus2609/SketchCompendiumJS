import React from 'react';
import { useState } from 'react';
import { storage, firestore } from '../firebaseconfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';

function Upload() {

    const [artName, setArtName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const db = collection(firestore, "posts");

    const navigate = useNavigate();

    const handlePost = () => {
        if (image == null) return;
        const imageRef = ref(storage, `posts/${image.name + v4()}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                const data = {
                    artName,
                    name,
                    email,
                    url,
                    numLikes: 0,
                    createdAt: Timestamp.now()
                };

                await addDoc(db, data).then(() => {
                    setArtName('');
                    setName('');
                    setEmail('');
                    setImage(null);

                    alert("Post uploaded.");
                    navigate("/posts");
                });
            });
        });
    }

    return (
        <div>
            <section className='postform-header'>
                <h1>Upload Post</h1>
                <p><strong>Artist:</strong> Scarlet Xiao Jiabao Garbo DV Supreme Crimson Dingo</p>
            </section>

            <section className='postform'>
                <div class="postform-col">
                    <h4>Post your artwork</h4>
                    <p>We just need some details about you and your artwork for viewers to see.</p>
                    <div>
                        <input type="text" name="artName" placeholder='Enter the name of your artwork...' 
                            onChange={(event) => {
                                setArtName(event.target.value);
                            }} required />
                        <input type="text" name="name" placeholder='Enter your name...' 
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            required />
                        <input type="email" name="email" placeholder='Enter your contact email...' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            required />
                        <input type="file" name="image" placeholder='Upload Image' 
                            onChange={(event) => {
                                setImage(event.target.files[0]);
                            }}
                            required />
                        <button class='hero-btn gold-btn' onClick={handlePost}>Post</button>
                    </div>
                    <p><strong>NOTE:</strong> After pressing Post, please wait until a notification confirms your upload before doing anything else</p>
                </div>
            </section>
        </div>
    )
}

export default Upload;