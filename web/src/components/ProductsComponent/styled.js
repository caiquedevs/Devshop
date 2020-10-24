import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  margin-top: 30px;

  @media screen and (min-width: 1030px) {
    margin-top: 0;
    margin-left: 60px;
  }

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  list-style: none;

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1030px) {
    flex-direction: row;
  }
`;

export const ItemList = styled.li`
  width: 100%;
  height: auto;
  margin-bottom: 25px;

  animation: fadeInAnimate 1s;

  @media screen and (min-width: 1200px) {
    margin-right: 0;
  }
  @media screen and (min-width: 1031px) and (max-width: 1199px) {
    margin-right: 25px;
  }

  @media screen and (min-width: 1030px) {
    width: auto;
  }

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

    cursor: none;

    @media screen and (min-width: 1030px) {
      cursor: pointer;
    }
  }
`;

export const BtnProduct = styled.button`
  width: 100%;
  height: 275px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.ligth};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  @media screen and (min-width: 1030px) {
    width: 199px;
  }

  :hover {
    filter: none;
  }

  img {
    max-width: 90%;
    max-height: 75%;
  }
`;

export const BtnFavorite = styled.button``;
