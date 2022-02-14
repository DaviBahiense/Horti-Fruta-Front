import axios from "axios";

export const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function registerUser(body) {
  const promise = axios.post(`${BASE_URL}/register`, body);

  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function mountCart(cart, total, token) {
  const config = createConfig(token);
  const promise = axios.post(
    `${BASE_URL}/carrinho`,
    { cart: cart, total: total },
    config
  );

  return promise;
}

function getCart(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/carrinho`, config);

  return promise;
}

function sendOrder(orderItens, orderTotal, token) {
  const config = createConfig(token);
  const promise = axios.post(
    `${BASE_URL}/order`,
    { orderItens: orderItens, orderTotal: orderTotal },
    config
  );

  return promise;
}

function getOrders(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/user/orders`, config);

  return promise;
}
const api = {
  registerUser,
  login,
  mountCart,
  getCart,
  sendOrder,
  getOrders,
};

export default api;
