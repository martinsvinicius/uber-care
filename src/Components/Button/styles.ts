import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
  background: #00a7dc;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  color: #FFF;
  padding: 1em !important;

  span {
    flex: 1;
    text-align: center;
  }

  img {
    margin: 0;
  }
`;
