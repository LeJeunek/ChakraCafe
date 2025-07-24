import {
  Box,
  Flex,
  IconButton,
  HStack,
  VStack,
  Link as ChakraLink,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";
import NavLinkItem from "./NavlinkItem";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navLinks = [
    { label: "Menu", path: "/menu" },
    { label: "Our Story", path: "/ourstory" },
    { label: "Contact", path: "/contact" },
    { label: "Order Online", path: "/orderonline" },
  ];

  return (
    <Box bg="background.dark" w="100%" px={4} py={4} shadow="sm">
      <Flex
        align="center"
        justify="space-between"
        maxW="1400px"
        mx="auto"
        flexWrap="wrap"
      >
        {/* Wrap logo in RouterLink here only */}
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <IconButton
          aria-label="Toggle Navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
        />
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map(({ label, path }) => (
            <NavLinkItem key={path} to={path} label={label} />
          ))}
        </HStack>
      </Flex>
      <SlideFade in={isOpen} offsetY="-10px">
        {isOpen && (
          <VStack
            spacing={4}
            mt={4}
            px={4}
            align="start"
            bg="background.light"
            w="100%"
          >
            {navLinks.map(({ label, path }) => (
              <NavLinkItem
                key={path}
                to={path}
                label={label}
                onClick={onToggle}
              />
            ))}
          </VStack>
        )}
      </SlideFade>
    </Box>
  );
};

export default Navbar;
