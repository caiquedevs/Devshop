/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineLock } from 'react-icons/ai';

import { Details, List, ListItem, Footer } from './styled';

export default function DetailsComponent({ products }) {
  const authCart = useSelector(state => state.authCart);

  return (
    <Details>
      <h1>Resumo da compra</h1>

      <List>
        <ListItem>
          <span>Subtotal ({authCart.data.length} itens)</span>
          <strong>
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(authCart.total)}
          </strong>
        </ListItem>
        <ListItem>
          <span>Descontos</span>
          <strong>R$ 0,00</strong>
        </ListItem>
        <ListItem>
          <span>Valor total</span>
          <div className="textGroup">
            <strong>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(authCart.total)}
            </strong>
            <small>
              Em até 10x de{' '}
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(authCart.total / 10)}{' '}
              sem juros
            </small>
          </div>
        </ListItem>
        <ListItem>
          <div className="buttonGroup">
            <button className="btnNext" type="button">
              CONTINUAR
            </button>
            <Link
              to="/category/new in"
              className="btnBackToProduct"
              type="button"
            >
              ESCOLHER MAIS PRODUTOS
            </Link>
          </div>
        </ListItem>
      </List>

      <Footer>
        <h3>
          <AiOutlineLock />
          COMPRA SEGURA
        </h3>
        <p>
          Você poderá incluir seus cupons e vale-compras no momento da escolha
          da forma de pagamento
        </p>
      </Footer>
    </Details>
  );
}
