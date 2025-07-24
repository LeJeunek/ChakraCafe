import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#F5E0D3',
      200: '#F0C4A3',
      300: '#E8B08C',
      600: '#CC6600',
      700: '#D9A066',
      800: '#6F4E37',
      900: '#2E1F17',
    },
    background: {
      light: '#f0e2d7ff',
      dark: '#c08a6dff',
    },
  },
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
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
            bg: 'brand.700',
          },
        },
      },
    },
  },
});

export default theme;
