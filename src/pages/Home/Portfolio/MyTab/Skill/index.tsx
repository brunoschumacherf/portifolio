import React from 'react';
import { Text, Accordion, AccordionItem, AccordionButton, Link, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { useLenguage } from '../../../../../hooks/useLenguage';


interface dataProps {
  name: string;
  description: string;
  englishDescription: string;

}

interface SkillPanelProps {
  data: dataProps[]
}

export const SkillPanel: React.FC<SkillPanelProps> = ({ data }) => {

  const { lenguage } = useLenguage();
  
  return (
    <Accordion allowToggle flex="1" h="100vh">
      {data.map(item => (
        <AccordionItem key={item.name}>
            <AccordionButton _focus={{}} flex="1">
              <Text as="h2" fontSize={["0.8rem", "1rem"]}>
                {item.name}
              </Text >
              <AccordionIcon ml="auto"/>
            </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["0.8rem", "1rem"]}>
              {lenguage ? item.description : item.englishDescription}
            </Text >

          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};