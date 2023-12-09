// PageSelector.jsx
import React from 'react';
import ItemPerPage from '../molecules/ItemPerPage';
import PageOptions from '../molecules/PageOption';

const PageSelector = () => {
  return (
    <div className="page-selector-footer">
      <ItemPerPage />
      <PageOptions />
    </div>
  );
};

export default PageSelector;