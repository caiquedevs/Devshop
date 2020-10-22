import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CART: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);

      const idsProducts = newState.data.map(item => item.id);

      if (!idsProducts.includes(action.payload.id)) {
        copyArray.push({ id: action.payload.id, amount: 1 });
        toast.success(' 🛒 Adicionado ao carrinho');
      } else {
        toast.warn(' 🛒 Produto ja adicionado ao carrinho');
      }

      newState.data = [...copyArray];
      console.log('CART', newState.data);
      return newState;
    }

    case types.DELETE_CART: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);

      const filteredForDelete = copyArray.filter(
        product => product.id !== action.payload
      );

      newState.data = filteredForDelete;
      return newState;
    }

    case types.PLUS_AMOUNT: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);

      const id = action.payload;

      // eslint-disable-next-line array-callback-return
      copyArray.map(product => {
        if (product.id === id) {
          product.amount += 1;
        }
      });

      newState.data = copyArray;
      return newState;
    }

    case types.LESS_AMOUNT: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);

      const id = action.payload;

      // eslint-disable-next-line array-callback-return
      copyArray.map(product => {
        if (product.id === id && product.amount > 1) {
          product.amount -= 1;
        }
      });

      newState.data = copyArray;
      return newState;
    }

    default: {
      return state;
    }
  }
}
