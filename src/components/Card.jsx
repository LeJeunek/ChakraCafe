import { Box, Image, Heading, Text } from "@chakra-ui/react";

const Card = ({ title, description, image }) => {
  return (
    // Card.jsx
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bg="white"
      w="100%" // Let parent (`WrapItem`) define width
      minH="360px"
    >
      <Image
        src={image}
        alt={title}
        borderRadius="md"
        objectFit="cover"
        h="180px"
        w="100%"
      />
      <Heading size="md" mt={4}>
        {title}
      </Heading>
      <Text mt={2} noOfLines={3}>
        {description}
      </Text>
    </Box>
  );
};

export default Card;
