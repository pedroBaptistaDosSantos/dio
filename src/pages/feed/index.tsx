import React from 'react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';
//import bannerImage from '../../assets/banner.png';
import { Container, Title, TitleHighlight, Column } from './styles';

import { useContext } from 'react';

import { AuthContext } from '../../context/auth';

const Feed = () => {
    const { user } = useContext(AuthContext)
    console.log(user.name);
    return (<>
        <Header/>
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