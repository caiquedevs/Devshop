import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/colors';

export const Header = styled.header`
  width: 100%;
  min-height: 50px;
  height: 130px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  z-index: 10;

  a img {
    width: 130px;
  }

  @media screen and (min-width: 1030px) {
    height: auto;

    a img {
      width: auto;
    }
  }

  nav {
    width: 100%;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 10;
  }
  div.buttonGroup {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BtnBackArrow = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  display: ${props => (props.arrow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1030px) {
    margin-right: 30px;
  }
`;

export const BtnFavorite = styled(Link)`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  display: ${props => (props.nofavorite ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1030px) {
    margin-right: 30px;
  }
`;

export const BtnCart = styled(Link)`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  display: ${props => (props.nocart ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${colors.blueDark};

  z-index: 9999;

  @media screen and (min-width: 1030px) {
    margin-right: 30px;
  }

  svg {
    font-size: 16px;
    color: ${colors.ligth};
  }

  div.countCart {
    width: 20px;
    height: 20px;

    display: ${props => (props.active ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -7px;
    right: -7px;

    background-color: red;
    border-radius: 50%;

    font-size: 11px;
    font-family: poppins, sans-serif;
    color: ${colors.ligth};

    animation: fadeInAnimate 0.5s;
  }
`;

export const BtnExit = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// @media screen and (min-width: 992px){}
// @media screen and (min-width: 768px) and (max-width: 991px){}
// @media screen and (min-width: 576px) and (max-width: 767px){}
// @media screen and (min-width: 0px) and (max-width: 575px){}
