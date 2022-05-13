import Container from '../components/Container';
import { SiMicrosoftoutlook } from "react-icons/si";
import axios from "axios";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// Things to do
// Verify using a link
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const http = axios.create({
		baseURL: "http://52.158.131.5:3000",
		headers: {
			"content-type": "application/json"
		}
	});
    const payload = JSON.stringify({
        "username": username,
        "password" : password,
        "email" : email,
        "name": name
    });
    const handleSubmit = () => {
		
		axios("http://52.158.131.5:3000/users/register",{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: payload,
            })
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    // let axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    //   };
    // const handleSubmit = async (e)=> {
    //     e.preventDefault();
    //     const response = await axios.post('/users/register', {
    //         username: username,
    //         email: email,
    //         name: name,
    //         password: password,
    //     }, axiosConfig)
    //     .then(function(response){
    //         console.log(response);
    //         setName("");
    //         setEmail("");
    //         setUsername("");
    //         setPassword("");
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     });
    // }

    return (
        <Container>
            <Flex
                minW={'50vw'}
                align={'center'}
                justify={'center'}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to access the reviews
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        borderWidth='1.5px'
                        borderStyle='solid'
                        borderColor={'black'}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="name" isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input 
                                        onChange={e => setName(e.target.value)}
                                        type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="username" isRequired>
                                        <FormLabel>Username</FormLabel>
                                        <Input 
                                        onChange={e => setUsername(e.target.value)}
                                        type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        onChange={e => setPassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    onClick={handleSubmit}
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user?
                                    <Link color={'blue.400'} href='/login'> Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Container>
    );
}

