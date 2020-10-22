import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Section, List, ItemList, BtnProduct } from './styled';

import BtnFavorite from '../BtnFavoriteComponent';

export default function ProductsComponent({ category }) {
  const products = useSelector(state => state.products.data);
  const history = useHistory();

  return (
    <Section>
      <h1>{category || 'Home'}</h1>
      <span>View more</span>

      <List>
        {products &&
          products.map(product => (
            <ItemList key={product.id}>
              <BtnProduct
                type="button"
                onClick={() =>
                  history.push(`/category/${product.category}/${product.id}`)
                }
              >
                <img src={product.img_url} alt="product" />
              </BtnProduct>

              <button id="btnFavorite" type="button">
                <BtnFavorite product={product} />
              </button>
            </ItemList>
          ))}
      </List>
    </Section>
  );
}
