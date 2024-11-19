import React from "react";
import { IButton } from "./types";

import { ButtonContainer } from './styles';

const Button = ({ title, type, variant = "primary", onClick }: IButton) => {
    return (
        <ButtonContainer type={type} variant={variant} onClick={onClick}>{title}</ButtonContainer>
    )
}

export { Button }