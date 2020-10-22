import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Aside = styled.aside`
  width: 100%;
  max-width: 235px;
`;

export const List = styled.ul`
  width: auto;
  height: auto;
  list-style: none;
`;

export const ItemList = styled.li`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  padding-right: ${props => (props.paddingR ? props.paddingR : '30px')};

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  text-transform: uppercase;

  color: ${props =>
    props.activeCategory ? `${colors.ligth}` : `${colors.dark}`};
  border-radius: 10px;
  background-color: ${props =>
    props.activeCategory ? `${colors.blueDark}` : `${colors.silverLigth}`};
  cursor: pointer;

  + li {
    margin-top: 17px;
  }

  &:nth-child(1) {
    height: 48px;
  }
`;
