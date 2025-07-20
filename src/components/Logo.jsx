import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg"; // your logo image

const Logo = () => {
  return (
  <>
  <Box display="flex" alignItems="center" flexDirection={"row"} justifyContent="center" p={4} ml>
  <Image src={logo} alt="Chakra Cafe Logo" boxSize="50px"/>;
  <Text fontSize="2xl" fontFamily="Poppins" color="brand.900" ml={2}>Chakra Café</Text>
  </Box>
  </>)
};

export default Logo;
