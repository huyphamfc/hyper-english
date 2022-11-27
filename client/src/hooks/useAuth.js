import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function useAuth() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuth) navigate('/auth/login');
  }, []);
}

export default useAuth;
