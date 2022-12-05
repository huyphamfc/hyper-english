import { useState, useEffect } from 'react';

function useFetch(param, options = {}) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${param}`, options)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [param]);

  return data;
}

export default useFetch;
