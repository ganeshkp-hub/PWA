import axios from 'axios';

export async function post({ body, request }) {
  const { productId } = body;
  const token = request.headers.get('Authorization').split(' ')[1];

  const res = await axios.post(
    'http://localhost:1337/api/cart/add',
    { product: productId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return { body: JSON.stringify(res.data) };
}
