import {
    Button,
    Flex,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Stack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import React from "react";
import styled from '@emotion/styled';

import Logo from '../utils/Logo';
import { VSeparator } from "../utils/Separator";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const NavContainer = styled(Flex)`
    position: sticky;
    z-index: 100;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

// Things to do
// - Change Navbar on Login and change the dropdown for the same
export default function Navbar(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('whiteAlpha.500', 'rgba(3,1,22,0.5)');
    
    // Useful if you want to add notifications to your website, but currently useless
    const { secondary, message } = props;

    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let textColor = useColorModeValue("secondaryGray.900", "white");
    let menuBg = useColorModeValue("white", "navy.800");
    const shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
        "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
    );
    
    return (
        <NavContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            minH='75px'
            width="100%"
            borderRadius='16px'
            borderWidth='1.5px'
            borderStyle='solid'
            transitionDelay='0s, 0s, 0s, 0s'
            transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
            transition-property='box-shadow, background-color, filter, border'
            transitionTimingFunction='linear, linear, linear, linear'
            bg={bg}
            as="nav"
            mt={2}
            mb={8}
            mx="auto"
            pb='8px'
            px={{ sm: "10px", md: "10px" }}
            ps={{ xl: "12px" }}
            pt='8px'
            top={{ base: "12px", md: "16px", xl: "18px" }}
            w={{
                base: "calc(100vw - 6%)",
                md: "calc(100vw - 8%)",
                lg: "calc(100vw - 6%)",
                xl: "calc(100vw - 250px)",
                "2xl": "calc(100vw - 15%)"
            }}
        >
            <Flex
                w='100%'
                flexDirection={{
                    sm: "row",
                    md: "row",
                }}
                alignItems='center'
            >
                <Logo/>
                
                <Flex ms='auto'>
                    <Link
                        display={{ base: "none", lg: "block" }}
                        href='/professors'
                        color={textColor}
                        fontSize='sm'
                        fontWeight='700'
                        me='30px'
                        my='auto'
                    >
                        Professors
                    </Link>

                    <Link
                        display={{ base: "none", lg: "block" }}
                        href='/courses'
                        color={textColor}
                        fontSize='sm'
                        fontWeight='700'
                        me='30px'
                        my='auto'
                    >
                        Courses
                    </Link>

                    <VSeparator
                        me='14px'
                        bg={textColor}
                        display={{ base: "none", lg: "block" }}
                    />

                    <Button
                        variant='no-hover'
                        h='40px'
                        w='max-content'
                        bg='transparent'
                        my='auto'
                        me='10px'
                        onClick={toggleColorMode}>
                        <Icon
                            h='18px'
                            w='18px'
                            color={textColor}
                            as={colorMode === "light" ? MoonIcon : SunIcon}
                        />
                    </Button>
            
                    <Menu>
                        <MenuButton
                            display={{ base: "block", lg: "none" }}
                            p='0px !important'
                            mt={{ base: "0px", md: "1px" }}
                            maxH='35px'
                            maxW='20px'
                            me={{ base: "30px", lg: "0px" }}
                            alignContent='end'
                        >
                            <Icon
                                mt='4px'
                                display={{ base: "block", lg: "none" }}
                                as={HamburgerIcon}
                                color={textColor}
                                w='20px'
                                h='20px'
                                me='10px'
                                _hover={{ cursor: "pointer" }}
                            />
                        </MenuButton>
                        
                        <MenuList
                            boxShadow={shadow}
                            p='10px'
                            mt='10px'
                            borderRadius='20px'
                            bg={menuBg}
                            border='none'
                        >
                            <Flex flexDirection='column' p='20px'>
                                <MenuItem
                                    _hover={{ bg: "none" }}
                                    _focus={{ bg: "none" }}
                                    borderRadius='8px'
                                    px='14px'
                                >
                                    <Link
                                        href='/professors'
                                        color={textColor}
                                        fontSize='sm'
                                        fontWeight='500'
                                        me='30px'
                                        my='auto'
                                    >
                                        Professors
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    _hover={{ bg: "none" }}
                                    _focus={{ bg: "none" }}
                                    color='red.400'
                                    borderRadius='8px'
                                >
                                    <Link
                                        href='/courses'
                                        color={textColor}
                                        fontSize='sm'
                                        fontWeight='500'
                                        me='30px'
                                        my='auto'
                                    >
                                        Courses
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    _hover={{ bg: "none" }}
                                    _focus={{ bg: "none" }}
                                    color='red.400'
                                    borderRadius='8px'
                                >
                                    <Link
                                        href='/login'
                                        color={textColor}
                                        fontSize='sm'
                                        fontWeight='500'
                                        me='30px'
                                        my='auto'
                                    >
                                        Login
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    _hover={{ bg: "none" }}
                                    _focus={{ bg: "none" }}
                                    color='red.400'
                                    borderRadius='8px'
                                >
                                    <Link
                                        href='/signup'
                                        color={textColor}
                                        fontSize='sm'
                                        fontWeight='500'
                                        me='30px'
                                        my='auto'
                                    >
                                        Sign Up
                                    </Link>
                                </MenuItem>
                            </Flex>
                        </MenuList>
                    </Menu>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={4}
                    >
                        <Link
                            href='/login'
                            display={{ base: "none", lg: "block" }}
                        >
                            <Button
                                border='1px solid'
                                borderColor={textColor}
                                color={textColor}
                                fontSize='sm'
                                borderRadius='12px'
                                bg='transparent'
                                my='auto'
                            >
                                Login
                            </Button>
                        </Link>

                        <Link
                            href='/signup'
                            display={{ base: "none", lg: "block" }}
                        >
                            <Button
                                border='1px solid'
                                borderColor={textColor}
                                color={textColor}
                                fontSize='sm'
                                borderRadius='12px'
                                bg='transparent'
                                my='auto'
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Flex>

            {/* Add props in Navbar to show this notification */}
            {secondary ? <Text color='white'>{message}</Text> : null}
        </NavContainer>
    );
}

Navbar.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
};