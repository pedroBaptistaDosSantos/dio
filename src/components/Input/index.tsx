import React, { forwardRef } from "react";
import { IInput } from "./types";

import { InputContainer, InputText, IconContainer } from "./styles"
import { ErrorText } from "./styles";
const Input = forwardRef<HTMLInputElement, IInput>(({ leftIcon, errorMessage, ...props }, ref) => {

    return (<>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText
                {...props} ref={ref}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
    )

});

export { Input }