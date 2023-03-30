import React, { useState } from 'react';

const KEY = 'ODd7w819augbgLxVRUK42iw9Tu2FNIga';

const LocationForm = ({ onFormSubmit }) => {
  const [cityTerm, setCityTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = cityTerm.trim();

    if (!searchTerm) return;
    onFormSubmit(searchTerm);
    setCityTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="tracking-widest text-gray-400 mb-2">
        Enter a location for weather information
      </p>
      <input
        type="text"
        className="block w-full py-2 px-4 text-lg rounded-md text-gray-600"
        value={cityTerm}
        onChange={(e) => setCityTerm(e.target.value)}
      />
    </form>
  );
};

export default LocationForm;
