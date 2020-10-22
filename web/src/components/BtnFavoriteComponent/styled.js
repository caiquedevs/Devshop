import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50%  {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  input {
    appearance: none;
  }

  input:checked + svg path {
    fill: #ed4956;
  }

  input:checked + svg {
    animation: ${Pulse} 0.25s;
  }

  /* svg path:nth-child(1) {
    fill: red;
  } */
`;
