import React from "react";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import Logo from "../../assets/images/logoUberCare.svg";
import nextIcon from "../../assets/images/next.svg";

import { Container, Content, Image, Form } from "./styles";
import { Link } from "react-router-dom";

const Hospital: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img className="logoImage" src={Logo} alt="UberCare Logo" />
        </Link>
        <div className="flex">
          <div className="info">
            <p>
              Receba pacientes <br /> de forma rápida e <br /> segura
            </p>
          </div>
          <div className="form">
            <Form>
              <p>Cadastre-se agora</p>

              <div className="inputs">
                <Input
                  placeholder="Nome do Hospital"
                  type="email"
                  required={true}
                  autoComplete="none"
                />
                <Input
                  placeholder="Responsável"
                  type="text"
                  required={true}
                  autoComplete="none"
                />
                <span className="divisor"></span>
                <Input
                  placeholder="Cidade"
                  type="text"
                  required={true}
                  autoComplete="none"
                />
                <Input
                  placeholder="Endereço"
                  type="text"
                  required={true}
                  autoComplete="none"
                />
                <Input
                  placeholder="Contato"
                  type="text"
                  required={true}
                  autoComplete="none"
                />
              </div>

              <div className="btn">
                <Button
                  to="/"
                  text="Avançar"
                  iconURL={nextIcon}
                  iconALT="Próximo"
                />
              </div>
            </Form>
          </div>
        </div>
      </Content>
      <Image />
    </Container>
  );
};

export default Hospital;
