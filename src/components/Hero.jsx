import hero from "../assets/hero.svg";
import { Box, Image, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={{ base: 6, md: 12 }}
      bg="background.light"
      width="100%"
      px={{ base: 4, md: 8 }}
    >
     <Box
  position="relative"
  width="100%"
  maxW="1000px"
  textAlign="center"
  borderRadius="lg"
  overflow="hidden"
  aspectRatio={{ base: "4/3", md: "16/9" }}
>
  <Image
    src={hero}
    alt="Hero"
    width="1850px"
    height="100%"
    objectFit="stretch"
    borderRadius="12xl"
  />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing={4}
          px={4}
          color="white"
        >
          {/* Optional Overlay Content */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Hero;
