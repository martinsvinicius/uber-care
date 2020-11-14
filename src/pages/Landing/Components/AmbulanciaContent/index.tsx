import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const AmbulanciaContent: React.FC = () => {
  return (
    <Container>
      <span>Seja um UberCare e Ganhe</span>

      <p>Ajude os hospitais com a UberCare.</p>

      <Link to="/ubercare">Cadastre-se para começar</Link>
    </Container>
  );
};

export default AmbulanciaContent;
