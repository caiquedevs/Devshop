/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RiSearchEyeLine } from 'react-icons/ri';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from '../../styles';
import { Section, List, ItemList, BtnProduct, EmptyFavorites } from './styled';

import Header from '../../components/HeaderComponent';
import BtnFavorite from '../../components/BtnFavoriteComponent';

function SearchPage({ match }) {
  const favorites = useSelector(state => state.favorites.data);
  const history = useHistory();

  const [products, setProducts] = useState(false);

  useEffect(() => {
    const { param } = match.params;
    (async () => {
      const url = `/search/${param}`;
      const idsFavorites = favorites.map(fav => fav.id);

      await api
        .get(url)
        .then(response => {
          response.data.map(product => {
            if (idsFavorites.includes(product.id)) product.favorite = 1;
          });
          console.log(response.data);
          setProducts(response.data);
        })
        .catch(error => {
          history.push('/PageNotFound');
          console.log('Erro ao buscar este produto', error.response.data);
        });
    })();
  }, [favorites, history, match.params]);

  if (products.length <= 0) {
    return (
      <Container>
        <Header arrow />

        <EmptyFavorites>
          <RiSearchEyeLine size="60px" color="#222831" />
          <h2>Nenhum produto encontrado</h2>
          <p>Pesquise por outro produto ou volte para a pagina inicial</p>
          <Link to="/category/new in">Voltar para página inicial</Link>
        </EmptyFavorites>
      </Container>
    );
  }

  return (
    <Container>
      <Header arrow />

      <Section>
        <small>{match.params.param}</small>
        <h1>All products found</h1>

        <List>
          {console.log(products)}
          {products.length > 0 &&
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
    </Container>
  );
}

export default SearchPage;
