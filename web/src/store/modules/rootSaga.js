import { all } from 'redux-saga/effects';

import products from './products/sagas';
import authCart from './cart/sagas';

export default function* rootSaga() {
  return yield all([products, authCart]);
}
