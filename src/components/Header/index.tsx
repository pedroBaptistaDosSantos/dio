import React from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../Button";
import logo from "../../assets/logo.png"
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

export default function Header() {
    const { user, handleSignOut } = useAuth();

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="logo da dio" height="25px" />
                    </Link>

                    {user.id ? (<>

                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."></Input>
                        </BuscarInputContainer>
                        <Menu> Live Code</Menu>
                        <Menu> Global</Menu>


                    </>) : null}

                </Row>
                <Row>

                    {user.id ? (<>
                        
                        <UserPicture src="https://avatars.githubusercontent.com/u/47180915?v=4" />
                        <a href="#" onClick={handleSignOut}>Sair</a>

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