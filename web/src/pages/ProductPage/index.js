import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as actionsCart from '../../store/modules/cart/actions';

import { Container } from '../../styles';
import { Main, Figure, Description } from './styled';

import Header from '../../components/HeaderComponent';
import BtnFavorite from '../../components/BtnFavoriteComponent';

export default function ProductPage({ match }) {
  const favorites = useSelector(state => state.favorites.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    const { category, idproduct } = match.params;
    (async () => {
      const url = `/category/${category}/${idproduct}`;
      const idsFavorites = favorites.map(fav => fav.id);

      await api
        .get(url)
        .then(response => {
          if (idsFavorites.includes(response.data.id)) {
            response.data.favorite = 1;
          }
          setProduct(response.data);
        })
        .catch(error => {
          history.push('/PageNotFound');
          console.log('Erro ao buscar este produto', error.response.data);
        });
    })();
  }, [favorites, history, match.params]);

  const handleClickAddToCart = () => {
    dispatch(actionsCart.addCart(product));
  };

  if (!product) return <></>;

  return (
    <>
      <Container>
        <Header arrow noSearch />
      </Container>
      <Main>
        <Figure>
          <img src={product.img_url} alt="product" />
        </Figure>

        <Description color={product.colors}>
          <div className="textGroup">
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
          </div>

          <span>
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </span>

          <div className="textGroup">
            <small>Information</small>
            <p>{product.information}</p>
          </div>

          <div className="textGroup">
            <small>Color</small>
            <div id="productColor" />
          </div>

          <div className="buttonGroup">
            <button onClick={handleClickAddToCart} id="btnCart" type="button">
              ADD TO CART
            </button>
            <button id="btnFav" type="button">
              <BtnFavorite product={product} />
            </button>
          </div>
        </Description>
      </Main>
    </>
  );
}
