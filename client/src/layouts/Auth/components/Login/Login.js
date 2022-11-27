import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';
import loginYupSchema from './loginYupSchema';
import { login } from '../../../../store/authSlice';

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(loginYupSchema) });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitForm = (payload, e) => {
    console.log(payload);
    e.target.reset();

    dispatch(login());
    navigate('/lessons', { replace: true });
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
