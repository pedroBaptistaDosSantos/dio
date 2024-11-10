import React from "react";
import { IInput } from "./types";
import { InputContainer, InputText, IconContainer } from "./styles"
const Input = ({leftIcon, name, ...rest}: IInput) => {

    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest} />
        </InputContainer>

    )

}

export { Input }