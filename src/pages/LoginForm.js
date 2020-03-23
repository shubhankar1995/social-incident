import React, {useState} from 'react';

const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('');

    const checkLogin = () => {
        /*const result = await fetch(``, {
            method: 'post',
        });
        const body = await result.json();*/
        if (username !== '' || password !== ''){
            window.sessionStorage.setItem('username', username);
            window.location.href='/welcome';
        }
        else{
            setError('Either username or password not filled');
        }
        
        
    };

    /*const username = window.sessionStorage.getItem('username');*/


    return (
        <div id = "add-comment-form">
            <h3>Welcome! </h3>
            <small>{error}</small>
            <label>
                Username:
                <input type = "text" value = {username} onChange= {(event) => setUsername(event.target.value)} required/>
            </label>
            <label>
                Password:
                <input type = "password" value = {password} onChange= {(event) => setpassword(event.target.value)} />
            </label>
            <button onClick={ checkLogin } >Login</button> <br/><br/>
            <button onClick={event =>  window.location.href='/registration'} >Register</button>
        </div>
    );
}

export default LoginForm;