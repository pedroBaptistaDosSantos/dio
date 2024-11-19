export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: string;
    
}

export interface IButtonStyled {
    variant: string;
}