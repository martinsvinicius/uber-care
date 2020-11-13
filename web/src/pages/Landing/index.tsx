import React from "react";

import { Container, HeroImage, HeroInfo, Aba } from "./styles";
import Ambulancia from '../Components/Ambulancia';
import Hospital from '../Components/Hospital';

import Logo from '../../assets/images/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <HeroInfo>
        <div className="logo">
          <img src={Logo} alt="UberCare logo"/>
        </div>

        <Aba>
          <div className="box">
            <div className="bar">
              <Ambulancia active={1}/>
              <Hospital active={0} />
            </div>
          </div>
        </Aba>
      </HeroInfo>

      <HeroImage>
        <h1>image</h1>
      </HeroImage>
    </Container>
  );
};

export default Home;
