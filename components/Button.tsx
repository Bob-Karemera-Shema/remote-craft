import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const MainButton: FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            type="submit"
            className={`bg-custom-blue text-background font-medium rounded-md transition duration-200 ease-in-out hover:bg-hover-blue cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}