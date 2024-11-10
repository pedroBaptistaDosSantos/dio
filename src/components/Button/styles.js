import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    backgroud: 565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 12px;
    width: 60%;

    ${({variant}) => variant !== 'primary' && css`
        min-width:167px;
        height: 33px;
        color: black;
        border: 1px solid #E4105D;
        background: #E4105D;

        &:hover {
            opacity: 8.6;
            cursor: pointer;
        }

        &::after {
            content = '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            border-radius: 22px;
        }
    `}
`

