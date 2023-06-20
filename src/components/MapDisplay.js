import React, { useEffect, useRef } from 'react';

const MapDisplay = ({ customers, driverLocation }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', initializeMap);

    return () => {
      googleMapScript.removeEventListener('load', initializeMap);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 10,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    customers.forEach((customer) => {
      const marker = new window.google.maps.Marker({
        position: { lat: customer.latitude, lng: customer.longitude },
        map: map,
        title: customer.name,
      });
    });

    if (driverLocation) {
      const driverMarker = new window.google.maps.Marker({
        position: { lat: driverLocation.latitude, lng: driverLocation.longitude },
        map: map,
        title: 'Driver',
      });
    }
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapDisplay;

