import React from "react";

import { Container } from './styles';
import hospitalIcon from '../../../assets/images/hospital.svg';

interface HospitalProps {
  active: Number;
}

function Hospital(props: HospitalProps) {
  return (
    <Container className="element" active={props.active}>
      <img src={hospitalIcon} alt="Icon" />
      <p>Cadastre um Hospital</p>
    </Container>
  );
};

export default Hospital;
