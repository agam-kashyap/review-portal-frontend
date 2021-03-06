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
    Avatar,
    Spacer,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid,
    Button,
    Link
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from 'react'

import axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { HSeparator } from "../utils/Separator";
import ProfessorReviewBlock from "../components/ProfessorReviewBlock";
import { primaryTextColor, secondaryTextColor } from "../styles/darkMode";

const tags = [
    'Graded By Few Things',
    'Beware Of Surprise Quizzes',
    'Test Heavy'
]

function truncate(str) {
    if (str.length > 20) {
        return str.slice(0, 20) + "...";
    } else {
        return str;
    }
}

export default function ProfessorReview(props) {
    const [profData, setProfData] = useState()
    const [profReviewData, setProfReviewData] = useState()
    const params = useParams();
    useEffect(() => {
        axios
            .get(
                "http://52.158.131.5:3000/profs/" + params.id
            )
            .then((res) => {
                setProfData(res.data);
            })
            .catch((err) => console.log(err));

        axios
            .get(
                "http://52.158.131.5:3000/review/prof/" + params.id
            )
            .then((res) => {
                setProfReviewData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const { colorMode } = useColorMode()
    const bg = useColorModeValue('gray.200', '#00051e')

    var tags_list = {
        'awesome': 'good',
        'helpful': 'good',
        'good Listener': 'good',
        'Tough Grader': 'bad',
        'Get Ready To Read': 'bad',
        'Participation Matters': 'bad',
        'Group Projects': 'average',
        'Amazing Lectures': 'good',
        'Clear Grading Criteria': 'good',
        'Gives Good Feedback': 'good',
        'Inspirational': 'good',
        'Lots Of Homework': 'bad',
        'Hilarious': 'average',
        'Beware Of Surprise Quizzes': 'bad',
        'So Many Papers': 'bad',
        'Caring': 'good',
        'Respected': 'good',
        'Lecture Heavy': 'bad',
        'Test Heavy': 'bad',
        'Graded By Few Things': 'average'
    }

    var courses_offered = profData && profData.prof_courses;
    var filteredProfReviewData = profReviewData
    // filter from metadata
    function filterCourse(course_name) {
        console.log(courses_offered)
        // filteredProfReviewData = profReviewData.filter(
        //     obj => obj.prof_courses==course_name
        // )
    }

    return (
        profData && profReviewData &&
        <Container>
            {"PDATA",console.log(profData)}
            {/* This stack contains details regarding the Professor */}
            <Stack
                pt='20px'
                pb='20px'
                spacing='10px'
                direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row', '2xl': 'row' }}
            >
                <Box
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '30vw', '2xl': '30vw' }}
                    bgColor={bg}
                    boxShadow={'2xl'}
                    rounded={'16px'}
                    alignItems='center'
                >
                    {/* Things to do
                    make the text responsive, variable card height */}
                    <Stack p='8' spacing={'8'}>
                        <Stack spacing={4} direction='row' align={'center'}>
                            {/* Professor Name */}
                            <Avatar name={profData.prof_name} />
                            <Heading
                                as={'h2'}
                                size={'lg'}
                                color={primaryTextColor[colorMode]}
                            >
                                {profData.prof_name}
                            </Heading>
                        </Stack>

                        {/* Things to do
                        Fetch this from API */}
                        <Stack spacing={2}>
                            <Heading
                                as={'h3'}
                                size={'xs'}
                                color={primaryTextColor[colorMode]}
                            >
                                Courses taught
                            </Heading>
                            <Stack spacing={'4px'}>
                                {profData.prof_courses.map(
                                    courses => {
                                        return (
                                            <Link href={'/course/' + courses}>
                                                <Text fontSize={"xs"} as={'span'} color={secondaryTextColor[colorMode]}>
                                                    {courses}
                                                </Text>
                                            </Link>
                                        )
                                    }
                                )}
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>

                <Box
                    w={{ base: '70vw', sm: '50vw', md: '60vw', lg: '50vw', xl: '25vw', '2xl': '20vw' }}
                    bgColor={bg}
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
                                        {/* Professor Rating */}
                                        {/* Things to do
                                    This value is not present in backend, fix it */}
                                        <Heading
                                            as={'h3'}
                                            size={'2xl'}
                                            color={primaryTextColor[colorMode]}
                                        >
                                            {profData.prof_qual.$numberDecimal}
                                            <Text as='sup' fontSize='sm' color={secondaryTextColor[colorMode]}>
                                                /5
                                            </Text>
                                        </Heading>
                                        <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                            Overall Rating
                                        </Text>
                                    </Stack>
                                    <HSeparator />
                                    {/* Vertical Separator(Recommended | Level of Diffiulty) */}
                                    <Stack
                                        spacing={'10px'}
                                        align='center'
                                        direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}
                                    >
                                        <Stack spacing={'10px'} align='center'>
                                            {/* Professor Rating */}
                                            <Heading
                                                as={'h3'}
                                                size={'2xl'}
                                                color={primaryTextColor[colorMode]}
                                            >
                                                {profData.prof_takeAgain}
                                            </Heading>
                                            <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                                Recommended by
                                            </Text>
                                        </Stack>

                                        <Divider orientation="vertical" />

                                        <Stack spacing={'10px'} align='center'>
                                            {/* Level of difficulty */}
                                            <Heading
                                                as={'h3'}
                                                size={'2xl'}
                                                color={primaryTextColor[colorMode]}
                                            >
                                                {profData.prof_diff.$numberDecimal}
                                            </Heading>
                                            <Text as={'span'} color={secondaryTextColor[colorMode]} fontSize={'sm'}>
                                                Level of difficulty
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Professor Tags */}
                                <Stack
                                    direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}
                                >
                                    {/* Things to do
                                Fetch these tags from backend */}
                                    {profData.prof_tags.map(
                                        tag => {
                                            var tag_type = tags_list[tag]
                                            return (
                                                <Tag size={'md'} key={tag} variant='solid'
                                                    colorScheme={
                                                        tag_type.toLowerCase() == "bad" ? "red"
                                                            : tag_type.toLowerCase() == 'good' ? "green"
                                                                : "orange"}
                                                >
                                                    {tag}
                                                </Tag>
                                            )
                                        }
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
                    bgColor={bg}
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
                                { rating: 'Awesome (5)', score: 64 },
                                { rating: 'Great (4)', score: 25 },
                                { rating: 'Good (3)', score: 32 },
                                { rating: 'Okay (2)', score: 1 },
                                { rating: 'Awful (1)', score: 5 }
                            ].map(
                                rate => {
                                    return (
                                        <SimpleGrid
                                            columns={2}
                                        >
                                            <Text fontSize='sm' as='p'>{rate.rating}</Text>
                                            <Progress size='lg' value={rate.score} max='100' />
                                        </SimpleGrid>
                                    )
                                }
                            )}
                        </Stack>

                        <Center>
                            <Heading
                                as={'h3'}
                                size={'xs'}
                                color={primaryTextColor[colorMode]}
                                px={8}
                            >
                                Professor Rating Distribution
                            </Heading>
                        </Center>
                    </Stack>
                </Box>
            </Stack>

            {/* This box contains regarding reviews for the Professor */}
            <Box
                w={{ base: '90vw', sm: '85vw', md: '85vw', lg: '85vw', xl: '85vw', '2xl': '85vw' }}
                bgColor={bg}
                boxShadow={'2xl'}
                rounded={'16px'}
            >
                <Stack spacing={6} py={8}>
                    <Stack align='center' px={8}
                        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}
                    >
                        <Heading
                            as={'h3'}
                            size={'md'}
                            color={primaryTextColor[colorMode]}
                        >
                            Professor Reviews
                        </Heading>
                        <Spacer />
                        {/* Things to do
                        Fix UI, align dropdown to right */}
                        <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<ChevronDownIcon
                                    alignItems='end'
                                />}
                            >
                                Filter Course
                            </MenuButton>
                            <MenuList>
                                {
                                    courses_offered.map(
                                        course_name => {
                                            return (
                                                <MenuItem
                                                    key={course_name}
                                                    onClick={filterCourse}
                                                >
                                                    {truncate(course_name)}
                                                </MenuItem>
                                            )
                                        }
                                    )
                                }
                            </MenuList>
                        </Menu>
                    </Stack>
                    <Stack spacing={4} px={8}>
                        {filteredProfReviewData.map(
                            profReview => {
                                var user = profReview.review_user
                                var cname = profReview.review_course
                                var quality = profReview.quality.$numberDecimal
                                var difficulty = profReview.difficulty.$numberDecimal
                                var date = profReview.date
                                var upvotes = profReview.upvote
                                var downvotes = profReview.downvote
                                var grading= profReview.grading
                                var recommended= profReview.takeAgain? 'Yes': 'No'
                                var attendance= profReview.attendance? 'Yes': 'No'
                                var project= profReview.project? 'Yes': 'No'
                                var content= profReview.content
                                var tags= profReview.tags
                                return (
                                    <ProfessorReviewBlock
                                        cname={cname}
                                        quality={quality}
                                        difficulty={difficulty}
                                        date={date}
                                        upvotes={upvotes}
                                        downvotes={downvotes}
                                        recommended={recommended}
                                        grading={grading}
                                        attendance={attendance}
                                        project={project}
                                        content={content}
                                        tags={tags}
                                    />
                                )
                            }
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

ProfessorReview.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
};