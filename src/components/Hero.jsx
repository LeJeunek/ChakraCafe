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
    >
      <VStack spacing={4} w="50vw" textAlign="center">
        <Image
          src={hero}
          alt="Hero"
          width="100%" // fills the VStack's 50vw width
          height={{ base: '250px', md: '300px', lg: '400px' }}
          objectFit="cover"
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
