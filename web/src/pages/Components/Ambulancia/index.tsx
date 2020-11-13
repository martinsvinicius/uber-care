import React from "react";

import { Container } from './styles';
import ambulanciaIcon from '../../../assets/images/ambulancia.svg';

interface AmbulanciaProps {
  active: Number;
}

function Ambulancia(props: AmbulanciaProps) {
  return (
    <Container className="element" active={props.active}>
      <img src={ambulanciaIcon} alt="Icon" />
      <p>Ganhe</p>
    </Container>
  );
};

export default Ambulancia;
