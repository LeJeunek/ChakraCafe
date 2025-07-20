// src/components/Card.jsx
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const Card = ({ title, description, image }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      p={4}
      bg="white"
      w={{ base: "50%", md: "calc((1280px - 2 * 12px) / 3)" }}
    >
      <Image src={image} alt={title} borderRadius="md" />
      <Heading size="md" mt={4}>
        {title}
      </Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default Card;
