import Hero from "../components/Hero";

import { VStack } from "@chakra-ui/react";

import CardSection from "../components/CardSection";
import OurStorySection from "../components/OurStorySection";
import LocationContactSection from "../components/LocationContactSection";
const Home = () => {
  return (
    <>
      <Hero />
      <CardSection />
      <OurStorySection />
      <LocationContactSection />
    </>
  );
};

export default Home;
