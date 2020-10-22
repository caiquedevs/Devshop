import * as types from '../types';

export function addCart(payload) {
  return {
    type: types.ADD_CART,
    payload,
  };
}

export function removeCart(payload) {
  return {
    type: types.DELETE_CART,
    payload,
  };
}

export function authCartRequest(payload) {
  return {
    type: types.AUTH_CART_REQUEST,
    payload,
  };
}

export function authCartSuccess(payload) {
  return {
    type: types.AUTH_CART_SUCCESS,
    payload,
  };
}

export function authCartFailure(payload) {
  return {
    type: types.AUTH_CART_FAILURE,
    payload,
  };
}

export function plusAmount(payload) {
  return {
    type: types.PLUS_AMOUNT,
    payload,
  };
}

export function lessAmount(payload) {
  return {
    type: types.LESS_AMOUNT,
    payload,
  };
}
