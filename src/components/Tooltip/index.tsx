import React from 'react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

export const Tooltip: React.FC = ({ children }) =>  (
  <ChakraTooltip>
    {children}
  </ChakraTooltip>
);