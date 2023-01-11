import { useState, useEffect } from 'react';

type States<T> = [loading: boolean, error: string, data?: T];

function useFetch<T>(params: string, options?: RequestInit): States<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T>();

  const fetchData = async (): Promise<void> => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/${params}`, options);
      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      setData(result);
    } catch (err) {
      if (err instanceof Error) return setError(err.message);
      return setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, data];
}

export default useFetch;
