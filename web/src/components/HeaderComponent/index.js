import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

import { Header, BtnBackArrow, BtnFavorite, BtnCart, BtnExit } from './styled';
import SearchBar from '../SearchComponent';

import logo from '../../assets/logo.svg';
import backArrowIcon from '../../assets/backArrow.svg';
import Favorite from '../../assets/favorite';
import exit from '../../assets/exit.svg';

function HeaderComponent({ arrow, noFavorite, noCart, noSearch }) {
  const countCart = useSelector(state => state.cart.data.length);
  const history = useHistory();

  return (
    <Header>
      <Link to="/category/new in">
        <img src={logo} alt="logo" />
      </Link>

      <SearchBar noSearch={noSearch} />

      <div className="buttonGroup">
        <BtnBackArrow
          arrow={arrow}
          type="button"
          onClick={() => history.goBack()}
        >
          <img src={backArrowIcon} alt="back arrow" />
        </BtnBackArrow>

        <BtnFavorite to="/favorites" nofavorite={noFavorite ? 1 : 0}>
          <Favorite />
        </BtnFavorite>

        <BtnCart to="/cart" nocart={noCart ? 1 : 0} active={countCart}>
          <RiShoppingCartLine />
          <div className="countCart">{countCart}</div>
        </BtnCart>

        <BtnExit type="button">
          <img src={exit} alt="exit" />
        </BtnExit>
      </div>
    </Header>
  );
}

export default HeaderComponent;
