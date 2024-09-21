import axios from 'axios';

export async function get() {
  const res = await axios.get('http://localhost:1337/api/products');
  return { body: JSON.stringify(res.data) };
}
