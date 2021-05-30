import React from 'react';
import Navbars from '../../components/Navbars';
import Footers from '../../components/Footers';
import ManageCV from '../../features/CV/ManageCV'

const CVList = () => {
  return (
    <>
      <Navbars />
      <ManageCV />
      <Footers />
    </>
  );
};

export default CVList;