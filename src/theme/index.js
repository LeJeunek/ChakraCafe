import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
        100: '#F5E0D3', // Light latte color
        200: '#F0C4A3', // Light caramel color
        300: '#E8B08C', // Light coffee color
      900: '#2E1F17', // Espresso text
      800: '#6F4E37', // Coffee brown
      700: '#D9A066', // Caramel accent
      600: '#CC6600', // CTA button
    },
    background: {
      light: '#FAF4EF', // Latte background
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.600',
          color: 'white',
          _hover: {
            bg: 'orange.500',
          },
        },
      },
    },
  },
});

export default theme;