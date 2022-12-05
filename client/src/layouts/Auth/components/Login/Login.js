import React, { useState } from 'react';
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

  const [notification, setNotification] = useState(null);

  const submitForm = async (payload) => {
    setNotification('Processing...');

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/login`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...payload }),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        setNotification(result.message);
        return;
      }

      const { name, email } = result.data;
      dispatch(login({ name, email }));
      navigate('/lessons', { replace: true });
    } catch (err) {
      setNotification('Internal Server Error.');
    }
  };

  console.log('Render: Login');

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
        {notification && (
          <span className={style.notification}>{notification}</span>
        )}
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
