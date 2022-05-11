import {
    SimpleGrid,
    Checkbox,
    CheckboxGroup,
    useCheckboxGroup,
    Text,
    Stack,
    Heading,
    useColorMode
} from '@chakra-ui/react'

import axios from "axios";

import { primaryTextColor } from "../styles/darkMode";
import Container from "../components/Container";
import CourseCard from "../components/CourseCard";
import { useState, useEffect } from 'react';

export default function Courses() {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        axios
            .get(
                "http://localhost:3001/courses"
            )
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    var specialisations = courses.map(course => course.course_specialisation)
        .filter((value, index, self) => self.indexOf(value) === index)
    var spec_count = specialisations.length
    var range_array = [...Array(spec_count).keys()].map(function (val) { return ++val; }).map(String)

    // Things to do: 
    // This is hardcoded, you should pass the range_array value here instead
    // On double clicking a checkbox a huge space pops up
    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: ['1', '2', '3', '4', '5', '6', '7', '8'],
    })

    const { colorMode } = useColorMode();
    return (
        range_array.length > 0 &&
        <Container>
            <SimpleGrid
                py={8}
                columns={{ base: spec_count / 2, sm: spec_count / 2, md: spec_count / 2, lg: spec_count, xl: spec_count, "2xl": spec_count }}
                gap={8}
            >
                <CheckboxGroup defaultValue={range_array}
                    {...getCheckboxProps()}
                >
                    {
                        specialisations.map(
                            (specialisation, index) => {
                                return (
                                    <Checkbox size='lg' {...getCheckboxProps({ value: (parseInt(index) + 1).toString() })}>{specialisation}</Checkbox>
                                )
                            }
                        )
                    }
                </CheckboxGroup>
            </SimpleGrid>

            <Stack
                spacing={4}
                ml={8}
            >
                {value.map(
                    specialisation => {
                        return (
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
                                    {specialisations[specialisation - 1]}
                                </Heading>
                                <SimpleGrid
                                    columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }}
                                    gap={3}
                                >
                                    {courses.map(
                                        course => {
                                            return (
                                                (specialisations[specialisation - 1] == course.course_specialisation) &&
                                                <CourseCard
                                                    id={course._id}
                                                    name={course.course_name}
                                                    specialisation={course.course_specialisation}
                                                    image={'/course_cards/' + course.course_specialisation + '.png'}
                                                />
                                            )
                                        }
                                    )}
                                </SimpleGrid>
                            </Stack>
                        )
                    }
                )}
            </Stack>
        </Container>
    )
}