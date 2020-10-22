import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const SearchBar = styled.form`
  width: 100%;
  max-width: 599px;
  margin: 0 30px;
  display: ${props => (props.noSearch ? 'none' : 'flex')};

  input {
    width: 100%;
    height: 50px;
    padding: 0 30px;

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
