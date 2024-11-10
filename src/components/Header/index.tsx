import React from "react";
import { IHeader } from "./type";


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

export default function Header({ autenticado }: IHeader) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" height="25px" />
                    {autenticado ? (<>

                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."></Input>
                        </BuscarInputContainer>
                        <Menu> Live Code</Menu>
                        <Menu> Global</Menu>


                    </>) : null}

                </Row>
                <Row>

                    {autenticado ? (<>

                        <UserPicture src="https://avatars.githubusercontent.com/u/47180915?v=4" />

                    </>) : (<>

                        <MenuRight href="">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />

                    </>)}

                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }