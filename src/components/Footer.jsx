// components/Footer.jsx
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("brand.100", "brand.50")}
      color="brand.900"
      py={10}
      px={6}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        textAlign="center"
      >
        {/* Left: Privacy Policy */}
        <Link mb={{ base: 4, md: 0 }} fontSize="sm">
          Privacy Policy
        </Link>

        {/* Center: Social Icons and Copyright */}
        <Box>
          <HStack spacing={4} justify="center" mb={2}>
            <IconButton
  as="a"
  href="#"
  aria-label="Instagram"
  icon={<FaInstagram />}
  variant="ghost"
  size="sm"
  isRound
  color="black" // 👈 make icon black
  _hover={{ color: "brand.600" }}
/>
<IconButton
  as="a"
  href="#"
  aria-label="Facebook"
  icon={<FaFacebookF />}
  variant="ghost"
  size="sm"
  isRound
  color="black"
  _hover={{ color: "brand.600" }}
/>

<IconButton
  as="a"
  href="#"
  aria-label="Twitter"
  icon={<FaTwitter />}
  variant="ghost"
  size="sm"
  isRound
  color="black"
  _hover={{ color: "brand.600" }}
/>

          </HStack>
          <Text fontSize="sm">© 2024 Chakra Café. All rights reserved.</Text>
        </Box>

        {/* Right: Terms of Service */}
        <Link mb={{ base: 4, md: 0 }} fontSize="sm">
          Terms of Service
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
