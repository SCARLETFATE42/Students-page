import React from 'react';
import Searchbar from './Searchbar';
import StudentProfile from '../components/StudentProfile';
import { useLocation } from 'react-router-dom';

const Herosection = () => {
  const location = useLocation();

  // Hide Searchbar on /payments route
  const hideSearchbar = location.pathname === '/payments';

  return (
    <>
      {!hideSearchbar && <Searchbar />}
    </>
  );
};

export default Herosection;
