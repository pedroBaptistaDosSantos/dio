import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/banner.png';
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleClickSign = () => {
        navigate('/login');
    }
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    +1,750 courses, bootcamps, projects and training in back-end, front-end, mobile, games, data, artificial intelligence & cloud careers to raise your professional level and gain opportunities in the most desired companies in the world
                </TextContent>
                <Button title='Começar agora' variant='secondary' onClick={handleClickSign}></Button>
            </div>
            <div>
                <img src={bannerImage} alt="Banner" height="400px" />
            </div>
        </Container>
    </>)
}

export { Home }