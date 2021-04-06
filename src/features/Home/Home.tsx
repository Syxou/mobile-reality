import React from 'react';
import styled from 'styled-components';

import Square from '../../components/Square/Suqare';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

import backgroundImage from '../../assets/tam-wai-eTZ84OT1r_E-unsplash.jpg';
import backgroundImage2 from '../../assets/edward-xu-_wWjQr1JZ1k-unsplash.jpg';
import backgroundImage3 from '../../assets/ricardo-gomez-angel-Jnhjif7lHEE-unsplash.jpg';
import backgroundImage4 from '../../assets/ricardo-gomez-angel-QxeGirsqcBw-unsplash.jpg';
import backgroundImage5 from '../../assets/stavrapid-HQelgjvH400-unsplash.jpg';
import logo from '../../assets/lorem-logo.svg';
import { Link } from 'react-router-dom';

interface DoubleColumnProp {
    height?: string;
    rowsHeight?: string;
}


const Home = () => {
    return (
        <main>
            <DoubleColumn
                height={'100vh'}
            >
                <Square>
                    <div>
                        <h1>Lorem Ipsum</h1>
                        <h3>What is Lorem Ipsum?</h3>
                        <Text>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                </Text>
                        <Button><Link to='/house'>domki</Link></Button>
                    </div>
                </Square>
                <DoubleColumn rowsHeight={'50%'}>
                    <Square backgroundImage={backgroundImage2}> <LogoComponent src={logo} alt="Logo" /> </Square>
                    <Square backgroundImage={backgroundImage3}> </Square>
                    <Square backgroundImage={backgroundImage4}> </Square>
                    <Square backgroundImage={backgroundImage5}> <Text colorText={'white'}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text></Square>
                </DoubleColumn>
                <Square
                    backgroundImage={backgroundImage}
                >
                    <Text
                        colorText={'white'}
                    >
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                </Text>
                </Square>
                <Square>
                    <h1>Lorem Ipsum</h1>
                    <h3>What is Lorem Ipsum?</h3>
                    <Text>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </Text>
                    <Button > Domki </Button>
                </Square>
            </DoubleColumn>
        </main>
    )
}

const DoubleColumn = styled.section<DoubleColumnProp>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${props => props.rowsHeight ? `grid-template-rows: repeat(auto-fill, ${props.rowsHeight});` : null}
    height: ${props => props.height};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const LogoComponent = styled.img`
    height: 100px;
    width: 100px;
`;

export default Home;
