// Chakra imports
import {
    Box,
    Flex,
    Image,
    Text,
    useColorMode,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";

import React from 'react';
import styled from '@emotion/styled';

import Card from "./Card.js";
import { shadowColorAlt } from "../styles/darkMode.js";

const StyledLink = styled(Link)`
    text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
text-decoration: none;
 }
`;

export default function CourseCard(props) {
    const { name, specialisation, image } = props;

    const { colorMode } = useColorMode();
    const textColor = useColorModeValue("navy.700", "white");

    return (
        <StyledLink
            href={'/professor/' + name}
        >
            <Card
                p='20px'
                bgColor={useColorModeValue('gray.300', '#10162d')}
                rounded='16px'
                _hover={{
                    boxShadow: shadowColorAlt[colorMode]
                }}
            >
                <Flex direction={{ base: "column" }} justify='center'>
                    <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
                        <Image
                            src={image}
                            w={{ base: "100%", "3xl": "100%" }}
                            h={{ base: "100%", "3xl": "100%" }}
                            borderRadius='20px'
                        />
                    </Box>
                    <Flex flexDirection='column' justify='space-between' h='100%'>
                        <Flex
                            justify='space-between'
                            direction={{
                                base: "row",
                                md: "column",
                                lg: "row",
                                xl: "column",
                                "2xl": "row",
                            }}
                            mb='auto'>
                            <Flex direction='column'>
                                <Text
                                    color={textColor}
                                    fontSize={{
                                        base: "xl",
                                        md: "lg",
                                        lg: "lg",
                                        xl: "lg",
                                        "2xl": "md",
                                        "3xl": "lg",
                                    }}
                                    mb='5px'
                                    fontWeight='bold'
                                    me='14px'>
                                    {name}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            align='start'
                            justify='space-between'
                            direction={{
                                base: "row",
                                md: "column",
                                lg: "row",
                                xl: "column",
                                "2xl": "row",
                            }}>
                            <Text
                                color='secondaryGray.600'
                                fontSize={{
                                    base: "sm",
                                }}
                                fontWeight='400'
                                me='14px'>
                                {specialisation}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
        </StyledLink>
    );
}
