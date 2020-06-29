const getToken = () => {
  return JSON.parse(localStorage.getItem('zenon_token'));
}

const setToken = (access_token) => {
  const auth_token = {
    token: access_token
  }
  const token = JSON.stringify(auth_token);
  localStorage.setItem('zenon_token', token);
}

const config = (token = '') => {
  return  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

const calcTotalPrice = (cart) => {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price
  }, 0);
}

export {
  getToken,
  setToken,
  config,
  calcTotalPrice
}