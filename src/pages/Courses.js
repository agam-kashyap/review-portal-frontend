import Container from "../components/Container";

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

import { primaryTextColor } from "../styles/darkMode";
import CourseCard from "../components/CourseCard";

export default function Courses() {

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

    var specialisations = courses.map(course => course.specialisation)
                            .filter((value, index, self) => self.indexOf(value) === index)
    
    console.log(specialisations)

    var spec_count = specialisations.length
    var range_array = [...Array(spec_count).keys()].map(function(val){return ++val;}).map(String)
    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: range_array,
    })

    const { colorMode } = useColorMode();
    return (
        <Container>
            <SimpleGrid
                py={8}
                columns={{ base: spec_count/2, sm: spec_count/2, md: spec_count/2, lg: spec_count, xl: spec_count, "2xl": spec_count }}
                gap={8}
            >
                <CheckboxGroup defaultValue={range_array}
                    {...getCheckboxProps()}
                >
                    {   
                        specialisations.map(
                        (specialisation, index) => {
                            return(
                                <Checkbox size='lg' {...getCheckboxProps({ value:(parseInt(index)+1).toString() })}>{specialisation}</Checkbox>
                            )}
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
                                {specialisations[specialisation-1]}
                            </Heading>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }}
                                gap={3}
                            >                                
                                { courses.map(
                                    course => {
                                        return(
                                            (specialisations[specialisation-1] == course.specialisation) &&
                                            <CourseCard
                                                name= {course.name}
                                                specialisation= {course.specialisation}
                                                image= {'/course_cards/'+course.specialisation+'.png'}
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