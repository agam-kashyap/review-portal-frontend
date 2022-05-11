import { 
    Input,
    InputGroup,
    InputLeftElement,
    HStack,
    Stack, 
    SimpleGrid,
    Heading,
    useColorMode
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Container from "../components/Container";
import ProfCard from '../components/ProfCard';
import { primaryTextColor, secondaryTextColor } from '../styles/darkMode';
import { Search2Icon } from '@chakra-ui/icons'

import axios from "axios";

export default function Professors(props) {
    const { colorMode } = useColorMode();
    const [searchValue, setSearchValue] = useState('');
    const [professors, setProfessors] = useState([])

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

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());

    const searchedProfs = professors.filter(
        obj => obj.prof_name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
        <Container>
            {/* Filter */}
            <HStack 
                spacing={4}
                justifyContent="auto"
                alignItems="center"
            >
                <InputGroup >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon/>}
                />
                    <Input type="search" 
                        autoFocus
                        placeholder="Search a professor"
                        color={secondaryTextColor[colorMode]}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </InputGroup>
            </HStack>
            
            {/* Character block */}
            <Stack 
                spacing={4}
                ml={8}
            >
                {alphabets.map(
                    alphabet => {
                    var filtered_profs = searchedProfs.filter(obj => obj.prof_name.startsWith(alphabet))
                    return (
                        (filtered_profs.length>0) && 
                        <Stack 
                            align='left'
                        >
                            <Heading
                                as={'h2'}
                                p={2}
                                size={'xl'}
                                fontWeight={600}
                                color={primaryTextColor[colorMode]}
                            >
                                {alphabet}
                            </Heading>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3, "2xl": 4 }}
                                gap={3}
                            >
                                {/* Professor card */}
                                {/* Things to do
                                Backend add email in modal */}
                                {filtered_profs.map(
                                    prof => {
                                        return (
                                            <ProfCard 
                                                name={prof.prof_name}
                                                email={prof.prof_name.slice(0,5)+'iiitb.ac.in'}
                                                id={prof._id}
                                            />
                                        )
                                    }
                                )}
                            </SimpleGrid>
                        </Stack>
                    )}
                )}
            </Stack>
        </Container>
    )
}