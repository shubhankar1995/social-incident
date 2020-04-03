import React,{useState} from 'react';

const RegistraionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const registerUser = async () => {
        if (password === confirmPassword){
            const result = await fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/register`, {
                method: 'post',
                body: JSON.stringify({username, password, email}),
                //header is not required since the request is in plain text
            });
            const body = await result.json();
            if (body.status === 200){
                window.location.href='/login';
            }
            else{
                setError(body.error)
            }
        }
        else{
            setError("Passwords don't match");
        }
    }

    return (
        <div class = "login">
            <h1>Register Here!</h1>
            <br/>
            <small>{error}</small>
            <input type = "text" value = {email} onChange= {(event) => setEmail(event.target.value)} placeholder="e-mail ID" required="required" />
            <input type = "text" value = {username} onChange= {(event) => setUsername(event.target.value)} placeholder="username" required="required"/>
            <input type = "password" value = {password} onChange= {(event) => setPassword(event.target.value)} placeholder="password" required="required"/>
            <input type = "password" value = {confirmPassword} onChange= {(event) => setConfirmPassword(event.target.value)} placeholder="confirm password" required="required"/>
            <button onClick={registerUser} class="btn btn-primary btn-block btn-large">Register</button>
            <button onClick={event =>  window.location.href='/'} class="btn btn-primary btn-block btn-large">Login Instead</button>
        </div>
    );
}

export default RegistraionForm;