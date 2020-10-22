/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaOpencart } from 'react-icons/fa';
import * as actionsCart from '../../store/modules/cart/actions';

import { Container } from '../../styles';
import { Main, EmptyCart } from './styled';

import Header from '../../components/HeaderComponent';
import Products from '../../components/CartComponent/Products';
import Details from '../../components/CartComponent/Details';

export default function CartPage() {
  const cart = useSelector(state => state.cart.data);
  const authCart = useSelector(state => state.authCart.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(actionsCart.authCartRequest({ cart, history }));
  }, [cart, dispatch, history]);

  if (cart.length <= 0) {
    return (
      <Container>
        <Header arrow noCart />

        <Main>
          <EmptyCart>
            <FaOpencart size="60px" color="#222831" />
            <h2>Seu carrinho está vazio</h2>
            <p>
              Adicione produtos clicando no botão “Comprar” na página de
              produto.
            </p>
            <Link to="/category/new in">Voltar para página inicial</Link>
          </EmptyCart>
        </Main>
      </Container>
    );
  }

  return (
    <Container>
      <Header arrow noCart />

      <Main>
        <Products />
        <Details />
      </Main>
    </Container>
  );
}
