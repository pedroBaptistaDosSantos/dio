import React from "react";

//import { useForm,} from 'react-hook-form';

import { Container,Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
const Cadastro = () => {
    const navigate = useNavigate();

   

    const handleCadastro = () => {
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
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu cadastro e entre na plataforma!</SubtitleLogin>
                    <form onSubmit={(data) => console.log(data)}>
                        <Input name="name"  placeholder="Nome Completo" leftIcon={<MdEmail />}></Input>
                        <Input name="email"  placeholder="Email" leftIcon={<MdEmail />}></Input>
                        <Input name="password" placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>
                        <Button title="Criar Conta" onClick={handleCadastro} variant='secondary'></Button>

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

export { Cadastro }