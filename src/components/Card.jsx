// Card.jsx
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const Card = ({ title, description, image, colorScheme = "#2E1F17" }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      p={4}
      bg="white"
      textAlign="center"
    >
      <Image src={image} alt={title} mx="auto" mb={4} />
      <Heading as="h3" size="md" mb={2} color="black">
        {title}
      </Heading>
      <Text fontSize="sm" color={colorScheme}>
        {description}
      </Text>
    </Box>
  );
};

export default Card;
