import { Text } from '@chakra-ui/react';
import { useLenguage } from '../../../hooks/useLenguage';

export const MyDescription = () => {
  const { lenguage } = useLenguage();
  
  return (
    <>
      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
        fontSize={["0.8rem", "1rem"]}
      >
        {lenguage ? (
          "Olá, meu nome é Bruno Schumacher. Sou estudante de Ciencia da Computação e atualmente Desenvolvedor Back-end na Dimensa Tecnologia | (TOTVS | B3). Moro em Barro Preto, Bahia, Brasil"
        ) : (
          "Hello, my name is Bruno Schumacher. I am a Computer Science student and currently a Back-end Developer at Dimensa Tecnologia | (TOTVS | B3). I live in Barro Preto, Bahia, Brazil"
        )}
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
        fontSize={["0.8rem", "1rem"]}
      >
        {lenguage ? (
          "Comecei a estudar programação com 15 anos, sou apaixonado por php desde então, atualmente estou focado em desenvolver minhas competências e experiêcias e assim desenvolver minhas skils. Por fim, também me interesso por Data Science, é algo que estou estudando nas horas vagas."
        ) : (
        "I started studying programming when I was 15 years old, I've been passionate about php since then, currently I'm focused on developing my skills and experiences and thus developing my skills. Finally, I'm also interested in Data Science, it's something I'm studying in my spare time."
        )}
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
        fontSize={["0.8rem", "1rem"]}
      >
        {lenguage ? (
          "Sou apaixonado por games. Meus jogos preferidos são: CS Go, Fifa e Valorant. A segunda area de estudos que eu queria seguir era Astronomia mas minhas primeira paixão falou mais alto."
        ) : (
          "I'm passionate about games. My favorite games are: CS Go, Fifa and Valorant. The second area of ​​studies I wanted to pursue was Astronomy but my first passion spoke louder."
        )}
      </Text>
    </>
  );
};