import styled from "styled-components";

interface ContainerProps {
  active: Number;
}

export const Container = styled.div<ContainerProps>`
  text-align: center;
  padding: 1em;
  margin: 0 2em;
  border-bottom: ${(props) => props.active ? "3px solid #000000" : "none"};
  cursor: pointer;

  p {
    margin-top: 0.4em;
    font-weight: bold;
  }
`;
