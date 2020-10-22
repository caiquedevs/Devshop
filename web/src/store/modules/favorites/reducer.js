import * as types from '../types';

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_FAVORITE: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);
      copyArray.push(action.payload);

      newState.data = [...copyArray];
      console.log('adicionou', newState.data);
      return newState;
    }

    case types.DELETE_FAVORITE: {
      const newState = { ...state };
      const copyArray = Array.from(newState.data);

      const filteredForDelete = copyArray.filter(
        product => product.id !== action.payload
      );

      newState.data = filteredForDelete;

      console.log('deletou', newState);
      return newState;
    }

    default: {
      return state;
    }
  }
}
