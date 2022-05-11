import {
    Box,
    Link,
    Text,
    Stack,
    Heading,
    Flex,
    useColorMode,
    useColorModeValue,
    Avatar,
    Spacer,
    HStack
} from '@chakra-ui/react'

import styled from '@emotion/styled';

import Card from "./Card.js";
import { primaryTextColor, shadowColor, shadowColorAlt } from '../styles/darkMode';

const StyledLink = styled(Link)`
    text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
text-decoration: none;
 }
`;

export default function ProfCard(props) {

    const { name, email, id } = props;
    const { colorMode } = useColorMode();
    const textColor = useColorModeValue("navy.700", "white");

    return (
        // Professor card 
        <StyledLink
            href={'/professor/' + id}
        >
            <Card
                p='20px'
                bgColor={useColorModeValue('gray.300', '#10162d')}
                rounded='16px'
                _hover={{
                    boxShadow: shadowColorAlt[colorMode]
                }}
            >
                <Flex direction={{ base: "column" }} justify='center' w="-moz-fit-content">
                    <HStack spacing={5}>
                    <Avatar name={name}/>
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
                                {email}
                            </Text>
                        </Flex>
                    </Flex>
                </HStack>
                </Flex>
            </Card>
        </StyledLink>
    )
}