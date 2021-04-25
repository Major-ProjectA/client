import React from 'react';
import Footers from '../../components/Footers';
import Navbars from '../../components/Navbars';
import FormRegisterEmployee from '../../features/Auth/FormRegisterEmployee';

function FRmployee() {
  return (
    <>
      <Navbars />
      <FormRegisterEmployee />
      <Footers />
    </>
  );
}

export default FRmployee;
