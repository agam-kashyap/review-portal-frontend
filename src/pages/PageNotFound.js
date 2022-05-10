import Container from '../components/Container'
import {
    Stack,
    Flex,
    Box,
    Image,
    Heading,
    useColorMode,
    Text,
    Button
} from '@chakra-ui/react'
import { secondaryTextColor } from '../styles/darkMode';

export default function PageNotFound() {
    const { colorMode } = useColorMode()
    return (
        <Container>
            <Stack
                alignItems={'center'}
                spacing={{ base: 8, md: 10, lg: 150 }}
                py={{ base: 16, md: 10, lg: '10' }}
                direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row', "2xl": 'row' }}
                w={{
                    base: "calc(100vw - 6%)",
                    md: "calc(100vw - 8%)",
                    lg: "calc(100vw - 20%)",
                    xl: "calc(100vw - 20%)",
                    "2xl": "calc(100vw - 20%)"
                }}
            >
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'initial'}
                >
                    <Box
                        position={'relative'}
                        height={{ base: '40vw', sm: '40vw', md: '30vw', lg: '30vw', xl: '25vw', "2xl": '25vw' }}
                        mb={'10px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'contain'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/hero/undraw_page_not_found_re_e9o6.svg'
                            }
                        />
                    </Box>
                </Flex>
                <Stack
                    flex={1}
                    spacing={{ base: 5, md: 7 }}
                    minW={{ md: '580', lg: '580' }}
                    alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'none', xl: 'none', "2xl": 'none' }}
                >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                            404
                        </Text>
                        <br />
                        <Text as={'span'}
                            bgGradient='linear(to-l, #FF0080, #7928CA)'
                            bgClip='text'
                        >
                            Page Not Found
                        </Text>
                    </Heading>
                    <Text fontSize='xl' color={secondaryTextColor[colorMode]} px={{ base: '10vw', sm: '10vw', md: '10vw', lg: '5vw', xl: '5vw', "2xl": '5vw' }}>
                        Oops looks like we couldn't find the page you are looking for.
                    </Text>
                </Stack>
            </Stack>
        </Container>
    );
}