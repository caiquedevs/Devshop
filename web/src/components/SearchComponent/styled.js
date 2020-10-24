import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const SearchBar = styled.form`
  width: 100%;
  margin: 0;
  display: ${props => (props.noSearch ? 'none' : 'flex')};

  position: absolute;
  bottom: -55px;

  @media screen and (min-width: 1030px) {
    max-width: 599px;
    margin: 0 30px;
    position: relative;
    bottom: initial;
  }

  input {
    width: 100%;
    height: 50px;
    padding-left: 30px;
    padding-right: 50px;

    border: none;
    border-radius: 5px;
    background: ${colors.silverLigth};

    ::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      color: #b1b1b1;
    }
  }

  button {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
  }
`;
