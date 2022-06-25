import type { NextPage } from 'next';
import { Container, Text } from './styled';
import Head from 'next/head';

const SEO: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Título da página - SEO</title>
          <meta
            name='Nome da página na procura'
            content='Conteúdo da página na procura.'
          />
        </Head>
        <Text>
          Essa página tem o SEO dela, com o seu título, descrição e conteúdo.
        </Text>
        <Text>[Colocar print do SEO]</Text>
      </Container>
    </>
  );
};

export default SEO;
