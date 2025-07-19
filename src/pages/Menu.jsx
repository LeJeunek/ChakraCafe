import { Box, Heading, Text } from "@chakra-ui/react";

const Menu = () => {
    return (
        <>
        <Box p={6} bg="white" boxShadow="md" borderRadius="md">
            <Heading as="h2" size="lg" mb={4} color="brand.900">Menu</Heading>
            <Text fontSize="md" color="brand.800">Explore our delicious offerings!</Text>
        </Box>
   </> );
}
export default Menu;