import React, {useState} from 'react';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login submitted! Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="login-container">
            <div className="glass-card">
                <h2>Welcome Back</h2>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
