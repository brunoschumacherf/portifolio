import { Tooltip } from '../../../components/Tooltip';

import { ImLinkedin, ImGithub } from 'react-icons/im';
import { CgInstagram } from 'react-icons/cg';

import { HStack, Box, Icon } from '@chakra-ui/react';

export const Footer = () => (
  <HStack ml="auto">
    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://www.linkedin.com/in/schumacherbruno/"
      >
        <Icon as={ImLinkedin} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>

    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://github.com/brunoschumacherf"
      >
        <Icon as={ImGithub} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>

    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://www.instagram.com/schumacherbruno/"
      >
        <Icon as={CgInstagram} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>
  </HStack>
);