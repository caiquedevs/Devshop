import { combineReducers } from 'redux';

import cart from './cart/reducer';
import authCart from './cart/authReducer';
import favorites from './favorites/reducer';
import products from './products/reducer';

export default combineReducers({
  cart,
  authCart,
  favorites,
  products,
});
