import * as types from '../types';

export function createFavorite(payload) {
  return {
    type: types.CREATE_FAVORITE,
    payload,
  };
}

export function deleteFavorite(payload) {
  return {
    type: types.DELETE_FAVORITE,
    payload,
  };
}
