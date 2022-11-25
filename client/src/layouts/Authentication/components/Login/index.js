import React from 'react';

import style from './style.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';

function Login() {
  return (
    <>
      <form className={style.form}>
        <FormGroup inputPlaceholder="Email" />
        <FormGroup inputPlaceholder="Password" inputType="password" />
        <Button solid>Login</Button>
      </form>
      <div className={style.action}>
        <span>Create a new account?&nbsp;</span>
        <Button underline to="/authentication/signup">
          Signup
        </Button>
      </div>
    </>
  );
}

export default Login;
