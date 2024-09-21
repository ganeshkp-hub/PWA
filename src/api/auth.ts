import axios from 'axios';

export async function post({ body }) {
  const { email, password } = body;
  const res = await axios.post('http://localhost:1337/api/auth/local', { identifier: email, password });
  return { body: JSON.stringify(res.data) };
}
