import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <Box bg="background.light" minH="100vh" p={10}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourstory" element={<Text>Our Story Page</Text>} />
        <Route path="/orderonline" element={<Text>Order Online Page</Text>} />
      </Routes>
    </Box>
  );
}

export default App;