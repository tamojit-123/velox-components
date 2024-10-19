import React, {useState} from 'react';
import "./Login.module.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Logging in:", {username, password, rememberMe});
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <h3>This is a login button</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="options">
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>

                    <a href="/" className="forgot-password">
                        Forgot password?
                    </a>
                </div>

                <button type="submit" className="login-button">
                    Get started
                </button>

                <p className="signup-link">
                    Don’t have an account? <a href="/">Sign up</a>
                </p>
            </form>
        </div>
    );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
