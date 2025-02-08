import React, { useState } from 'react';
import './App.css';
import background from './Images/OneGymSolution_BG.png';

const App = () => {
    const [contactNumber, setContactNumber] = useState('');
    const [isContactNumberValid, setIsContactNumberValid] = useState(false);
    const [userExists, setUserExists] = useState(null);
    const [password, setPassword] = useState('');

    const handleContactNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d{10}$/.test(value)) {
            setContactNumber(value);
            setIsContactNumberValid(true);
        } else {
            setContactNumber(value);
            setIsContactNumberValid(false);
        }
    };

    const handleNext = () => {
        // Simulate checking if user exists
        const doesUserExist = Math.random() > 0.5;
        setUserExists(doesUserExist);
    };

    const handleLogin = () => {
        // Simulate password check (this is just a placeholder)
        if (password === 'password') {
            alert('Login Successful');
        } else {
            alert('Incorrect Password');
        }
    };

    const handleCreateAccount = () => {
        alert('Account Created');
    };

    return (
        <div className="App"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}>
            {!userExists && userExists !== null ? (
                <div>
                    <h2>Create Account</h2>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button onClick={handleCreateAccount}>Create Account</button>
                </div>
            ) : (
                <div>
                    <h2>Get Started</h2>
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={handleContactNumberChange}
                        maxLength="10"
                        pattern="\d{10}"
                    />
                    <button onClick={handleNext} disabled={!isContactNumberValid}>
                        Next
                    </button>

                    {userExists && (
                        <div>
                            <h2>Login</h2>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={handleLogin}>Login</button>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Forgot Password?</a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
