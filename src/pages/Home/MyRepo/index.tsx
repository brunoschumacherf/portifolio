import React from 'react';

import { Flex, Heading, Img, SimpleGrid } from '@chakra-ui/react';

export const MyRepo: React.FC = () => {
  return (
    <Flex
      id="repostats"
      direction="column"
    >
      <Heading 
        color="purple.300"  
        fontSize={['2rem' , '3rem']}
        mb="1rem" 
      >
        Repository Stats
      </Heading>

      <SimpleGrid
        columns={[1, null, 2]}
        gap="5"
        mt="2"
      >
        <Img 
          w="100%"
          maxH="15rem"
          src="https://github-readme-stats.vercel.app/api?username=brunoschumacherf&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
        />

        <Img 
          w="100%"
          maxH="15rem"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=brunoschumacherf&layout=compact&langs_count=7&theme=dark"
        />
      </SimpleGrid>
      
    </Flex>
  );
}