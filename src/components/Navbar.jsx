import {
  HStack,
  Link as ChakraLink,
  Box,
  Flex,
  Spacer,
  flexbox,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box bg="brand.light" px={6} py={4} shadow="sm" borderRadius="md" mb={4}>
      <Flex align="center">
        {/* Wrap logo in RouterLink here only */}
        <RouterLink to="/">
          <Logo />
        </RouterLink>

        <Spacer />

        <HStack spacing={8} d="flex" justify="center" >
          <ChakraLink as={RouterLink} to="/menu" m={4} color="brand.900" textDecoration='none' bg="brand.light" borderRadius="md" p={2} _hover={{ textDecoration: 'none', bg: 'brand.200',  }}>
            Menu
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/ourstory" color="brand.900" textDecoration='none' bg="brand.light" p={2} borderRadius="md" _hover={{ textDecoration: 'none', bg: 'brand.200' }}>
            Our Story
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/location" color="brand.900" textDecoration='none' bg="brand.light" p={2} borderRadius="md" _hover={{ textDecoration: 'none', bg: 'brand.200' }}>
            Location
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/contact" color="brand.900" textDecoration='none' bg="brand.light" p={2} borderRadius="md" _hover={{ textDecoration: 'none', bg: 'brand.200' }}>
            Contact
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/orderonline" color="brand.900" textDecoration='none' bg="brand.light" p={2} borderRadius="md" align="center" _hover={{ textDecoration: 'none', bg: 'brand.300' }}>
            Order Online
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
