import hero from '../assets/hero.png';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={{ base: 6, md: 12 }}
      bg="background.light"
      width="100vw"
    >
      <VStack spacing={4} w="100vw" textAlign="center">
        <Image
          src={hero}
          alt="Hero"
          width="1240px" // fills the VStack's 50vw width
          height="480px"
          minHeight="480px"
          objectFit="cover"
          maxWidth="1400px"
          borderRadius="lg"
        />
        <Heading size="lg" color="brand.900">
          Welcome to Chakra Café
        </Heading>
        <Text fontSize="md" color="gray.600">
          Your daily dose of coffee and community
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
/* Depth 6, Frame 0 */
