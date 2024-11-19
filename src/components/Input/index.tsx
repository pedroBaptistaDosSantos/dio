import React, { forwardRef } from "react";
import { IInput } from "./types";

import { InputContainer, InputText, IconContainer } from "./styles"
const Input = forwardRef<HTMLInputElement, IInput>(({leftIcon, ...props}, ref) => {

    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText
                 {...props} ref={ref}
            />
        </InputContainer>

    )

});

export { Input }