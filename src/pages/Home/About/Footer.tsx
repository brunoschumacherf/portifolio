import { Tooltip } from '../../../components/Tooltip';

import { ImLinkedin, ImGithub } from 'react-icons/im';
import { CgInstagram } from 'react-icons/cg';

import { HStack, Box, Icon } from '@chakra-ui/react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

export const Footer = () => (
  <HStack ml="auto">
    <Tooltip>
      <ChakraTooltip bg="purple.300" label="Linkedin" color="white" hasArrow p="0.5rem">
        <Box 
          as="a" 
          target="_blank" 
          href="https://www.linkedin.com/in/schumacherbruno/"
        >
          <Icon as={ImLinkedin} color="purple.300" h="2rem" w="2rem"/>
        </Box>
      </ChakraTooltip>
    </Tooltip>

    <Tooltip>
      <ChakraTooltip bg="purple.300" label="Github" color="white" hasArrow p="0.5rem">
        <Box 
          as="a" 
          target="_blank" 
          href="https://github.com/brunoschumacherf"
        >
          <Icon as={ImGithub} color="purple.300" h="2rem" w="2rem"/>
        </Box>
      </ChakraTooltip>
    </Tooltip>

    <Tooltip>
      <ChakraTooltip bg="purple.300" label="Instagram" color="white" hasArrow p="0.5rem">
        <Box 
          as="a" 
          target="_blank" 
          href="https://www.instagram.com/schumacherbruno/"
        >
          <Icon as={CgInstagram} color="purple.300" h="2rem" w="2rem"/>
        </Box>
        </ChakraTooltip>
    </Tooltip>
  </HStack>
);