
import Hero from "../components/Hero";

import { VStack } from "@chakra-ui/react";
import Card from "../components/Card";
import tart from "../assets/tart.png";
import sandwich from "../assets/sandwich.png";
import latte from "../assets/latte.png";
const Home = () => {
  return (
    <>
      <Hero />
      <VStack spacing={6} p={10} color={"brand.900"} d="flex" justifyContent="center" alignItems="center" flexDir={{ base: "column", md: "row" }} flexWrap="wrap">
        <Card
      title="Latte"
      description="Creamy latte with a hint of vanilla."
      image={latte}
    /><Card
      title="Veggie Sandwich"
      description="Vegan sandwich with fresh veggies."
      image={sandwich}
    /><Card
      title="Tart"
      description="Delicious fruit tart with a buttery crust."
      image={tart}
    />
      </VStack>
    </>
  );
};

export default Home;
