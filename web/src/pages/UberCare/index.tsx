import React from "react";

import Input from "../../Components/Input";
import Button from '../../Components/Button';

import Logo from "../../assets/images/logoUberCare.svg";
import nextIcon from '../../assets/images/next.svg';

import { Container, Content, Image, Form } from "./styles";

const UberCare: React.FC = () => {
  return (
    <Container>
      <Content>
        <img className="logoImage" src={Logo} alt="UberCare Logo" />
        <div className="flex">
          <div className="info">
            <p>
              Trabalhe com a <br /> UberCare e ajude <br /> vidas.
            </p>
          </div>
          <div className="form">
            <Form>
              <p>Cadastre-se agora</p>

              <div className="inputs">
                <Input placeholder="E-mail" type="email" required={true} autoComplete={"none"} />
                <span className="divisor"></span>
                <Input placeholder="Nome completo" type="text" required={true} autoComplete={"none"} />
                <Input placeholder="Telefone" type="text" required={true} autoComplete={"none"} />
                <Input placeholder="Criar Senha" type="password" required={true} min={6} />
                <span className="divisor"></span>
                <Input placeholder="Cidade" type="text" required={true} autoComplete={"none"} />
              </div>

              <div className="btn">
                <Button to="/" text="Avançar" iconURL={nextIcon} iconALT={"Próximo"} />
              </div>
            </Form>
          </div>
        </div>
      </Content>
      <Image />
    </Container>
  );
};

export default UberCare;
