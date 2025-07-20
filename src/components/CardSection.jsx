import { Flex } from "@chakra-ui/react";
import Card from "./Card";
import tart from "../assets/tart.png";
import sandwich from "../assets/sandwich.png";
import latte from "../assets/latte.png";

const CardSection = () => {
  return (
    <Flex
      mx="auto"
      p={8}
      color="brand.900"
      flexDir={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={6} // spacing between cards
      ml={{ base: 0, md: 24 }}
    >
      <Card
        title="Latte"
        description="Creamy latte with a hint of vanilla."
        image={latte}
      />
      <Card
        title="Veggie Sandwich"
        description="Vegan sandwich with fresh veggies."
        image={sandwich}
      />
      <Card
        title="Tart"
        description="Delicious fruit tart with a buttery crust."
        image={tart}
      />
    </Flex>
  );
};

export default CardSection;
