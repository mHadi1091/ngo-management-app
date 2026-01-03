import React, { useState, useEffect } from 'react';

function DataTest() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    // Clear localStorage for testing
    localStorage.removeItem('ngo_projects');
    localStorage.removeItem('ngo_volunteers');
    localStorage.removeItem('ngo_donors');
    localStorage.removeItem('ngo_events');
    localStorage.removeItem('ngo_reports');

    // Set test data
    const defaultProjects = [
      { id: 1, name: 'Test Project 1', status: 'Active', progress: 50 },
      { id: 2, name: 'Test Project 2', status: 'Planning', progress: 25 }
    ];
    
    setTestData(defaultProjects);
    localStorage.setItem('ngo_projects', JSON.stringify(defaultProjects));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Data Test</h1>
      <p>Test Data Length: {testData.length}</p>
      <div className="mt-4">
        {testData.map(item => (
          <div key={item.id} className="p-2 border mb-2">
            <p>Name: {item.name}</p>
            <p>Status: {item.status}</p>
            <p>Progress: {item.progress}%</p>
          </div>
        ))}
      </div>
      <button 
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Clear All Data & Reload
      </button>
    </div>
  );
}

export default DataTest;