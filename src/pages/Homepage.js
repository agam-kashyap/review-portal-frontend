import {
    Stack,
    Heading,
    Text,
    Button,
    useColorMode,
    useColorModeValue,
    Input,
    Image,
    Icon
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

import Container from '../components/Container'
import React from 'react';
import { secondaryTextColor } from '../styles/darkMode';

export default function Homepage() {
    const {colorMode} = useColorMode()
    
    const Feature = ({ children, ...rest }) => {
        return (
            <Stack direction={'row'} align={'center'} {...rest}>
                <Icon as={FaCheck} color={'green.400'} w={5} h={5} />
                <Text color={useColorModeValue('gray.600', 'gray.400')} fontWeight={600}>
                    {children}
                </Text>
            </Stack>
        );
    };

    return (
    <Container>
        <Stack
            maxW={'7xl'}
            minH={'50vh'}
            py={ {base: 4, sm: 4, md: 8, lg: 16 }}
            spacing={{ base: 10, lg: 24 }}
            direction={{ base: 'column', lg: 'row' }}
            alignItems={'center'}
        >
            <Stack spacing={12} mb={{ base: 12, lg: 0 }} flex={2}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                    maxW={'2xl'}
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
                <Stack spacing={6}>
                <Text color={secondaryTextColor[colorMode]} fontSize={{ md: 'lg' }} maxW={'2xl'}>
                    An archive of ratings for Courses offered at IIIT Bangalore and their Professors.
                </Text>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={{ base: 6, sm: 12 }}>
                            <Stack spacing={4}>
                                <Feature>Anonymous Reviews</Feature>
                                <Feature>Upvote/Downvote reviews</Feature>
                            </Stack>
                            <Stack spacing={4}>
                            <Feature>Rate Courses</Feature>
                            <Feature>Rate Professors</Feature>
                            </Stack>
                    </Stack>
                </Stack>
                {/* Things to do
                        Add placeholder text typing animations to show what they can type
                        Integrate this with backend 
                */}
                <Stack 
                    direction={{ base: 'column', sm: 'row' }} 
                    spacing={8}
                    alignItems={'center'}
                >
                    <Input
                        type={'text'}
                        placeholder={'Software Production Engineering'}
                        color={useColorModeValue('gray.800', 'gray.200')}
                        _placeholder={{
                            color:useColorModeValue('gray.500', 'gray.600')
                        }}
                        borderStyle='solid'
                        borderColor={useColorModeValue('gray.800', 'gray.800')}
                        rounded={'full'}
                        _focus={{
                            borderStyle:'solid',
                            borderColor:useColorModeValue('gray.400', 'gray.800'),
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
};