import styled from 'styled-components';
import * as colors from '../../../styles/colors';

export const Details = styled.div`
  width: 100%;
  max-width: 417px;
  padding-left: 15px;
`;

export const List = styled.ul`
  width: 100%;
  height: auto;
  padding: 10px 20px;

  list-style: none;
  background: #f5f5f5;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  animation: rightAnimate 0.8s;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  :nth-child(1),
  :nth-child(2) {
    border-bottom: 2px solid #ebebeb;
  }

  div.textGroup {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  div.buttonGroup {
    width: 100%;

    button.btnNext,
    a.btnBackToProduct {
      width: 100%;
      padding: 14px 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: poppins;
      font-size: 14px;
      font-weight: bold;
      color: #fff;

      border: solid 1px #f66c28;
      border-radius: 5px;
      background-color: #f66c28;
    }

    a.btnBackToProduct {
      margin-top: 15px;
      text-decoration: none;

      color: ${colors.blueDark};
      border-color: ${colors.blueDark};
      background-color: transparent;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #667;
    font-size: 20px;
    margin-right: 10px;
  }

  h3 {
    margin: 18px 0;

    display: flex;

    font-size: 16px;
    font-weight: bold;
    color: #667;
    letter-spacing: -0.4px;
    line-height: 20px;
    text-transform: uppercase;
  }

  p {
    color: #999;
    font-size: 14px;
    letter-spacing: -0.3px;
    line-height: 15px;
    text-align: center;
  }
`;
