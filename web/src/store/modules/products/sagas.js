import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import * as actions from './actions';
import * as types from '../types';

function* getProducts({ payload }) {
  try {
    // Pega a categoria e os favoritos enviados por parametro
    const { category, favorites } = payload;

    // Url da requisiçaõ
    const url = category ? `/category/${category}` : '/';

    // Faz requisição buscando produtos pela categoria
    const response = yield call(api.get, url);

    // Dispara uma nova ação enviando categoria response e favoritos
    yield put(
      actions.productsSuccess({
        data: response.data,
        category,
        favorites,
      })
    );
  } catch (e) {
    const { history } = payload;
    history.push('/PageNotFound');
    console.log('Erro ao listar produtos', e.response.data);
  }
}

export default all([takeLatest(types.PRODUCTS_REQUEST, getProducts)]);
