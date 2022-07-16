import React from 'react';

function Post({artName, name, email, url}) {
    return (
        <div>
            <img src={url} alt="" />
            <p>Title: {artName}</p>
            <p>Artist: {name}</p>
            <p>Contact: {email}</p>
        </div>
    )
}