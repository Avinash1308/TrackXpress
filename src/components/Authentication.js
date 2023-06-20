import React, { useState } from 'react';

const Authentication = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleLogin = () => {
    // Here, you can implement the logic for verifying the OTP
    // For demo purposes, we're using a default test OTP value of 123456
    if (otp === '123456') {
      setIsAuthenticated(true);
      alert('Login successful!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPhoneNumber('');
    setOTP('');
    alert('Logged out successfully!');
  };

  if (isAuthenticated) {
    return (
      <div>
        <h2>Welcome, {phoneNumber}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Driver Login</h2>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <br />
        <label htmlFor="otp">One-Time Password (OTP):</label>
        <input type="password" id="otp" value={otp} onChange={handleOTPChange} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
};

export default Authentication;

