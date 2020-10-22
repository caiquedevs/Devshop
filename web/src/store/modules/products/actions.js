import * as types from '../types';

export function productsRequest(payload) {
  return {
    type: types.PRODUCTS_REQUEST,
    payload,
  };
}

export function productsSuccess(payload) {
  return {
    type: types.PRODUCTS_SUCCESS,
    payload,
  };
}

export function productsFailure() {
  return {
    type: types.PRODUCTS_FAILURE,
  };
}
