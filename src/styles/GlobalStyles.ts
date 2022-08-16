import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    purple: {
      "900": "#070014",
      "800": "#0C0020",
      "700": "#10002b",
      "600": "#F55945",
      "500": "#3c096c",
      "400": "#5a189a",
      "300": "#F5372A",
      "200": "#9d4edd",
      "100": "#c77dff",
      "50": "#e0aaff",
    }
  },

  fonts: {
    heading: 'Outfit',
    body: 'Outfit' 
  },

  styles: {
    global: {
      body: {
        "::-webkit-scrollbar": {
          w: "12px"
        },
        
        "::-webkit-scrollbar-track": {
          bg: "gray.500"
        },
        
        "::-webkit-scrollbar-thumb": {
          bg: "gray.50"
        },

        bg: 'purple.900',
        color: 'gray.200',
      }, 
    }
  }
});