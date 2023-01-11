type ResponseResult = {
  username?: string;
  email?: string;
  message?: string;
};

const submitForm = async <T>(param: string, payload: T): Promise<ResponseResult> => {
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${param}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    });

    const { username, email, message }: ResponseResult = await res.json();

    if (!res.ok) return { message: message || 'Something went wrong.' };

    return { username, email };
  } catch (err) {
    return { message: 'Internal Server Error.' };
  }
};

export default submitForm;
