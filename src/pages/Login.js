import {
    Box,
    Stack,
    Heading,
    Text,
    Button,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';

import Container from '../components/Container';
import { SiMicrosoftoutlook } from "react-icons/si";

export default function SignUp() {
    const outlookBg = "#005A9F";
    const outlookText = "gray.100";
    const outlookHover = { bg: "#005ACF" };
    const outlookActive = { bg: "#005A9F" };

    return (
        <Container>
            <Box position={'relative'} 
                py={10} 
                align='center'
            >
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 12 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}                
                    borderRadius='16px'
                    borderWidth='1.5px'
                    borderStyle='solid'
                    borderColor={'black'}    
                >
                    <Stack spacing={8}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.6}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Login
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Login using your IIITB's Outlook mail ID to access
                            further resources on the website.
                        </Text>
                    </Stack>
                    <Box as={'form'}>
                        <Button
                            fontSize='sm'
                            me='0px'
                            mb='26px'
                            py='15px'
                            h='50px'
                            borderRadius='16px'
                            bg={outlookBg}
                            color={outlookText}
                            _hover={outlookHover}
                            _active={outlookActive}
                            _focus={outlookActive}
                            fontWeight='500'
                        >
                            <Icon as={SiMicrosoftoutlook} w='20px' h='20px' me='10px' />
                            Login using Outlook
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}

