import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/colors';

export const Header = styled.header`
  width: 100%;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 10;

  div.buttonGroup {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BtnBackArrow = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 30px;

  display: ${props => (props.arrow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const BtnFavorite = styled(Link)`
  width: 30px;
  height: 30px;
  margin-right: 30px;

  display: ${props => (props.nofavorite ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
`;

export const BtnCart = styled(Link)`
  width: 30px;
  height: 30px;
  margin-right: 30px;

  display: ${props => (props.nocart ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${colors.blueDark};

  z-index: 9999;

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
