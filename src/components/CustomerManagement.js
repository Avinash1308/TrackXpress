import React, { useState } from 'react';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      name: name,
      phoneNumber: phoneNumber,
      latitude: latitude,
      longitude: longitude,
    };

    setCustomers([...customers, newCustomer]);
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setPhoneNumber('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <div>
      <h2>Customer Management</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <br />
        <label htmlFor="latitude">Latitude:</label>
        <input type="text" id="latitude" value={latitude} onChange={handleLatitudeChange} />
        <br />
        <label htmlFor="longitude">Longitude:</label>
        <input type="text" id="longitude" value={longitude} onChange={handleLongitudeChange} />
        <br />
        <button type="button" onClick={handleAddCustomer}>Add Customer</button>
      </form>
      <h3>Customers:</h3>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>
              {customer.name} - {customer.phoneNumber} - {customer.latitude}, {customer.longitude}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers added yet.</p>
      )}
    </div>
  );
};

export default CustomerManagement;

