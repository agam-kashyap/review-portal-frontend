import {
    Stack,
    Heading,
    Text,
    Button,
    useColorMode,
    useColorModeValue,
    Input,
    Image,
    Box
} from '@chakra-ui/react';

import Container from '../components/Container'
import React from 'react';
import { secondaryTextColor } from '../styles/darkMode';

export default function Homepage() {
    const {colorMode} = useColorMode()

    return (
        <Container>
            <Stack
                align={'center'}
                spacing={"5vw"}
                direction={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
                w={{
                    base: "calc(100vw - 15%)",
                    md: "calc(100vw - 15%)",
                    lg: "calc(100vw - 15%)",
                    xl: "calc(100vw - 30%)",
                    "2xl": "calc(100vw - 30%)"
                }}
                mt={12}
                mb={12}
            >
                <Stack 
                    spacing={{ base: 5, md: 7 }}
                    w={{
                        base: "calc(100vw - 16%)",
                        md: "calc(100vw - 17%)",
                        lg: "calc(100vw - 17%)",
                        xl: "calc(100vw - 20%)",
                        "2xl": "calc(100vw - 25%)"
                    }}
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
                            Review your courses
                        </Text>
                        <br />
                        <Text as={'span'}
                            bgGradient='linear(to-l, #FF0080, #7928CA)'
                            bgClip='text'
                        >
                            Anonymously!
                        </Text>
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]}>
                        An open platform to review the courses & professors at IIIT-B. Add Reviews, Suggest courses, rate them and do many more things!
                    </Text>

                    {/* Things to do
                    Add placeholder text typing animations to show what they can type
                    Integrate this with backend */}
                    <Stack 
                        spacing={4} 
                        direction={{ base: 'column', md: 'row' }} 
                        w={'full'}
                        alignItems={'center'}
                    >
                        <Input
                            type={'text'}
                            placeholder={'Software Production Engineering'}
                            color={useColorModeValue('gray.800', 'gray.200')}
                            borderStyle='solid'
                            borderColor={useColorModeValue('gray.800', 'gray.800')}
                            rounded={'full'}
                            _focus={{
                                borderStyle:'solid',
                                borderColor:useColorModeValue('black', 'black'),
                                rounded:'full',
                            }}
                        />
                        <Button
                            variant='outline'
                            rounded={'full'}
                            color={useColorModeValue('black', 'white')}
                            flex={'1 0 auto'}
                            borderColor={useColorModeValue('gray.800', 'gray.800')}
                            maxW={'250px'}
                        >
                            Search
                        </Button>
                    </Stack>
                </Stack>
                <Image
                    alt={'Hero Image'}
                    fit={'contain'}
                    w={{ base: '60vw', md: '40vw', lg: '30vw', xl: '30vw' }}
                    src={
                        '/hero/undraw_organize_resume_re_k45b.svg'
                    }
                />
            </Stack>
        </Container>
    );
}



