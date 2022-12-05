import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Signup.module.scss';
import { Button } from '../../../../components';
import FormGroup from '../FormGroup';
import signupYupSchema from './signupYupSchema';
import { login } from '../../../../store/authSlice';

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(signupYupSchema) });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [notification, setNotification] = useState(null);

  const submitForm = async (payload) => {
    setNotification('Processing...');

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`,
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

  console.log('Render: Signup');

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
        {notification && (
          <span className={style.notification}>{notification}</span>
        )}
        <Button solid>Sign up</Button>
      </form>
      <div className={style.action}>
        <span>Have an account already?&nbsp;</span>
        <Button underline to="/auth/login">
          Log in
        </Button>
      </div>
    </>
  );
}

export default Signup;
