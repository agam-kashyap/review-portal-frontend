import {
    Flex,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import ColorModeSwitcher from '../utils/ColorModeSwitcher';
import { navBgColor } from '../styles/darkMode';
import Logo from '../utils/Logo';

const NavContainer = styled(Flex)`
    position: sticky;
    z-index: 100;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

const Header = () => {

    const bg = useColorModeValue(navBgColor.light, navBgColor.dark);

    return (
        <NavContainer
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="1300px"
            width="100%"
            bg={bg}
            as="nav"
            mt={[0, 2]}
            mb={2}
            mx="auto"
        >
            <Logo />

        <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
        >
            <ColorModeSwitcher />
        </Stack>
            
        </NavContainer>
    )
}

export default Header;