import {
    Box,
    Grid,
    GridItem,
    SimpleGrid,
    Icon,
    Text,
    Flex,
    useColorModeValue,
    IconButton,
    HStack,
    Center
} from '@chakra-ui/react'

import {
    FaCheckDouble,
    FaAngleDoubleUp
} from 'react-icons/fa'

import { BiDownvote, BiUpvote } from "react-icons/bi";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import MiniStatistics from "./MiniStatistics"
import ProfessorReviewDescription from "./ProfessorReviewDescription"

export function IconBox(props) {
    const { icon, text, anotherIcon, ...rest } = props;
    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            {...rest}
            gap={{ base: 2, sm: 3, md: 3, lg: 5, xl: 5, '2xl': 5 }}
        >
            {icon}
            {text}
            {anotherIcon}
        </Flex>
    );
}

export default function ProfessorReviewBlock(props) {
    const brandColor = useColorModeValue("black", "white");
    const { 
        cname,
        quality, 
        difficulty, 
        date, 
        upvotes, 
        downvotes,
        recommended,
        grading,
        attendance,
        project,
        content,
        tags
    } = props;
    
    // call upvote API
    function handleUpvote() {
        console.log('upvoted')
        return null
    }

    // call downvote API
    function handleDownvote() {
        console.log('downvoted')
        return null
    }
    
    var score = upvotes-downvotes

    return(
        <Box 
            w={'100%'} 
            bgColor={useColorModeValue('gray.300', '#10162d')}
            boxShadow={'2xl'}
            rounded={'4px'}
        >
            <Grid
                p={4}
                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}                                
            >
                {/* Course Rating
                Level of difficulty */}
                <GridItem 
                    rowSpan={6}
                    colSpan={{ base: 6, sm: 6, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                >
                    <SimpleGrid
                        columns={{ base: 2, sm: 2, md: 1, lg: 1, xl: 1, "2xl": 1 }}
                        gap='5px'
                    >
                            <MiniStatistics
                                startContent={
                                    <IconBox
                                        w='20px'
                                        h='20px'
                                        icon={
                                            <Icon w='20px' h='20px' as={FaCheckDouble} color={
                                                quality >= 4 ? 'green'
                                                : quality >= 2 ? 'orange'
                                                : 'red'
                                            } />
                                        }
                                    />
                                }
                                name='Quality'
                                value={quality}
                            />
                            <MiniStatistics
                                startContent={
                                    <IconBox
                                        w='20px'
                                        h='20px'
                                        icon={
                                            <Icon w='20px' h='20px' as={FaAngleDoubleUp} color={
                                                difficulty <= 2 ? 'green'
                                                : difficulty <= 3 ? 'orange'
                                                : 'red'
                                            } />
                                        }
                                    />
                                }
                                name='Difficulty'
                                value={difficulty}
                            />
                        </SimpleGrid>
                </GridItem>

                {/* Sub Questions
                Description
                Tags */}
                <GridItem 
                    rowSpan={6}
                    colSpan={{ base: 6, sm: 6, md: 4, lg: 4, xl: 4, '2xl': 4 }}
                >
                    <Box>
                        <ProfessorReviewDescription 
                            cname={cname}
                            recommended={recommended}
                            grading={grading}
                            attendance={attendance}
                            project={project}
                            content={content}
                            tags={tags}
                        />
                    </Box>
                </GridItem>

                {/* Upvotes */}
                {/* Things to do;
                Handle Upvote and Downvote, change their colors respectively */}
                <GridItem 
                    rowSpan={2}
                    colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                    py={4}
                >
                    <IconBox
                        icon={
                            <IconButton 
                                aria-label='upvote' 
                                icon={<BiUpvote />} 
                                variant='outline'
                                onClick={handleUpvote}
                            />
                        }
                        text={<Text as='span' fontWeight={'extrabold'} fontSize={'lg'}>{score}</Text>}
                        anotherIcon={
                            <IconButton 
                                aria-label='downvote' 
                                icon={<BiDownvote />} 
                                variant='outline'
                                onClick={handleDownvote}
                            />
                        }
                    />
                </GridItem>

                {/* Date Time */}
                <GridItem 
                    py={{ base: 6, sm: 6, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                    rowSpan={2}
                    colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                    colStart={{ base: 4, sm: 4, md: 6, lg: 6, xl: 6, '2xl': 6 }}
                >
                    <Text fontSize='xs' as={'h2'} align='center'>
                        Date: {date}
                    </Text>
                </GridItem>

                {/* Edit/Delete */}
                {/* Things to do
                Auth based edit/delete */}
                <GridItem 
                    py={{ base: 6, sm: 6, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                    rowSpan={2}
                    colSpan={{ base: 6, sm: 6, md: 1, lg: 1, xl: 1, '2xl': 1 }}
                    colStart={{ base: 1, sm: 1, md: 6, lg: 6, xl: 6, '2xl': 6 }}
                >
                    <Center>
                        <HStack>
                            <IconButton
                                variant='outline'
                                colorScheme='orange'
                                aria-label='Edit Post'
                                icon={<EditIcon />}
                            />
                            <IconButton
                                variant='outline'
                                colorScheme='red'
                                aria-label='Delete Post'
                                icon={<DeleteIcon />}
                            />
                        </HStack>
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    )
}