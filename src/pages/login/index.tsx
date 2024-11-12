import React from 'react';

import { IForm } from './types';

import { useNavigate } from 'react-router-dom';
import { useForm, Control } from 'react-hook-form';


import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/banner.png';
import { MdEmail, MdLock } from 'react-icons/md';
import { Container, TextContent, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';
import { Input } from '../../components/Input';




const Login = () => {

    const navigate = useNavigate();

    const {
        register,
        control,
        handleSubmit,
    } = useForm();


    const handleLogin = () => {
        //navigate('/feed');
        console.log('foi para o feed');
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
                    <form onSubmit={ (data) => console.log("dadsada" +data) }>
                        <Input name="name" control={control} placeholder="Email" leftIcon={<MdEmail />}></Input>
                        <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>
                        <Button title="Entrar"  variant='secondary'></Button>
                    </form>
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