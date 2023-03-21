import { FC } from 'react';
import styled, { css } from 'styled-components';
import { contrast, skin } from '../assets/colors';
import { IButton } from '../types/components';

export const StyledButton = styled.button<IButton>`
    height: 3rem;
    min-width: 3rem;
    font-size: 1rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border: 1px solid ${skin.primary};
    color: ${contrast.high};
    background-color: transparent;
    border-radius: 2rem;
    font-weight: 600;
    transition: box-shadow 0.25s ease, background-color 0.25s ease;
    &:hover {
        box-shadow: rgb(111, 255, 176) 0px 0px 0px 2px;
        background-color: rgba(221, 221, 221, 0.4);
    }
    ${({ variant }) =>
        variant === 'solid' &&
        css`
            background-color: ${skin.primary};
            color: ${contrast.low};
        `}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            pointer-events: none;
        `}
    ${({ interactive }) =>
        !interactive &&
        css`
            pointer-events: none;
        `}
`;

const Button:FC<IButton> = ({ variant,children, onClick, disabled, interactive = true }) => {
    return (
        <StyledButton
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            interactive={interactive}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'outline',
    disabled: false,
    interactive: true,
};

export default Button;
