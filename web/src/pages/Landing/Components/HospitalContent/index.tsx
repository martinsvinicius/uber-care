import React from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

const HospitalContent: React.FC = () => {
  return (
    <Container>
      <span>
        Participe <br /> do UberCare
      </span>

      <p>Receba ajuda com o transporte de seus pacientes.</p>

      <Link to="/hospital">Cadastre-se para começar</Link>
    </Container>
  );
};

export default HospitalContent;
