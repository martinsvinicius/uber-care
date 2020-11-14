import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  max-height: 400px;

  span {
    font-weight: 500;
    font-style: normal;
    font-size: 48px;
  }

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    margin-top: 1.5em;
  }

  a {
    outline: none;
    border: none;

    font-weight: 500;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    margin-top: 3em;
    background: #000;
    color: #FFF;
    padding: 0.8em;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background: #333333;
  }
`;
