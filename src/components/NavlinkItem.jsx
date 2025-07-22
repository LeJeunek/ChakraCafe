import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavLinkItem = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      onClick={onClick}
      p={2}
      w="100%"
      borderRadius="md"
      textDecoration="none"
      color={isActive ? "brand.600" : "brand.900"}
      fontWeight={isActive ? "bold" : "normal"}
      bg={isActive ? "brand.100" : "transparent"}
      _hover={{ bg: "brand.200", textDecoration: "none" }}
    >
      {label}
    </ChakraLink>
  );
};
export default NavLinkItem
