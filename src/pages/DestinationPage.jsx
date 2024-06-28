// src/pages/DestinationPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Destination Page</h1>
      <p>Details for destination ID: {id}</p>
    </div>
  );
};

export default DestinationPage;
