import React from 'react';
import Navbars from '../../components/Navbars';
import Footers from '../../components/Footers';
import FormLogin from '../../features/Form/FormLogin';

function Login() {
  return (
    <>
      <Navbars />
      <FormLogin />
      <Footers />
    </>
  );
}

export default Login;
