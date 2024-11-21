import React from 'react';

import { IForm } from './types';

import { useForm } from 'react-hook-form';
//import * as yup from "yup" a remover;
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { useContext } from 'react';

import { AuthContext } from '../../context/auth'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MdEmail, MdLock } from 'react-icons/md';
import { Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';
import { Input } from '../../components/Input';


const validationSchema = z.object({
    email: z.string()
        .email('Digite um email válido'),
    password: z
        .string()
        .min(3, 'No minimo 3 caracteres')
        .max(20)

});


const Login = () => {
    const { handleLogin } = useContext(AuthContext)


    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(validationSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const handleSubmitForm = async (formData: IForm) => {
        handleLogin(formData);
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
                    <form onSubmit={handleSubmit(handleSubmitForm)}>


                        <Input {...register('email')} errorMessage={errors.email?.message} name="email" placeholder="Email" leftIcon={<MdEmail />}></Input>
                        <Input {...register('password')} errorMessage={errors.password?.message} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>

                        <Button title='Entrar' variant='secondary'></Button>

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
