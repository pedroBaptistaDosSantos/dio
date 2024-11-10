import React from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';
import bannerImage from '../../assets/banner.png';
import { Container, TextContent, Title, TitleHighlight, Column } from './styles';

const Feed = () => {

    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Pedro Baptista" image={"https://avatars.githubusercontent.com/u/47180915?v=4"} />
                <UserInfo percentual={25} nome="Pedro Baptista" image={"https://avatars.githubusercontent.com/u/47180915?v=4"} />
                <UserInfo percentual={7} nome="Pedro Baptista" image={"https://avatars.githubusercontent.com/u/47180915?v=4"} />
                <UserInfo percentual={9} nome="Pedro Baptista" image={"https://avatars.githubusercontent.com/u/47180915?v=4"} />
            </Column>
            
        </Container>
    </>)
}

export { Feed }