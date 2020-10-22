import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Figure = styled.figure`
  width: 100%;
  max-width: 50%;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.ligth};
  animation: leftAnimate 0.8s;

  img {
    max-width: 100%;
    max-height: 65%;
  }
`;

export const Description = styled.section`
  width: 100%;
  max-width: 50%;
  height: 100vh;
  max-height: 100vh;
  padding: 120px 80px 100px 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${colors.silverLigth};

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
    max-height: 97px;
    overflow: auto;

    margin-bottom: 20px;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;

    color: ${colors.dark};
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
