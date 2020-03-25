import React from 'react';
import {Redirect } from 'react-router-dom';

const WelcomePage = () =>{

    const performLogout = async () => {
        const userToken = window.sessionStorage.getItem('userToken');

        const result = await fetch(`/logout`, {
            method: 'post',
            body: JSON.stringify({token: userToken}),
            //header is not required since the request is in plain text
        });
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('userToken');
        window.location.href='/login'
    };

    const username = window.sessionStorage.getItem('username');

    if (username === null){
        
        return <Redirect to='/login'  />
        
    }

    return (
        <React.Fragment>
            <h1>Hello {username} , welcome to my social media site</h1>
            <p>
                Welcome to this page and happy sharing
            </p>
            <p>
                I'm still welcoming you
            </p>
            <button onClick={ performLogout } >Logout</button>
        </React.Fragment>
    );
} 

export default WelcomePage;