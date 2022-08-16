import React from 'react';

import { Text, Accordion, AccordionItem, AccordionButton, Link, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

import { useLenguage } from '../../../../../hooks/useLenguage';


interface dataProps {
  name: string;
  office: string;
  description: string;
  englishDescription: string;
  companyLink: string;
}

interface ExperiencesPanelProps {
  data: dataProps[]
}

export const ExperiencesPanel: React.FC<ExperiencesPanelProps> = ({ data }) => {

  const { lenguage } = useLenguage();
  
  return (
    <Accordion allowToggle flex="1" h="50vh">
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
              {item.office}
            </Text >
            <br/>
            <Text fontSize={["0.8rem", "1rem"]}>
              {lenguage ? item.description : item.englishDescription}
            </Text >
            <br/>
            <Link href={item.companyLink} color="blue.500" target="_blank" fontSize={["0.6rem", "0.8rem", "1rem"]}>
              Site da Empresa.
            </Link>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};