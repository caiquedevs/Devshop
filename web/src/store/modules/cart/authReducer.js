import * as types from '../types';

const initialState = {
  data: [],
  total: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_CART_SUCCESS: {
      const { data, cart } = action.payload;

      if (cart.length <= 0) {
        const newState = { ...initialState };
        return newState;
      }

      const newState = { ...state };

      const idsCart = cart.map(product => product.id);
      const filtered = data.filter(product => idsCart.includes(product.id));
      console.log('AuthCart', filtered);

      cart.map(cartProduct => {
        filtered.map(product => {
          if (product.id === cartProduct.id)
            product.amount = cartProduct.amount;
          return product;
        });
        return cartProduct;
      });

      const total = filtered
        .map(product => Number(product.price) * Number(product.amount))
        .reduce((count, price) => (count += price));

      newState.data = filtered;
      newState.total = total;
      return newState;
    }

    default: {
      return state;
    }
  }
}
