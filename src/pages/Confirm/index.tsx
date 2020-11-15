import React from "react";
import { Link } from 'react-router-dom';

import Button from "../../Components/Button";

import Logo from "../../assets/images/logoUberCare.svg";
import nextIcon from "../../assets/images/next.svg";
import driver from '../../assets/images/illustration-driver.svg';

import { Container, Content, Image, Form } from "./styles";

const Confirm: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img className="logoImage" src={Logo} alt="UberCare Logo" />
        </Link>
        <div className="flex">
          <div className="info">
            <p>
              Cadastro Completo<br/>com sucesso!
            </p>
            <span>Em breve a nossa equipe entrará em contato com você para prosseguir com o Cadastro.</span>
          </div>
          <div className="form">
            <Form>
              <img src={driver} alt=""/>

              <div className="btn">
                <Button
                  to="/"
                  text="Continuar"
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

export default Confirm;
