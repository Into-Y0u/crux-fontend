'use client';

import React, { useEffect } from 'react'

const ApiCall = () => {
  const apiUrl = 'http://127.0.0.1:8000/public/login';
  const apiKey = 'CRUX_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiX2xnUlV3dGFLMWpSbkdqcUFpU3ZlTGRoWXVkNzhhWFhQX2JmV1QxVF9qZyJ9.6gc4a0t9N1f5NqqLeD57JyDg3dgFJPVPmAGAXuOefZ8';

  const headers = {
    'Content-Type': 'application/json',
    'api_key': apiKey // Assuming 'api_key' is the header name for the API key
  };

  const requestBody = {
    email: 'boatclone@boatmail.com',
    password: 'test123'
    // Add other necessary fields for the request body
  };


  const handleAPICall = async () => {
    try {
        const apiResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(requestBody)
        });
    
        if (!apiResponse.ok) {
          throw new Error('Network response was not ok');
        }
    
        const res = await apiResponse.json();
        console.log("DATA RECEIVED", res);
    
        return res; // Return the response or perform actions with it
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


  return (
    <>
      <div>
        <h1>
          Hi test page
        </h1>
        <div>
          <h2>
            Button under
          </h2>
          <button onClick={handleAPICall}>Call API</button>
        </div>
        
      </div>
    </>
  )
}

export default ApiCall;