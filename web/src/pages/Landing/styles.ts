import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroInfo = styled.div`
  height: 100vh;
  width: 50%;
  background: #f6f6f6;

  .logo {
    text-align: center;
    margin-top: 5em;

    p {
      font-size: 50px;
      color: #000000;
      font-weight: bold;

      span {
        display: block;
        color: #00a7dc;
      }
    }
  }
`;

export const Aba = styled.div`
  margin-top: 5em;

  .box {
    background: #fff;
    margin: auto;
    width: 60%;

    .bar {
      background: #fafafa;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const HeroImage = styled.div`
  height: 100vh;
  width: 50%;
  background: #00a7dc;
`;
