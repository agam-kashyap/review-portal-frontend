import { Box, Heading } from "@chakra-ui/layout"
import { useColorMode, Link } from "@chakra-ui/react";
import { primaryTextColor } from '../styles/darkMode';

const Logo = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p={8} pb={4}>
            <Link href="/">
                <Heading color={primaryTextColor[colorMode]}>selec.</Heading>
            </Link>
        </Box>
    )
};

export default Logo;