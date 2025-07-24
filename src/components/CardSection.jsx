import { Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./Card";
import tart from "../assets/tart.png";
import sandwich from "../assets/sandwich.png";
import latte from "../assets/latte.png";

const CardSection = () => {
  return (
    <Wrap spacing={4} justify="center" px={4} py={8} maxW="1400px" mx="auto">
      <WrapItem flexBasis={{ base: "47%", md: "300px" }}>
        <Card
          title="Latte"
          description="Creamy latte with a hint of vanilla."
          image={latte}
          colorScheme="#c73131"
        />
      </WrapItem>
      <WrapItem flexBasis={{ base: "47%", md: "300px" }}>
        <Card
          title="Veggie Sandwich"
          description="Vegan sandwich with fresh veggies."
          image={sandwich}
          colorScheme="#c73131" // <--- Add this
        />
      </WrapItem>
      <WrapItem flexBasis={{ base: "47%", md: "300px" }}>
        <Card
          title="Tart"
          description="Delicious fruit tart with a buttery crust."
          image={tart}
          colorScheme="#c73131" // <--- Add this
        />
      </WrapItem>
    </Wrap>
  );
};

export default CardSection;
