import React from 'react';
import styled from 'styled-components';

interface TextProps {
    colorText?: string;
}

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
    return (
        <TextStyled
            {...rest}>
            { children}
        </TextStyled >
    )
}


const TextStyled = styled.p<TextProps>`
        color:${props => props.colorText ? props.colorText : 'black'};
`;

export default Text;
