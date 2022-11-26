import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import style from './Login.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';
import loginYupSchema from './loginYupSchema';

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(loginYupSchema) });

  const submitForm = (payload, e) => {
    console.log(payload);
    e.target.reset();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(submitForm)}>
        <FormGroup
          inputProps={register('email')}
          inputWarning={errors.email?.message}
          inputPlaceholder="Email"
        />
        <FormGroup
          inputProps={register('password')}
          inputWarning={errors.password?.message}
          inputPlaceholder="Password"
          inputType="password"
        />
        <Button solid>Login</Button>
      </form>
      <div className={style.action}>
        <span>Create a new account?&nbsp;</span>
        <Button underline to="/auth/signup">
          Signup
        </Button>
      </div>
    </>
  );
}

export default Login;
