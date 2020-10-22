import React from 'react';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';
import Header from '../../components/HeaderComponent';

import { Container } from '../../styles';
import { Main, EmptyData } from './styled';

function Page404() {
  return (
    <Container>
      <Header arrow noFavorite />

      <Main>
        <EmptyData>
          <BiError size="60px" color="#222831" />
          <h2>Não encontramos oque estava procurando</h2>
          <p>Por favor volte a pagina inicial e tente novamente</p>
          <Link to="/category/new in">Voltar para página inicial</Link>
        </EmptyData>
      </Main>
    </Container>
  );
}

export default Page404;
