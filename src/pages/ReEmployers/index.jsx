import React from 'react';
import Footers from '../../components/Footers';
import Navbars from '../../components/Navbars';
import FormRegisterEmployers from '../../features/FormRegisterEmployers';

function FREmployers() {
  return (
    <>
      <Navbars />
      <FormRegisterEmployers />
      <Footers />
    </>
  );
}

export default FREmployers;
