import type { NextPage } from 'next';
import { Container, Text } from './styled';
import Image from 'next/image'
import printPic from '../../assets/Routes.png'

const Routes: NextPage = () => {
  return (
      <Container>
      <Image
        src={printPic}
        alt="Print"
 

      />
        <Text>Essa rota é a localhost:3000/Routes, devido ao nome da página que colocamos em pages.</Text>
      </Container>
  );
};

export default Routes;
