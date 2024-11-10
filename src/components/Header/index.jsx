import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo.png"
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" height="25px" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."></Input>
                    </BuscarInputContainer>
                    <Menu> Live Code</Menu>
                    <Menu> Global</Menu>
                </Row>
                <Row>
                   <MenuRight href="">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}