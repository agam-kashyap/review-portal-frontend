import Container from "../components/Container";
import { 
    Box, 
    Heading,
    Text,
    Stack, 
    Center,
    useColorMode,
    useColorModeValue, 
    Divider,
    Tag,
    Progress,
    Flex,
    Grid,
    GridItem
} from '@chakra-ui/react'
import PropTypes from "prop-types";
import { VSeparator } from "../utils/Separator";

import { primaryTextColor, secondaryTextColor } from "../styles/darkMode";

export default function CourseReview(props) {
    const { colorMode } = useColorMode()
    const { metadata, tags, reviews } = props;

    return (
        <Container>
            {/* This stack contains details regarding the course */}
            <Stack
                pt='20px'
                pb='20px'
                spacing='10px'
                direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row', '2xl': 'row' }} 
            >
                <Box 
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '30vw', '2xl': '30vw' }} 
                    maxH={{ base: '80vh', sm: '80vh', md: '55vh', lg: '55vh', xl: '42vh', '2xl': '42vh' }} 
                    bgColor={useColorModeValue('gray.200', '#00051e')}
                    boxShadow={'2xl'}
                    rounded={'16px'}
                    alignItems='center'
                >
                    {/* Things to do
                    make the text responsive, variable card height */}
                    <Stack p='8' spacing={'8'}>
                        <Stack spacing={2}>
                            {/* Course ID */}
                            <Text as={'span'} color={secondaryTextColor[colorMode]}>
                                CS101
                            </Text>
                            {/* Course Name */}
                            <Heading
                                as={'h2'}
                                size={'sm'}
                                color={primaryTextColor[colorMode]}
                            >
                                High Performance Computing and Specialisation in some thing related to computing
                            </Heading>
                            {/* Course Specialisation */}
                            <Text fontSize={"xs"} as={'span'} color={secondaryTextColor[colorMode]}>
                                Artificial Intelligence and Machine Learning
                            </Text>
                        </Stack>

                        <Stack spacing={2}>
                            <Heading
                                    as={'h3'}
                                    size={'xs'}
                                    color={primaryTextColor[colorMode]}
                            >
                                Course Instructor(s)
                            </Heading>
                            <Text fontSize={"xs"} as={'span'} color={secondaryTextColor[colorMode]}>
                                T.K. Srikkanth
                            </Text>
                        </Stack>                        
                    </Stack>
                </Box>

                <Box 
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '25vw', '2xl': '20vw' }} 
                    maxH={{ base: '80vh', sm: '80vh', md: '55vh', lg: '55vh', xl: '42vh', '2xl': '42vh' }} 
                    bgColor={useColorModeValue('gray.200', '#00051e')}
                    boxShadow={'2xl'}
                    rounded={'16px'}
                >
                    <Center>
                    <Stack
                        p='8'
                        spacing='10px'
                        direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }} 
                    >
                        <Stack 
                            spacing={{ base: '30px', sm: '30px', md: '30px', lg: '30px', xl: '2vh', '2xl': '2vh' }}
                            align='center'>
                            <Stack spacing={'18px'} align='center'>
                                <Stack spacing={'10px'} align='center'>
                                    {/* Course Rating */}
                                    <Heading
                                        as={'h3'}
                                        size={'2xl'}
                                        color={primaryTextColor[colorMode]}
                                    >
                                        5 
                                        <Text as='sup' fontSize='sm' color={secondaryTextColor[colorMode]}>
                                            /5
                                        </Text>
                                    </Heading>
                                    <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                        Overall Course Rating
                                    </Text>
                                </Stack>
                                <Divider/>
                                {/* Vertical Separator(Recommended course | Level of Diffiulty) */}
                                <Stack 
                                    spacing={'10px'} 
                                    align='center' 
                                    direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }} 
                                >
                                    <Stack spacing={'10px'} align='center'>
                                        {/* Course Rating */}
                                        <Heading
                                            as={'h3'}
                                            size={'2xl'}
                                            color={primaryTextColor[colorMode]}
                                        >
                                            50%
                                        </Heading>
                                        <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                            Recommended by
                                        </Text>
                                    </Stack>
                                    <Divider orientation="vertical"/>
                                    <Stack spacing={'10px'} align='center'>
                                        {/* Level of difficuly */}
                                        <Heading
                                            as={'h3'}
                                            size={'2xl'}
                                            color={primaryTextColor[colorMode]}
                                        >
                                            2.5
                                        </Heading>
                                        <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                            Level of difficulty
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                            {/* Course Tags */}
                            <Stack
                                direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }} 
                            >
                                <Tag size={'md'} key={'boring'} variant='solid' colorScheme='red'>
                                    Boring
                                </Tag>
                                <Tag size={'md'} key={'awesome'} variant='solid' colorScheme='green'>
                                    Awesome
                                </Tag>
                                <Tag size={'md'} key={'okayish'} variant='solid' colorScheme='orange'>
                                    Okayish
                                </Tag>
                            </Stack>
                        </Stack>
                    </Stack>
                    </Center>
                </Box>

                {/* Ratings Aggregate graph */}
                <Box 
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '30vw', '2xl': '30vw' }} 
                    maxH={{ base: '80vh', sm: '80vh', md: '55vh', lg: '55vh', xl: '42vh', '2xl': '42vh' }} 
                    bgColor={useColorModeValue('gray.200', '#00051e')}
                    boxShadow={'2xl'}
                    rounded={'16px'}
                >   
                    <Stack 
                        m={8}
                        spacing={{ base: '6', sm: '6', md: '8', lg: '8', xl: '10', '2xl': '10' }}
                        maxW={{ base: '60vw', sm: '40vw', md: '57vw', lg: '48vw', xl: '28vw', '2xl': '28vw' }}
                    >
                        <Stack>
                            <Grid 
                                templateColumns='repeat(10, 1fr)'
                            >
                                <GridItem colSpan={3}>
                                    <Text fontSize='sm' as='span'>Awesome (5)</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Progress size='lg' value={64} />    
                                </GridItem>
                            </Grid>

                            <Grid 
                                templateColumns='repeat(10, 1fr)'
                            >
                                <GridItem colSpan={3}>
                                    <Text fontSize='sm' as='span'>Great (4)</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Progress size='lg' value={64} />    
                                </GridItem>
                            </Grid>

                            <Grid 
                                templateColumns='repeat(10, 1fr)'
                            >
                                <GridItem colSpan={3}>
                                    <Text fontSize='sm' as='span'>Good (3)</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Progress size='lg' value={64} />    
                                </GridItem>
                            </Grid>

                            <Grid 
                                templateColumns='repeat(10, 1fr)'
                            >
                                <GridItem colSpan={3}>
                                    <Text fontSize='sm' as='span'>Okay (2)</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Progress size='lg' value={64} />    
                                </GridItem>
                            </Grid>

                            <Grid 
                                templateColumns='repeat(10, 1fr)'
                            >
                                <GridItem colSpan={3}>
                                    <Text fontSize='sm' as='span'>Awful (1)</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Progress size='lg' value={64} />    
                                </GridItem>
                            </Grid>
                        </Stack>
                    
                        <Center>
                            <Heading
                                as={'h3'}
                                size={'xs'}
                                color={primaryTextColor[colorMode]}
                                px={8}
                                >
                                Course Rating Distribution
                            </Heading>
                        </Center>
                    </Stack>
                </Box>
            </Stack>

            {/* This stack contains regarding reviews for the course */}
        </Container>
    )
}

CourseReview.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
};