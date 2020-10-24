import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiHeartsFill } from 'react-icons/ri';
import * as actions from '../../store/modules/favorites/actions';

import { Container } from '../../styles';
import { Main, List, ItemList, EmptyFavorites } from './styled';

import Header from '../../components/HeaderComponent';
import Footer from '../../components/FooterComponent';

export default function LoginPage() {
  const favorites = useSelector(state => state.favorites.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickRemoveFavorite = id => {
    dispatch(actions.deleteFavorite(id));
  };

  if (favorites.length <= 0) {
    return (
      <>
        <Container>
          <Header arrow noFavorite />

          <Main>
            <EmptyFavorites>
              <RiHeartsFill size="60px" color="#222831" />
              <h2>Sua lista de favoritos está vazia</h2>
              <p>
                Adicione produtos clicando no botão "Favoritar” na página de
                produtos.
              </p>
              <Link to="/category/new in">Voltar para página inicial</Link>
            </EmptyFavorites>
          </Main>
        </Container>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <Header arrow noFavorite />

        <Main>
          <small>all favorites</small>
          <h1>The products you liked</h1>
          <List>
            {favorites &&
              favorites.map(product => (
                <ItemList key={product.id}>
                  <figure>
                    <Link to={`/category/${product.category}/${product.id}`}>
                      <img src={product.img_url} alt="product" />
                    </Link>
                    <figcaption>
                      <span>{product.name}</span>
                      <small>
                        {Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      </small>
                    </figcaption>
                  </figure>

                  <div className="btnGroup">
                    <button
                      onClick={() =>
                        history.push(
                          `/category/${product.category}/${product.id}`
                        )
                      }
                      type="button"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleClickRemoveFavorite(product.id)}
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </ItemList>
              ))}
          </List>
        </Main>
      </Container>

      <Footer />
    </>
  );
}
