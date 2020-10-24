import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding-top: 140px;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  @media screen and (min-width: 1030px) {
    padding-top: 0px;
    flex-direction: row;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  max-width: 100%;
  height: 50vh;
  max-height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: ${colors.ligth};
  animation: leftAnimate 0.8s;

  img {
    max-width: 100%;
    max-height: 90%;
  }

  @media screen and (min-width: 1030px) {
    max-width: 50%;
    height: 100vh;
    align-items: center;

    img {
      max-height: 65%;
    }
  }
`;

export const Description = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${colors.silverLigth};

  @media screen and (min-width: 1030px) {
    max-width: 50%;
    padding: 120px 80px 100px 80px;
  }

  h1 {
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    color: ${colors.dark};
  }

  h2 {
    margin-top: 7px;

    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    text-transform: uppercase;

    color: ${colors.silverDark};
  }

  span {
    margin: 20px 0;

    font-family: Poppins;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;

    color: ${colors.dark};
  }

  small {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;

    color: ${colors.silverDark};
    display: block;
  }

  p {
    overflow: auto;

    margin-bottom: 20px;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;

    color: ${colors.dark};

    @media screen and (min-width: 1030px) {
      max-height: 97px;
    }
  }

  div.textGroup div#productColor {
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background-color: ${props => props.color};
  }

  div.buttonGroup {
    width: 100%;
    display: flex;
    margin-top: 50px;

    button + button {
      margin-left: 7px;
    }

    button#btnCart {
      width: 277px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: bold;
      font-size: 19px;
      line-height: 21px;

      color: ${colors.ligth};
      background: ${colors.blueDark};
    }

    button#btnFav {
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${colors.blueDark};
    }
  }
`;
