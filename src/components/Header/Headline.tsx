import { useLenguage } from '../../hooks/useLenguage';
import { Flex, Text } from '@chakra-ui/react';

export const Headline = () => {
  const { lenguage } = useLenguage();

  return (
    <Flex
      align="center"
      mt={["0.5rem", "1rem", "1.5rem"]}
    >
      <Text
        color="gray.300"
        fontSize={["0.6rem", "0.8rem", "1rem"]}
      >
        {lenguage ? "Desenvolvedor Back-end " : "Back-end Developer"}
      </Text>

      <Text color="purple.300" margin="0 0.5rem">
        /
      </Text>

      <Text
        color="gray.300"
        fontSize={["0.6rem", "0.8rem", "1rem"]}
      >
        {lenguage ? "Bahia, Brasil" : "Bahia, Brazil"}
      </Text>
    </Flex>
  );
};