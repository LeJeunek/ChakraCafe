import { Box, Heading, Text, Link, Stack } from "@chakra-ui/react";

const LocationContactSection = () => {
  return (
    <Box as="section" px={6} py={10} maxW="container.md" mx="auto">
      <Heading as="h2" size="xl" mb={4}>
        Location & Contact
      </Heading>
      <Stack spacing={2} fontSize="lg" color="gray.700">
        <Text>Visit us at 123 Main Street, Anytown, USA.</Text>
        <Text>Open daily from 7 AM to 7 PM.</Text>
        <Text>
          For inquiries, call us at{" "}
          <Link href="tel:+15551234567" color="teal.500">
            (555) 123-4567
          </Link>
          .
        </Text>
        <Text>
          Email us at{" "}
          <Link href="mailto:info@thedailygrind.com" color="teal.500">
            info@thedailygrind.com
          </Link>
          .
        </Text>
      </Stack>
    </Box>
  );
};

export default LocationContactSection;
