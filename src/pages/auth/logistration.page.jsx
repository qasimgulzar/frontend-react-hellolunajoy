import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Button, Flex, Layout} from "antd";
import {GoogleOutlined} from '@ant-design/icons';
import {SERVER_BASE_URL} from "../../config";

const contentStyle = {
    textAlign: 'center',
    color: '#fff',
    minHeight: 'calc(100%) !important'
};
const layoutStyle = {
    height: 'calc(100%)',
    margin: 0,
    padding: 0
};

function LogistrationPage({page}) {
    return (
        <Layout style={layoutStyle}>
            <Layout.Content style={contentStyle} gap="middle">
                <header className="App-header">
                    <h1>{page === 'login' ? 'Login' : 'Sign Up'}</h1>
                </header>
                {page === 'login' ? <LoginForm/> : <SignupForm/>}
                <nav>
                    {page === 'login' ? (
                        <Link to="/signup">Switch to Sign Up</Link>
                    ) : (
                        <Link to="/login">Switch to Login</Link>
                    )}
                </nav>

            </Layout.Content>
        </Layout>
    );
}

function LoginForm() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Extract token from query params
        const params = new URLSearchParams(location.search);
        const token = params.get('access_token');

        if (token) {
            // Save the token to localStorage
            localStorage.setItem('authToken', token);
            console.log('Token saved:', token);
            navigate("/dashboard/daily-logs");
        } else {
            // Redirect back to login if no token
            navigate("/login");
        }
    }, [location, navigate]);
    return (
        <div className="login-page">
            <Flex primary gap="middle" vertical>
                <div style={{margin: 'auto', padding: 0, paddingTop: '10px'}}>
                    <Button href={`${SERVER_BASE_URL}/auth/google`} shape="round" icon={<GoogleOutlined/>} size="large"
                            type="primary" style={{width: '200px'}}>Login with Google</Button>
                </div>
            </Flex>
        </div>
    );
}

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Signing up with:', {email, password});
    };

    return (
        <div className="signup-page">
            <form onSubmit={handleSignup} style={contentStyle}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default LogistrationPage;
