// "recommended": yes/no,
// "grading": "strict", "moderate", "lenient",
// "attendance": yes/no,
// "project": yes/no

// tags

// content

import {
    Tag,
    Text,
    Flex,
    VStack,
    HStack,
    SimpleGrid,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'
import { secondaryTextColor } from '../styles/darkMode';

export function Question(props) {
    const {question, answer} = props;
    return(
        <HStack>
            <Text as='span' fontSize={'xs'}>{question}:</Text>
            <Text as='span' fontSize={'xs'} fontWeight={'bold'}>{answer}</Text>
        </HStack>
    )
}

export default function ProfessorReviewDescription(props) {
    const { colorMode } = useColorMode()
    const {cname, recommended, grading, attendance, project, content, tags} = props;
    return(
        <VStack spacing={6} alignItems={'left'}>
            {/* Course Name */}
            <Text as='span' fontSize={'sm'} color={secondaryTextColor[colorMode]}>
                {cname}
            </Text>
            {/* Subquestions */}
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }}
            >
                {[
                    {question: 'Recommended', answer: recommended},
                    {question: 'Grading', answer: grading},
                    {question: 'Attendance', answer: attendance},
                    {question: 'Project', answer: project}
                ].map(
                    subquestion => {
                    return(
                        <Question 
                            key={subquestion.question}
                            question={subquestion.question}
                            answer={subquestion.answer}
                        />
                    )}
                )}
            </SimpleGrid>
            {/* Content */}
            <Text as='span' fontSize={'sm'}>
                {content}
            </Text>
            {/* Tags */}
            <HStack>
                {   tags.map(
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
            </HStack>
            <Flex>

            </Flex>
        </VStack>
    )    
}