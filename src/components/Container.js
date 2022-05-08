import React from 'react'
import {
        useColorMode,
        Flex
} from '@chakra-ui/react'
import { primaryTextColor, bgColor } from '../styles/darkMode';
import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Header />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                bg={bgColor[colorMode]}
                color={primaryTextColor[colorMode]}
                px={8}
            >
                {children}
            </Flex>
            <Footer />
        </>
    );
};

export default Container;