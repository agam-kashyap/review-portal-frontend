import {
    Stack,
    FormControl,
    FormLabel,
    Editable,
    EditableTextarea,
    EditablePreview,
    Select,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    HStack,
    Button,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react'

import React, { useState } from "react";

import Card from "../components/Card";
import Container from "../components/Container";
import Rating from '../components/RateScale';

export function NewCard({ children }) {
    return (
        <Card
            p='20px'
            bgColor={useColorModeValue('gray.300', '#10162d')}
            rounded='16px'
        >
            {children}
        </Card>
    )
}

// courseID, 
// course_quality,
// course_difficulty,
// course_recommended,
// course_grade,
// course_attendance,
// course_project,
// course_review,
// course_tags

export default function ReviewForm(props) {
    // Load this data from API
    const {
        course_name,
        course_quality,
        course_difficulty,
        course_recommended,
        course_grade,
        course_attendance,
        course_project,
        course_review,
        course_tags
    } = props;

    // Things to do
    // Fetch this from backend
    const courses = [
        {name: 'Graph Theory', specialisation: 'TSCD'},
        {name: 'Machine Learning', specialisation: 'AIML'},
        {name: 'Network Science for Web', specialisation: 'AIML'},
        {name: 'History of Ideas', specialisation: 'DT'},
        {name: 'Intro to cryptgraphy', specialisation: 'TSCD'},
        {name: 'Mathematics for Machine Learning', specialisation: 'AIML'},
        {name: 'Real Time Operating Systems', specialisation: 'VLSI'},
        {name: 'Physics', specialisation: 'GEN'},
        {name: 'Internet of Things', specialisation: 'NC'},
    ]

    const tags_list = ['Tough Grader',
    'Get Ready To Read',
    'Participation Matters',
    'Group Projects',
    'Amazing Lectures',
    'Clear Grading Criteria',
    'Gives Good Feedback',
    'Inspirational',
    'Lots Of Homework',
    'Hilarious',
    'Beware Of Surprise Quizzes',
    'So Many Papers',
    'Caring',
    'Respected',
    'Lecture Heavy',
    'Test Heavy',
    'Graded By Few Things']

    const teaching_labels = {
        "1": "Awful",
        "2": "Ok",
        "3": "Good",
        "4": "Great",
        "5": "Awesome"
    };

    const teaching_fillColor = {
        "1": "red" ,
        "2": "coral" ,
        "3": "orange" ,
        "4": "teal" ,
        "5": "green"
    }

    const difficulty_labels = {
        "1": "No Effort",
        "2": "Easy",
        "3": "Medium",
        "4": "Hard",
        "5": "Very Hard"
    };

    const difficulty_fillColor = {
        "5": "red" ,
        "4": "coral" ,
        "3": "orange" ,
        "2": "teal" ,
        "1": "green"
    }

    const checkboxLimit = 3

    const [difficulty, setDifficulty] = useState(course_difficulty);
    const handleDifficultyChange = (value) => {
        setDifficulty(value);
    };

    const [quality, setQuality] = useState(course_quality);
    const handleQualityChange = (value) => {
        setQuality(value);
    };

    const [recommended, setRecommended] = useState(course_recommended);
    const [attendance, setAttendance] = useState(course_attendance);
    const [cpReqd, setCpReqd] = useState(course_project);
    const [grade, setGrade] = useState(course_grade);
    const [tags, setTags] = useState((course_tags) => course_tags==undefined?[]:course_tags);
    const [review, setReview] = useState(course_review);

    function handleFormSubmit() {
        console.log(
            recommended, attendance, cpReqd, review, attendance, grade, tags
        )
    }
    
    return (
        <Container>
            <Stack spacing={8}>
                {/* Dropdown with course name */}
                <NewCard key='cname'>
                    <FormControl>
                        <FormLabel htmlFor='course'>Course Name</FormLabel>
                        <Select id='course' placeholder={course_name}>
                            {courses.map(course => 
                                    <option>{course.name}</option>
                                )
                            }
                        </Select>
                    </FormControl>
                </NewCard>
                
                {/* Subquestions */}
                <SimpleGrid 
                    columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }}
                    spacing={2} 
                    justify='start'
                >
                    <NewCard key='course_difficulty'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>Rate course difficulty</FormLabel>
                            <Rating id='course_difficulty' 
                                labels={difficulty_labels}
                                fillColor={difficulty_fillColor}
                                rate={difficulty} 
                                setRate={handleDifficultyChange} 
                            />
                        </FormControl>
                    </NewCard>

                    <NewCard key='course_quality'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>Rate course quality</FormLabel>
                            <Rating id='course_quality' 
                                labels={teaching_labels}
                                fillColor={teaching_fillColor}
                                rate={quality} 
                                setRate={handleQualityChange} 
                            />
                        </FormControl>
                    </NewCard>
                </SimpleGrid>

                <SimpleGrid 
                    columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }}
                    spacing={2} 
                    justify='start'
                >
                    <NewCard key='recommended'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>Do you recommend this course?</FormLabel>
                            <RadioGroup defaultValue={course_recommended} onChange={setRecommended}>
                                <HStack spacing='24px' justify='start'>
                                    <Radio value='Yes'>Yes</Radio>
                                    <Radio value='No'>No</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                    </NewCard>

                    <NewCard key='attendance'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>Is attendance required?</FormLabel>
                            <RadioGroup defaultValue={course_attendance} onChange={setAttendance}>
                                <HStack spacing='24px' justify='start'>
                                    <Radio value='Yes'>Yes</Radio>
                                    <Radio value='No'>No</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                    </NewCard>

                    <NewCard key='project'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>Is there a course project?</FormLabel>
                            <RadioGroup defaultValue={course_project} onChange={setCpReqd}>
                                <HStack spacing='24px' justify='start'>
                                    <Radio value='Yes'>Yes</Radio>
                                    <Radio value='No'>No</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                    </NewCard>
                </SimpleGrid>

                <NewCard key='grade'>
                    <FormControl >
                        <FormLabel as='legend'>Course Grade</FormLabel>
                        <RadioGroup defaultValue={course_grade} onChange={setGrade}>
                            <SimpleGrid 
                                columns={4}
                                spacing={2} justify='start'
                            >
                                <Radio value='A'>A</Radio>
                                <Radio value='A-'>A-</Radio>
                                <Radio value='B'>B</Radio>
                                <Radio value='B-'>B-</Radio>
                                <Radio value='C'>C</Radio>
                                <Radio value='C-'>C-</Radio>
                                <Radio value='D'>D</Radio>
                                <Radio value='F'>F</Radio>
                            </SimpleGrid>
                        </RadioGroup>
                    </FormControl>
                </NewCard>

                {/* Select Tags */}
                <NewCard key='tags'>
                    <FormControl isRequired>
                        <FormLabel as='legend'>Select atmost 3 tags</FormLabel>
                        <CheckboxGroup colorScheme='green' defaultValue={course_tags}
                            onChange={setTags} 
                        >
                            <SimpleGrid 
                                columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 4, "2xl": 4 }}
                                spacing={2} justify='start'
                            >
                                {tags_list.map(tag => 
                                        <Checkbox value={tag} isDisabled={!tags.includes(tag) && tags.length>=3}>{tag}</Checkbox>
                                    )
                                }
                            </SimpleGrid>
                        </CheckboxGroup>
                    </FormControl>
                </NewCard>

                {/* review */}
                <NewCard>
                    <FormControl isRequired>
                    <FormLabel as='legend'>Write your review</FormLabel>
                        <Editable placeholder='Enter your review here' defaultValue={review} onSubmit={setReview} startWithEditView >
                            <EditablePreview />
                            <EditableTextarea p={4} />
                        </Editable>
                    </FormControl>
                </NewCard>
            </Stack>
            <Button
                    mt={4}
                    maxW={20}
                    colorScheme='teal'
                    // isLoading={isSubmitting}
                    onClick={handleFormSubmit}
                    type='submit'
                >
                    Update
            </Button>
        </Container>
    )
}