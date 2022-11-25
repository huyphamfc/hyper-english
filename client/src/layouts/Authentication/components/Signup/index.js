import React from 'react';

import style from './style.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';

function Signup() {
  return (
    <>
      <form className={style.form}>
        <FormGroup inputPlaceholder="Name" />
        <FormGroup inputPlaceholder="Email" />
        <FormGroup inputPlaceholder="Password" inputType="password" />
        <FormGroup
          inputPlaceholder="Password Confirmation"
          inputType="password"
        />
        <Button solid>Sign up</Button>
      </form>
      <div className={style.action}>
        <span>Have an account already?&nbsp;</span>
        <Button underline to="/authentication/login">
          Log in
        </Button>
      </div>
    </>
  );
}

export default Signup;
