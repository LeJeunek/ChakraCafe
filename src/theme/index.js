import { extendTheme } from '@chakra-ui/react';

// Define custom theme
const theme = extendTheme({
  colors: {
    brand: {
      100: '#F5E0D3', // Light latte
      200: '#F0C4A3', // Light caramel
      300: '#E8B08C', // Light coffee
      600: '#CC6600', // CTA button
      700: '#D9A066', // Caramel accent
      800: '#6F4E37', // Coffee brown
      900: '#2E1F17', // Espresso text
    },
    background: {
      light: '#FAF4EF', // Latte background
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: (props) => ({
          bg: 'brand.600',
          color: 'white',
          _hover: {
            bg: 'brand.700',
          },
        }),
      },
    },
  },
});

export default theme;
