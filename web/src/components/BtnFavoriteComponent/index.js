import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/favorites/actions';

import { Label } from './styled';
import Favorite from '../../assets/favorite';

export default function BtnFavoriteComponent({ product }) {
  const dispatch = useDispatch();

  const handleChange = (e, item) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      toast.dark('❤️ Produto favoritado', { autoClose: 1500 });
      dispatch(actions.createFavorite(item));
      return 0;
    }

    dispatch(actions.deleteFavorite(item.id));
  };

  return (
    <Label htmlFor={product.id}>
      <input
        type="checkbox"
        name="favorite"
        id={product.id || 'false'}
        checked={product.favorite || 0}
        onChange={e => handleChange(e, product)}
      />
      <Favorite />
    </Label>
  );
}
