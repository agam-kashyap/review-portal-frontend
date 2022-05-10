import {
    Box,
    Link,
    Text,
    Stack,
    Heading,
    useColorMode,
    useColorModeValue,
    Avatar
} from '@chakra-ui/react'
import { primaryTextColor, shadowColor, shadowColorAlt } from '../styles/darkMode';

export default function ProfCard(props) {

    const { name, email, id } = props;
    const { colorMode } = useColorMode();

    return (
        // Professor card 
        <Link
            href={'/professor/' + id}
        >
            <Box
                minW={60}
                maxW={{ base: '75vw', sm: '35vw', md: '35vw', lg: '35vw', xl: '20vw', "2xl": '20vw' }}
                bgColor={useColorModeValue('gray.200', '#00051e')}
                rounded={'16px'}
                align='center'
                p='4'
                _hover={{
                    boxShadow: shadowColorAlt[colorMode]
                }}
            >
                <Stack align='center'>
                    <Avatar name={name} />
                    <Heading
                        as={'h2'}
                        size={'md'}
                        fontWeight={400}
                        color={primaryTextColor[colorMode]}
                    >
                        {name}
                    </Heading>

                    <Text as='span' size='xs' fontWeight={100}>
                        {email}
                    </Text>
                </Stack>
            </Box>
        </Link>
    )
}