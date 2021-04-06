import React from 'react';
import styled from 'styled-components';

interface SquareProps {
    width?: string,
    height?: string,
    backgroundImage?: string,
}

const Suqare: React.FC<SquareProps> = ({
    children,
    width,
    height,
    backgroundImage,
}) => {
    return (
        <SquareWrap
            width={width}
            height={height}
            backgroundImage={backgroundImage}
        >
            <SquareContent>
                {children}
            </SquareContent>
        </SquareWrap>
    )
}


const SquareWrap = styled.article<SquareProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    text-align: center;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    ${props => props.backgroundImage
        ? `background-image: url(${props.backgroundImage});`
        : null}

    background-size: cover;
    background-position: center;
`;

const SquareContent = styled.div`
    padding: 40px;
`;


export default Suqare;
