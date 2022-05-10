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
    SimpleGrid
} from '@chakra-ui/react'
import PropTypes from "prop-types";
import { HSeparator, VSeparator } from "../utils/Separator";
import ReviewBlock from "../components/Review";

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
                            <Stack spacing={'1px'}>
                                {[
                                    "T.K Srikkanth",
                                    "Jaya Sreevalsan Nair"
                                ].map(
                                        courses => {return (
                                            <Text fontSize={"xs"} as={'span'} color={secondaryTextColor[colorMode]}>
                                                {courses}
                                            </Text>
                                    )}
                                )}
                            </Stack>
                        </Stack>                        
                    </Stack>
                </Box>

                <Box 
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '25vw', '2xl': '20vw' }} 
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
                                <HSeparator />
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
                                {/* Things to do
                                Fetch these tags from backend */}
                                {[
                                    {tagname: 'boring', type: 'bad'},
                                    {tagname: 'awesome', type: 'good'},
                                    {tagname: 'okayish', type: 'average'}
                                ].map(
                                    tag => {return(
                                        <Tag size={'md'} key={tag.tagname} variant='solid' 
                                            colorScheme = {
                                            tag.type.toLowerCase()=="bad" ? "red" 
                                            : tag.type.toLowerCase()=='good' ? "green" 
                                            : "orange"}
                                        >
                                                {tag.tagname}
                                        </Tag>
                                    )}
                                )
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    </Center>
                </Box>

                {/* Ratings Aggregate graph */}
                <Box 
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '30vw', '2xl': '30vw' }} 
                    bgColor={useColorModeValue('gray.200', '#00051e')}
                    boxShadow={'2xl'}
                    rounded={'16px'}
                >   
                    {/* Things to do
                    Maybe figure out a way with flex or something for vertical alignment */}
                    <Stack 
                        m={8}
                        spacing={{ base: '6', sm: '6', md: '8', lg: '8', xl: '10', '2xl': '10' }}
                        maxW={{ base: '60vw', sm: '40vw', md: '57vw', lg: '48vw', xl: '28vw', '2xl': '28vw' }}
                    >
                        <Stack>
                            {/* Things to do
                            Fetch this list of ratings */}
                            {[
                                {rating: 'Awesome (5)', score: 64},
                                {rating: 'Great (4)', score: 25},
                                {rating: 'Good (3)', score: 32},
                                {rating: 'Okay (2)', score: 1},
                                {rating: 'Awful (1)', score: 5}
                            ].map(
                                rate => {return (
                                    <SimpleGrid
                                        columns={2}
                                    >
                                            <Text fontSize='sm' as='span'>{rate.rating}</Text>
                                            <Progress size='lg' value={rate.score} max='100'/>
                                    </SimpleGrid>
                                )}
                            )}
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

            {/* This box contains regarding reviews for the course */}
            <Box 
                w={{ base: '90vw', sm: '85vw', md: '85vw', lg: '85vw', xl: '85vw', '2xl': '85vw' }} 
                bgColor={useColorModeValue('gray.200', '#00051e')}
                boxShadow={'2xl'}
                rounded={'16px'}
            > 
                <Stack spacing={6} py={8}>
                    <Heading
                        as={'h3'}
                        size={'md'}
                        color={primaryTextColor[colorMode]}
                        px={8}
                    >
                        Course Reviews
                    </Heading>

                    <Stack spacing={4} px={8}>
                        <ReviewBlock 
                            quality={4} 
                            difficulty={3} 
                            date='07/02/2020'
                            upvotes='10'
                            downvotes='5'
                            recommended={'Yes'}
                            grading={'Yes'}
                            attendance={'Yes'}
                            project={'Yes'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor nec justo vulputate molestie. Pellentesque venenatis, sem id volutpat venenatis, turpis lorem convallis nisi, porta sollicitudin nisi leo ac ligula. Quisque sed nibh pellentesque, porta leo at, luctus orci. Donec ac varius turpis. Cras et sem sit amet justo aliquam commodo. Integer laoreet et nunc nec laoreet. Cras et interdum metus. Maecenas tempus at risus et bibendum. Nunc vitae nunc nisi. Pellentesque iaculis vel lectus eu semper. Sed euismod eleifend laoreet. Fusce vel nisi est. Praesent nec dolor ac mi condimentum elementum. Proin non iaculis ante, eu tristique velit.'}
                            tags= {[
                                {tagname: 'boring', type: 'bad'},
                                {tagname: 'awesome', type: 'good'},
                                {tagname: 'okayish', type: 'average'}
                            ]}
                        />
                    </Stack>
                </Stack>
            </Box>
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