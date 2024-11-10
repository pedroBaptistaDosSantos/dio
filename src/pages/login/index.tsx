import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/banner.png';
import { MdEmail, MdLock } from 'react-icons/md';
import { Container, TextContent, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';
import { Input } from '../../components/Input';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/feed');
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    O seu futuro global agora! +1,750 courses, bootcamps, projects and training in back-end
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu login e entre na plataforma!</SubtitleLogin>
                    <Input placeholder="Email" name="Compre" leftIcon={<MdEmail />}></Input>
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>
                    <Button title="Entrar" onClick={handleLogin}  variant='secondary'></Button>
                    <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };