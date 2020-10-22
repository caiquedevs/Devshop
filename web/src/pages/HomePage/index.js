import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/modules/products/actions';

import { Container } from '../../styles';
import { Main, Banner } from './styled';

import imgBanner from '../../assets/bk.png';

import Header from '../../components/HeaderComponent';
import Aside from '../../components/AsideComponent';
import Products from '../../components/ProductsComponent';
import Footer from '../../components/FooterComponent';

export default function LoginPage({ match }) {
  const favorites = useSelector(state => state.favorites.data);
  const cart = useSelector(state => state.cart.data);
  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const { category = '' } = match.params;

  useEffect(() => {
    dispatch(actions.productsRequest({ category, favorites, cart, history }));
  }, [cart, category, dispatch, favorites, history]);

  if (products.length <= 0) return <></>;

  return (
    <>
      <Container>
        <Header />
        <Banner>
          <figure>
            <img src={imgBanner} alt="imgBanner" />
          </figure>
        </Banner>

        <Main>
          <Aside category={category} />
          <Products category={category} />
        </Main>
      </Container>
      <Footer />
    </>
  );
}
