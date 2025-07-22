import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg"; // your logo image

const Logo = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={"row"}
        justifyContent="center"
        px={{ base: 2, md: 4 }}
        py={{ base: 2, md: 4 }}
      >
        <Image
          src={logo}
          alt="Chakra Cafe Logo"
          boxSize={{ base: "56px", md: "64px" }}
        />
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontFamily="Poppins"
          color="brand.900"
          ml={{ base: 2, md: 3 }}
          fontWeight="bold"
        >
          Chakra Café
        </Text>
      </Box>
    </>
  );
};

export default Logo;
