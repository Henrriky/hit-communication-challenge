import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
    return(
        <button 
        className={ `py-3 px-4 bg-button-background-color rounded font-semibold text-black text-md w-full transition-colors hover: hover:bg-cyan-300 focus:ring-2 ring-white ${className}`}
        {...props}
        >
            {children}
        </button>
    )
}