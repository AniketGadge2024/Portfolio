import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const storedVisits = JSON.parse(localStorage.getItem('visits')) || [];
    setVisits(storedVisits);

    const sessionFlag = sessionStorage.getItem('hasVisited');
    if (!sessionFlag) {
      const currentVisit = new Date().toLocaleString();
      const updatedVisits = [...storedVisits, currentVisit];
      localStorage.setItem('visits', JSON.stringify(updatedVisits));
      setVisits(updatedVisits);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const clearVisits = () => {
    localStorage.removeItem('visits');
    sessionStorage.removeItem('hasVisited');
    setVisits([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Visit Tracker</h2>
      <p>Total Visits: {visits.length}</p>

      <button
        onClick={clearVisits}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear Visits
      </button>

      <ul className="mt-4 list-disc list-inside">
        {visits.map((visit, index) => (
          <li key={index}>{visit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
