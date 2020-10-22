import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCart from '../../../store/modules/cart/actions';

import { Products, List, ListItem, Footer, TrashButton } from './styled';

import btnPlus from '../../../assets/btnplus.svg';
import btnLess from '../../../assets/btnless.svg';

export default function ProductsComponent() {
  const authCart = useSelector(state => state.authCart.data);
  const dispatch = useDispatch();

  const handleClickDeleteProduct = id => {
    dispatch(actionsCart.removeCart(id));
  };

  const handleClickPlusAmount = id => {
    dispatch(actionsCart.plusAmount(id));
  };

  const handleClickLessAmount = id => {
    dispatch(actionsCart.lessAmount(id));
  };

  return (
    <Products>
      <h1>Meu carrinho</h1>

      {authCart &&
        authCart.map(product => (
          <List key={product.id}>
            <ListItem>
              <figure>
                <Link to={`/category/${product.category}/${product.id}`}>
                  <img src={product.img_url} alt="product" />
                </Link>
                <figcaption>
                  <h3>{product.name}</h3>
                  <p>
                    Ref: <small>#{product.id}</small>
                  </p>
                  <p>Vendido por Devshop</p>
                  <p>Entregue por Devshop</p>

                  <span>
                    <strong>Cor: </strong>
                    {product.colors}
                  </span>
                  <span>
                    <strong>Tamanho: </strong>Unico
                  </span>
                </figcaption>
              </figure>

              <Footer>
                <div className="amountGroup">
                  <span>Quantidade: </span>

                  <button
                    onClick={() => handleClickLessAmount(product.id)}
                    className="btnLess"
                    type="button"
                  >
                    <img src={btnLess} alt="less" />
                  </button>

                  <span className="amount">{product.amount}</span>

                  <button
                    onClick={() => handleClickPlusAmount(product.id)}
                    className="btnPlus"
                    type="button"
                  >
                    <img src={btnPlus} alt="plus" />
                  </button>
                </div>
                <span>
                  {Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price)}
                </span>
              </Footer>

              <TrashButton
                type="button"
                onClick={() => handleClickDeleteProduct(product.id)}
              >
                <VscTrash />
              </TrashButton>
            </ListItem>
          </List>
        ))}
    </Products>
  );
}
