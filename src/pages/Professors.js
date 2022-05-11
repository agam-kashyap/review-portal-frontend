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
import React, { useState } from 'react'

import Container from "../components/Container";
import ProfCard from '../components/ProfCard';
import { primaryTextColor, secondaryTextColor } from '../styles/darkMode';
import { Search2Icon } from '@chakra-ui/icons'

export default function Professors(props) {
    const { colorMode } = useColorMode();
    const [searchValue, setSearchValue] = useState('');

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());
    // Things to do
    // Pull this data from backend
    const professors = [
        { name: 'Chandrashekhar Ramanathan', email: 'rc@iiitb.ac.in', id: '1' },
        { name: 'B Thangaraju', email: 'bt@iiitb.ac.in', id: '2' },
        { name: 'Chandramouleeshwaran Shankaran', email: 'cr@iiitb.ac.in', id: '3' },
        { name: 'Srinath Srinivasa', email: 'sri@iiitb.ac.in', id: '4' }
    ];

    const searchedProfs = professors.filter(
        obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())
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
                    var filtered_profs = searchedProfs.filter(obj => obj.name.startsWith(alphabet))
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
                                {filtered_profs.map(
                                    prof => {
                                        return (
                                            <ProfCard 
                                                name={prof.name}
                                                email={prof.email}
                                                id={prof.id}
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