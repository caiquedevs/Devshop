import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  padding-top: 32px;

  display: flex;
  justify-content: space-between;

  h1 {
    margin-bottom: 20px;
    font-size: 23px;
    color: #423f52;
  }
`;

export const EmptyCart = styled.section`
  width: 100%;
  padding-top: 20px;

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
