import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string,
  text?: string,
}

const Input = (props: InputProps) => {
  return <Container backgroundColor={props.bgColor}  { ...props } >{props.text}</Container>;
}

export default Input;
