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
    const { question, answer } = props;
    return (
        <HStack>
            <Text as='span' fontSize={'xs'}>{question}:</Text>
            <Text as='span' fontSize={'xs'} fontWeight={'bold'}>{answer}</Text>
        </HStack>
    )
}

export default function ProfessorReviewDescription(props) {
    const { colorMode } = useColorMode()
    const { cname, recommended, grading, attendance, project, content, tags } = props;
    console.log(cname, recommended, grading, attendance, project, content, tags)
    const questions = [
        { question: 'Recommended', answer: recommended },
        { question: 'Grading', answer: grading },
        { question: 'Attendance', answer: attendance },
        { question: 'Project', answer: project }
    ]

    var tags_list = {
        'awesome': 'good',
        'helpful': 'good',
        'wow': 'good',
        'great': 'good',
        'good Listener': 'good',
        'Tough Grader': 'bad' ,
        'Get Ready To Read': 'bad' ,
        'Participation Matters': 'bad' ,
        'Group Projects': 'average' ,
        'Amazing Lectures': 'good' ,
        'Clear Grading Criteria': 'good' ,
        'Gives Good Feedback': 'good' ,
        'Inspirational': 'good' ,
        'Lots Of Homework': 'bad' ,
        'Hilarious': 'average' ,
        'Beware Of Surprise Quizzes': 'bad' ,
        'So Many Papers': 'bad' ,
        'Caring': 'good' ,
        'Respected': 'good' ,
        'Lecture Heavy': 'bad' ,
        'Test Heavy': 'bad' ,
        'Graded By Few Things': 'average'
    }
    return (
        <VStack spacing={6} alignItems={'left'}>
            {/* Course Name */}
            <Text as='span' fontSize={'sm'} color={secondaryTextColor[colorMode]}>
                {cname}
            </Text>
            {/* Subquestions */}
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 4, xl: 4, "2xl": 4 }}
            >
                {questions.map(
                    subquestion => {
                        return (
                            <Question
                                key={subquestion.question}
                                question={subquestion.question}
                                answer={subquestion.answer}
                            />
                        )
                    }
                )}
            </SimpleGrid>
            {/* Content */}
            <Text as='span' fontSize={'sm'}>
                {content}
            </Text>
            {/* Tags */}
            <HStack>
                {tags.map(
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
            </HStack>
            <Flex>

            </Flex>
        </VStack>
    )
}