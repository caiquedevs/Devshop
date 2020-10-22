import React from 'react';
import { useHistory } from 'react-router-dom';

import { Aside, List, ItemList } from './styled';

import Home from '../../assets/home';
import Flash from '../../assets/flash';
import computer from '../../assets/computer.png';
import chair from '../../assets/chair.png';
import shirt from '../../assets/shirt.png';

export default function AsideComponent({ category }) {
  const history = useHistory();

  return (
    <Aside>
      <List>
        <ItemList
          onClick={() => history.push('/')}
          activeCategory={category === ''}
        >
          Home <Home category={category} />
        </ItemList>
        <ItemList
          onClick={() => history.push('/category/new in')}
          activeCategory={category === 'new in'}
        >
          New in <Flash category={category} />
        </ItemList>
        <ItemList
          onClick={() => history.push('/category/computers')}
          activeCategory={category === 'computers'}
          paddingR="16px"
        >
          Computers <img src={computer} alt="Computer" />
        </ItemList>
        <ItemList
          onClick={() => history.push('/category/chairs')}
          activeCategory={category === 'chairs'}
          paddingR="19px"
        >
          Chairs <img src={chair} alt="Chair" />
        </ItemList>
        <ItemList
          onClick={() => history.push('/category/shirts')}
          activeCategory={category === 'shirts'}
          paddingR="13px"
        >
          Shirts <img src={shirt} alt="Shirt" />
        </ItemList>
      </List>
    </Aside>
  );
}
