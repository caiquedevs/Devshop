import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 0px; height: 10px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    position: relative;
    font-family: Archivo;
  }
  .toast-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .Toastify__toast{
    width: 100%;
    max-width: 325px;
    margin-top: 7px;
    margin-right: 7px;
  }

  @keyframes fadeInAnimate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes topAnimate {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes leftAnimate {
    from {
      opacity: 0;
      transform: translate3d(-60px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes rightAnimate {
    from {
      opacity: 0;
      transform: translate3d(60px, 0px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  div.toastify{
    display: flex;
    align-items: center;

    svg{ margin: 0 10px 0 10px;}
  }

  section.active {
    visibility: visible;
    opacity: 1;
  }

  h1 { color: #423F52 }
  span { color: #6E6D6E }
  small { color: #A2A1A7 }



  button {
    width: auto;
    height: auto;
    background: none;
    border: none;
    display: flex;
  }

  button:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }

  a:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1250px;
  padding: 45px 30px 0 30px;
  margin: 0 auto;
`;

export default GlobalStyle;
