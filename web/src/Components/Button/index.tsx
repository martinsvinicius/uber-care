import React from "react";
import { LinkProps } from "react-router-dom";

import { Container } from "./styles";

interface ButtonProps extends LinkProps {
  text: string;
  iconURL?: string;
  iconALT?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Container {...props}>
      <span>{props.text}</span>
      {props.iconURL ? <img src={props.iconURL} alt={props.iconALT} /> : ""}
    </Container>
  );
};

export default Button;
