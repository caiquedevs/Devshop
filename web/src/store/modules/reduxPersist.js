import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'DEVSHOP',
      storage,
      whitelist: ['favorites', 'cart'],
    },
    reducers
  );
  return persistedReducers;
};
