import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import FormGroup from '../FormGroup';
import loginYupSchema from './loginYupSchema';
import { Button, Loading } from 'components';
import submitForm from '../submitForm';
import { login } from 'store';
import { useAppDispatch } from 'hooks';

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({ mode: 'onTouched', resolver: yupResolver(loginYupSchema) });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [notification, setNotification] = useState<string>('');

  const onSubmitForm = async (payload: LoginForm): Promise<void> => {
    setNotification('Processing...');

    const { username, email, message } = await submitForm('login', payload);

    if (message) return setNotification(message);
    if (!username || !email) return setNotification('Data not found.');

    dispatch(login({ username, email }));
    navigate('/lessons', { replace: true });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
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
          <div className={styles.form__notification}>
            <span>{notification}</span>
            {notification === 'Processing...' && <Loading />}
          </div>
        )}
        <Button solid>Login</Button>
      </form>
      <div className={styles.action}>
        <span>Create a new account?&nbsp;</span>
        <Button to="/auth/signup">SignUp</Button>
      </div>
    </>
  );
}

export default Login;
