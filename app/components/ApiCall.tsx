'use client';

import React, { useEffect } from 'react'

const ApiCall = () => {
  const apiUrl = 'https://test2-kyfh.onrender.com/auth/allusers';
  const apiKey = 'CRUX_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoialZRQW9RQXJhYTF1MnJKTmQzcXlXcGJYamk0ZC03OTdVenVndFlCSFRTQSJ9.KsM260E6yfj6IqZvQWzszjpfDfLx4MwuznJmTAP5KWI';
  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdXBlcmFkbWluQHN1cGVybWFpbC5jb20iLCJleHAiOjE3MDQwMzM5NjV9.s9wERJyEsQJRKgGI4ijL_lzBVgP6mRu6jPY8naQj3iQ';

  const headers = {
    'Content-Type': 'application/json',
    'api_key': apiKey,  // Assuming 'api_key' is the header name for the API key,
    'Authorization': `Bearer ${bearerToken}`
  };

  // const requestBody = {
  //   email: 'boatclone@boatmail.com',
  //   password: 'test123'
  //   // Add other necessary fields for the request body
  // };


  const handleAPICall = async () => {
    try {
        const apiResponse = await fetch(apiUrl, {
          method: 'GET', // POST
          headers: headers,
          // body: JSON.stringify(requestBody)
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