import styled from "styled-components";

import confirmBackground from "../../assets/images/confirm-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  background: #fff;
  height: 100%;

  .logoImage {
    margin: 6em 11.5em 0 11.5em;
  }

  .flex {
    display: flex;
    padding: 3.5em;
    margin: 0 8em;
    margin-top: 3em;
    align-items: center;
    justify-content: space-between;

    .info {
      font-weight: 400;
      font-size: 48px;
      width: 50%;

      span {
        margin-top: 1em;
        font-size: 18px;
        line-height: 1.7em;
        display: block;
      }
    }
  }
`;

export const Form = styled.form`
  background: #F8F8F8;
  border-top: 1em #EBEBEB solid;
  width: 450px;
  margin-bottom: -23em;
  position: relative;
  height: 500px;

  

  .btn {
    margin-top: 2.5em;
    padding: 2.5em;
  }
`;

export const Image = styled.div`
  background: #fff url(${confirmBackground}) no-repeat center;
  background-size: cover;
  height: 100%;
`;
