import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import * as actions from './actions';
import * as types from '../types';

function* getProducts({ payload }) {
  try {
    // Faz requisição buscando todos produtos
    const response = yield call(api.get, '/');

    // Dispara uma nova ação enviando categoria response e favoritos
    yield put(
      actions.authCartSuccess({
        data: response.data,
        cart: payload.cart,
      })
    );
  } catch (e) {
    const { history } = payload;
    history.push('/PageNotFound');
    console.log('Erro ao buscar produtos', e.response.data);
  }
}

export default all([takeLatest(types.AUTH_CART_REQUEST, getProducts)]);
