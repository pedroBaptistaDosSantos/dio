import { Control } from "react-hook-form";
import { IForm } from "../../pages/login/types";
export interface IInput {
    leftIcon: React.ReactNode;
    name ?: string;
    placeholder?: string
    type ?: string;
    control : Control;
}