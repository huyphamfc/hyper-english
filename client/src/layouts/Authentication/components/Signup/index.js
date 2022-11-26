import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import style from './style.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';
import signupYupSchema from './signupYupSchema';

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(signupYupSchema) });

  const submitForm = (payload, e) => {
    console.log(payload);
    e.target.reset();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(submitForm)}>
        <FormGroup
          inputProps={register('name')}
          inputWarning={errors.name?.message}
          inputPlaceholder="Name"
        />
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
        <FormGroup
          inputProps={register('passwordConfirmation')}
          inputWarning={errors.passwordConfirmation?.message}
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
