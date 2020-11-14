import React, { useState, useCallback } from "react";

import { Container, HeroImage, HeroInfo, Aba } from "./styles";
import AmbulanciaContent from "./Components/AmbulanciaContent";
import HospitalContent from "./Components/HospitalContent";

import Logo from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landinghospital.svg";
import ambulanciaIcon from "../../assets/images/ambulancia.svg";
import hospitalIcon from "../../assets/images/hospital.svg";

const Home: React.FC = () => {
  const [content, setContent] = useState(0);
  const [active, setActive] = useState(1);

  const handleSetContent1 = useCallback(() => {
    setContent(0);
    setActive(1);
  }, []);

  const handleSetContent2 = useCallback(() => {
    setContent(1);
    setActive(2);
  }, []);

  return (
    <Container>
      <HeroInfo>
        <div className="logo">
          <img src={Logo} alt="UberCare logo" />
        </div>

        <Aba active={active}>
          <div className="bar">
            <div className="ambulanciaElement" onClick={handleSetContent1}>
              <img src={ambulanciaIcon} alt="Icon" />
              <p>Ganhe</p>
            </div>

            <div className="hospitalElement" onClick={handleSetContent2}>
              <img src={hospitalIcon} alt="Icon" />
              <p>
                Cadastre um <br />
                Hospital
              </p>
            </div>
          </div>

          <div className="content">
            <h1> {content ? <HospitalContent /> : <AmbulanciaContent /> } </h1>
          </div>
        </Aba>
      </HeroInfo>

      <HeroImage>
        <img src={landingImage} alt="UberCare" />
      </HeroImage>
    </Container>
  );
};

export default Home;

/*<h1> { content ? ("2") : ("1") } </h1>
<button onClick={handleSetContent1}> mudar 1 </button>
<button onClick={handleSetContent2}> mudar 2 </button> */
