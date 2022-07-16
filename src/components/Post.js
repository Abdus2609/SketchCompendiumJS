import React from 'react';

function Post({artName, name, email, url}) {
    const title = (artName !== "") ? <p><strong>Title:</strong> {artName}</p> : <p></p>
    const artist = (name !== "") ? <p><strong>Artist:</strong> {name}</p> : <p></p>
    const contact = (email !== "") ? <p><strong>Contact:</strong> {email}</p> : <p></p>

    return (
        <div>
            <img src={url} alt="" />
            {title}
            {artist}
            {contact}
        </div>
    )
}

export default Post;