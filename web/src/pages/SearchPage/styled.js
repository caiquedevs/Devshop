import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  display: flex;
  margin-top: 42px;

  flex-direction: column;
  align-items: center;

  > small {
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    color: ${colors.silverDark};
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    color: ${colors.blueDark};
  }
`;

export const List = styled.ul`
  width: 100%;
  max-width: 1040px;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  list-style: none;
`;

export const ItemList = styled.li`
  width: auto;
  height: auto;
  margin: 0 30px 26px;
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

export const EmptyFavorites = styled.section`
  width: 100%;
  padding-top: 52px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: poppins, sans-serif;
    font-size: 20px;
    color: ${colors.blueDark};
  }

  p {
    margin-bottom: 30px;
    font-family: poppins, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #667;
  }

  a {
    width: 280px;
    padding: 13px 6px;

    color: #39acdf;
    font-family: poppins, sans-serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: -0.4px;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    border: solid 1px #39acdf;
    border-radius: 5px;
    background-color: transparent;
  }
`;
