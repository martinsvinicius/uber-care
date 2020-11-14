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

interface AbaProps {
  active: Number;
}

export const Aba = styled.div<AbaProps>`
  margin-top: 5em !important;
  background: #fff;
  margin: auto;
  width: 55%;

  .bar {
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    max-height: 6.8em;
  }

  .ambulanciaElement {
    text-align: center;
    padding: 1em;
    margin: 0.2em 0;
    margin-left: 3em;
    border-bottom: ${(props) => (props.active === 1 && ("4px solid #000000"))};
    cursor: pointer;

    p {
      margin-top: 0.4em;
      font-weight: bold;
    }
  }

  .hospitalElement {
    text-align: center;
    padding: 1em;
    margin: 0.2em 0;
    margin-right: 3em;
    border-bottom: ${(props) => (props.active === 2 && ("4px solid #000000"))};
    cursor: pointer;

    p {
      margin-top: 0.4em;
      font-weight: bold;
    }
  }
`;

export const HeroImage = styled.div`
  height: 100vh;
  width: 50%;
  background: #00a7dc;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    
    width: 55%;
  }
`;
