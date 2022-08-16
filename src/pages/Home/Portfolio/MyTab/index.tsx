import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

import { ProjectsPanel } from './ProjectsPanel';
import { ExperiencesPanel } from './Experiences';
import { SkillPanel } from './Skill';

import { useCollection } from '@nandorojo/swr-firestore';
import { useLenguage } from '../../../../hooks/useLenguage';
import { CertificationPanel } from './CertificationPanel';


interface DataProjectProps {
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
  frontEnd: boolean;
}

interface DataExperiencesProps {
  name: string;
  office: string;
  description: string;
  englishDescription: string;
  companyLink: string;
}

interface DataCertificationProps {
  name: string;
  sent: string;
  image: string;
}

interface DataSkillProps {
  name: string;
  description: string;
  englishDescription: string;
}

export const MyTab: React.FC = () => {
  const { data: DataProjects } = useCollection<DataProjectProps>('projects', {    
    listen: true, 
    orderBy: ['name', 'desc'],
  });

  const { data: DataExperiences } = useCollection<DataExperiencesProps>('Experiences', {listen: true});

  const { data: DataCertifications } =  useCollection<DataCertificationProps>('certifications', {listen: true});
  const { data: DataSkill } = useCollection<DataSkillProps>('skills');

  const { lenguage } = useLenguage();

  return (
    <Tabs colorScheme="purple" variant='soft-rounded'>
      <TabList mt="1rem">
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Experiências" : "Experiences"}</Tab>
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Projetos" : "Projects"}</Tab>
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Certificados" : "Certificate"}</Tab>
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Compentecias" : "Skills"}</Tab>
      </TabList>

      <TabPanels mt="1rem">

      <TabPanel p="0">
          {DataExperiences && <ExperiencesPanel data={DataExperiences} />}

        </TabPanel>

        <TabPanel p="0">
          {DataProjects && <ProjectsPanel data={DataProjects} />}
        </TabPanel>

        <TabPanel p="0">
          {DataCertifications && <CertificationPanel data={DataCertifications} />}
        </TabPanel>

        <TabPanel p="0">
          {DataSkill && <SkillPanel data={DataSkill} />}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};