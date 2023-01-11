import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import styles from './SignUp.module.scss';
import FormGroup from '../FormGroup';
import signUpYupSchema from './signUpYupSchema';
import { Button, Loading } from 'components';
import submitForm from '../submitForm';
import { login } from 'store';
import { useAppDispatch } from 'hooks';

type SignUpForm = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>({ mode: 'onTouched', resolver: yupResolver(signUpYupSchema) });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [notification, setNotification] = useState<string>('');

  const onSubmitForm = async (payload: SignUpForm): Promise<void> => {
    setNotification('Processing...');

    const { username, email, message } = await submitForm('signup', payload);

    if (message) return setNotification(message);
    if (!username || !email) return setNotification('Data not found.');

    dispatch(login({ username, email }));
    navigate('/lessons', { replace: true });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
        <FormGroup
          inputProps={register('username')}
          inputWarning={errors.username?.message}
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
          <div className={styles.form__notification}>
            <span>{notification}</span>
            {notification === 'Processing...' && <Loading />}
          </div>
        )}
        <Button solid>Sign Up</Button>
      </form>
      <div className={styles.action}>
        <span>Have an account already?&nbsp;</span>
        <Button to="/auth/login">Log in</Button>
      </div>
    </>
  );
}

export default SignUp;
