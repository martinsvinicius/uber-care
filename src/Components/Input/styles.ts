import styled from 'styled-components';

interface InputProps {
  backgroundColor?: string,
  display?: string,
}

export const Container = styled.input<InputProps>`
  border: 1px solid #EBEBEB;
  width: 360px;
  height: 50px;
  background: ${(props) => props.backgroundColor ? props.backgroundColor : "#FFFFFF"};
  padding: 1.4em;
  font-size: 14px;
  color: #BABABA;
  font-weight: normal;

  :hover {
    outline-color: #000000;
    border-color: #000000;
  }
`;
