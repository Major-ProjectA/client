import React from 'react';
import Navbars from '../../components/Navbars';
import Footers from '../../components/Footers';
import Resume from '../../features/Form/FormCV/Resume';

function CV() {
  return (
    <>
      <Navbars />

      <Resume />

      <Footers />
    </>
  );
}

export default CV;
