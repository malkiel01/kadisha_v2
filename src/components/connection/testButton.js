import React from 'react';
import axios from 'axios';

function TestButton() {
  const handleClick = async () => {
    try {
      // ודא שהכתובת מתאימה לכתובת של השרת שלך
      const response = await axios.get('http://35.174.7.136/:3002/test');
      console.log(response.data);
      alert('Response from server: ' + response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return <button onClick={handleClick}>Test Server</button>;
}

export default TestButton;
