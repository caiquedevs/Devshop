import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Footer = styled.footer`
  width: 100%;
  background-color: ${colors.dark};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);

  :before {
    content: '';
    width: 100%;
    height: 10px;

    display: flex;
    background-color: ${colors.blueDark};
  }

  hr {
    opacity: 0.3;
  }

  section {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section span {
    color: ${colors.ligth};
  }

  section p {
    color: #a2a1a7;
  }

  section svg {
    color: #a2a1a7;
    font-size: 25px;

    margin-left: 20px;
    transition: 0.3s;
    cursor: pointer;

    &.fb:hover {
      color: blue;
    }

    &.gh:hover {
      color: black;
    }

    &.ig:hover {
      color: orange;
    }

    &.ld:hover {
      color: blue;
    }
  }

  section ul {
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
  }

  section#sectionOne ul li {
    + li {
      margin-left: 30px;
    }

    a {
      font-size: 15px;
      font-family: ubuntu, sans-serif;
      font-weight: 500;
      text-decoration: none;
      color: ${colors.ligth};
    }
  }
`;
