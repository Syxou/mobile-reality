import React from 'react';
import styled from 'styled-components';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    border: 2px solid blueviolet;
    padding: 5px 20px;
    background-color: white;
    font-size: 1rem;
    color: blueviolet;
    cursor: pointer;
`;

export default Button;
