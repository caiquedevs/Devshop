import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  margin-top: 52px;
  padding-bottom: 100px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Banner = styled.section`
  width: 100%;
  height: 340px;
  padding: 0 100px;
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.blueDark};
  border-radius: 40px;

  animation: fadeInAnimate 0.8s;

  div.textArea {
    h1 {
      font-family: Poppins;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 30px;
      line-height: 45px;
      color: ${colors.dark};
    }

    button {
      margin-top: 30px;

      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: #000000;
    }
  }

  /* figure img {
    left: 25px;
    top: -15px;
  } */
`;
