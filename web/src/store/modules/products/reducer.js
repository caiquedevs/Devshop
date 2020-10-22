import * as types from '../types';

const initialState = {
  data: [],
  showProduct: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS: {
      const newState = { ...state };
      const { data, favorites } = action.payload;

      const idsFavorites = favorites.map(fav => fav.id);

      data.map(product => {
        if (idsFavorites.includes(product.id)) product.favorite = 1;
        return 0;
      });

      console.log('products favorites', data);

      newState.data = data;
      return newState;
    }

    default: {
      return state;
    }
  }
}
