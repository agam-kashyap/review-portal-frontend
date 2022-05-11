import {
    Stack,
    Heading,
    Text,
    Button,
    useColorMode,
    useColorModeValue,
    Link,
    Image,
    Icon,
    FormControl,
    FormLabel
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import {
    Select
} from "chakra-react-select";

import axios from "axios";
import React, { useState, useEffect } from 'react';

import Container from '../components/Container'
import { secondaryTextColor } from '../styles/darkMode';

export default function Homepage() {
    const { colorMode } = useColorMode()
    const [professors, setProfessors] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const buttonBg = useColorModeValue('black', 'white')
    const history = useNavigate();

    useEffect(() => {
        axios
            .get(
                "http://localhost:3001/profs"
            )
            .then((res) => {
                setProfessors(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleSearch() {
        history('/professor/'+searchValue.value)
    }

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
        professors&&
        <Container>
            <Stack
                maxW={'7xl'}
                minH={'50vh'}
                py={{ base: 4, sm: 4, md: 8, lg: 16 }}
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

                        {console.log(professors.map(prof => prof.prof_name))}
                        <FormControl p={4}>
                            <Select
                                id="prof-select"
                                name="profs"
                                options={professors.map(prof => ({
                                        value: prof._id,
                                        label: prof.prof_name
                                    })
                                )}
                                placeholder={'Jaya Sreevalsan Nair'}
                                onChange={setSearchValue}
                                isClearable
                            />
                        </FormControl>

                        <Button
                            variant='outline'
                            rounded={'full'}
                            color={buttonBg}
                            flex={'1 0 auto'}
                            borderColor={'gray.800'}
                            maxW={'250px'}
                            onClick={handleSearch}
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