import styled from 'styled-components';
import * as colors from '../../../styles/colors';

export const Products = styled.section`
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 675px) {
    max-width: 65%;
    margin: 0 auto;
    padding-right: 15px;
  }
`;

export const List = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;

  div.selected {
    background: pink;
    animation: leftAnimate 0.8s;
  }

  border: 1px solid #e9e9e9;
  border-radius: 5px;
  background: ${colors.ligth};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1030px) {
    animation: leftAnimate 0.8s;
  }

  figure {
    padding-right: 0px;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1030px) {
      padding-right: 100px;
      flex-direction: row;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a:hover {
      filter: brightness(1);
    }

    img {
      max-height: 135px;
    }

    figcaption {
      padding: 0 15px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 1030px) {
        padding: 0px;
        margin-left: 25px;
        margin-top: 0;
      }

      h3 {
        font-family: poppins;
        font-size: 16px;
        font-weight: bold;
        color: ${colors.blueDark};
        word-break: break-all;

        @media screen and (min-width: 1030px) {
          word-break: normal;
        }
      }

      p {
        margin-bottom: 5px;
        font-size: 12px;
        color: #667;
        font-family: poppins;

        small {
          color: #999999;
        }
      }

      span {
        margin-bottom: 5px;
        font-size: 12px;

        strong {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding-top: 20px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 2px solid #eeeeee;

  div.amountGroup {
    display: flex;
    align-items: center;

    span:nth-child(1) {
      display: none;

      @media screen and (min-width: 1030px) {
        display: block;
      }
    }

    button.btnLess {
      margin-left: 10px;
    }

    span.amount {
      width: 36px;
      height: 36px;
      margin: 0 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 12px;
      font-weight: 600;
      text-align: center;

      border-radius: 5px;
      border: 1px solid #dfdfdf;
      cursor: default;
    }
  }
`;

export const TrashButton = styled.button`
  width: auto;
  height: auto;

  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    font-size: 20px;
  }
`;
