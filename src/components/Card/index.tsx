import React from "react";

import { HasInfo, CardContainer, Content, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from "react-icons/fi";

export default function Card() {
    return (
        <CardContainer>
            <ImageBackground src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/47180915?v=4" />
                    <div>
                        <h4>Pedro Baptista</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de React</h4>
                    <p>Projeto feito bootcamp React. Bootcamp Finalizado....</p>
                </PostInfo>
                <HasInfo>
                    <h4>#REACT #REACT-NATIVE</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }