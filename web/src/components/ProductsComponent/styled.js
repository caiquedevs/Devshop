import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  margin-left: 60px;

  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    color: ${colors.blueDark};
    text-transform: uppercase;
    transition: 2s all;
  }

  span {
    display: block;
    margin-top: 8px;
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    color: ${colors.blueDark};
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  list-style: none;
`;

export const ItemList = styled.li`
  width: auto;
  height: auto;
  margin-bottom: 26px;

  animation: fadeInAnimate 1s;

  button#btnFavorite {
    position: absolute;
    bottom: 20px;
    left: 20px;

    width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: #e8e8e8;
  }
`;

export const BtnProduct = styled.button`
  width: 199px;
  height: 275px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.ligth};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  :hover {
    filter: none;
  }

  img {
    max-width: 90%;
    max-height: 75%;
  }
`;

export const BtnFavorite = styled.button``;
