import { Box, Heading } from "@chakra-ui/layout"
import { useColorMode, Link } from "@chakra-ui/react";
import { primaryTextColor } from '../styles/darkMode';

const Logo = () => {
    const { colorMode } = useColorMode()
    return (
        <Box mx={4} mb={2}>
            <Link href="/">
                <Heading color={primaryTextColor[colorMode]}>selec.</Heading>
            </Link>
        </Box>
    )
};

export default Logo;