import React, {useState} from 'react';


const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('');

    const checkLogin = async () => {
        if (username !== '' || password !== ''){

            const result = await fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/login`, {
                method: 'post',
                body: JSON.stringify({username, password}),
                //header is not required since the request is in plain text
            });
            const body = await result.json();
            if (body.status === 200){
                window.sessionStorage.setItem('username', username);
                window.sessionStorage.setItem('userToken', body.token);
                window.location.href='/welcome';
            }
            else{
                setError(body.error);
            }
        }
        else{
            setError('Either username or password not filled');
        }
        
        
    };

    /*const username = window.sessionStorage.getItem('username');*/


    return (
        <div id = "screen-body">
            <div class = "login">
                <h1>Login</h1>
                <br/>
                <small>{error}</small>
                <input type = "text" value = {username} onChange= {(event) => setUsername(event.target.value)} placeholder="username" required="required"/>
                <input type = "password" value = {password} onChange= {(event) => setpassword(event.target.value)} placeholder="password" required="required"/>
                <button onClick={ checkLogin } class="btn btn-primary btn-block btn-large">Login</button> 
                <button onClick={event =>  window.location.href='/registration'} class="btn btn-primary btn-block btn-large">Register</button>
            </div>
        </div>
    );
}

export default LoginForm;