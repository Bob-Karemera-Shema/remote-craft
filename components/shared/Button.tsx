import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>{
    variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    type = 'button',
    ...props
}) => {
    return (
        <button
            type={type}
            className={clsx(
                'font-medium rounded-md transition duration-200 ease-in-out cursor-pointer',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary'
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;