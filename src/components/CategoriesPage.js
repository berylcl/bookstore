import React from 'react';

const CategoriesPage = () => {
  const handleCheckStatus = () => {
    console.log('Status checked');
  };

  return (
    <div>
      <h1>Categories Page</h1>
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
    </div>
  );
};

export default CategoriesPage;
