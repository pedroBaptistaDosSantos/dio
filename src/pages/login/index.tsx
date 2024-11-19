import React from 'react';

import { IForm } from './types';

import { useNavigate } from 'react-router-dom';
import { useForm, Control } from 'react-hook-form';
import { useState } from 'react';
//import * as yup from "yup" a remover;
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MdEmail, MdLock } from 'react-icons/md';
import { Container, TextContent, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';
import { Input } from '../../components/Input';


/*
const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
})

*/

const validationSchema = z.object({
    email: z.string(),
    password: z
        .string()
        .min(3)
        .max(20)
});
const Login = () => {

    const navigate = useNavigate();


    /*
    const {
        register,
        control,
        handleSubmit,
    } = useForm();
     */

    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        //resolver: zodResolver(validationSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    const handleLogin = () => {
        //navigate('/feed');
        console.log('foi para o feed');
    }
    const handleSubmitForm = (data: any) => {
        console.log(data);
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

                        
                        <Input {...register('email')} name="email" placeholder="Email" leftIcon={<MdEmail />}></Input>
                        <Input {...register('password')} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>
                        
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