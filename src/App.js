import MapDisplay from './MapDisplay';
import React, { useState } from 'react';
import './App.css';

import Authentication from './components/Authentication';
import MapDisplay from './components/MapDisplay';
import CustomerManagement from './components/CustomerManagement';
import RealTimeLocationTracking from './components/RealTimeLocationTracking';
import StartStopTracking from './components/StartStopTracking';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [driverLocation, setDriverLocation] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleAddCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  const handleUpdateDriverLocation = (location) => {
    setDriverLocation(location);
  };

  const handleStartTracking = () => {
    // Logic to start tracking
    console.log('Tracking started');
  };

  const handleStopTracking = () => {
    // Logic to stop tracking
    console.log('Tracking stopped');
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Authentication onLogin={handleLogin} />
      ) : (
        <>
          <MapDisplay customers={customers} driverLocation={driverLocation} />
          <CustomerManagement onAddCustomer={handleAddCustomer} />
          <RealTimeLocationTracking onUpdateLocation={handleUpdateDriverLocation} />
          <StartStopTracking onStart={handleStartTracking} onStop={handleStopTracking} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;

