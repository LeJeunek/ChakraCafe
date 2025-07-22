import { Box, Heading, Text } from "@chakra-ui/react";

const OurStorySection = () => {
  return (
    <Box as="section" px={6} py={10} maxW="container.md" mx="auto">
      <Heading as="h2" size="xl" mb={4}>
        Our Story
      </Heading>
      <Text fontSize="lg" color="gray.700">
        The Daily Grind started with a simple idea: to create a space where
        people can connect over exceptional coffee and delicious food. We source
        our beans from sustainable farms and bake our pastries fresh every
        morning. Our goal is to provide a welcoming environment where you can
        unwind and enjoy the simple pleasures in life.
      </Text>
    </Box>
  );
};

export default OurStorySection;
