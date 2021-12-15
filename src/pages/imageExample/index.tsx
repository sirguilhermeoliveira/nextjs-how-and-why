import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Container, Text } from './styled';
import NextImage from '../../assets/nextjs-cover.jpg';
import Image from 'next/image';

const ErrorPage: NextPage = () => {
  return (
    <Fragment>
      <Container>
        <Text>[Print do código.]</Text>
        <Text>Vou dar abaixo os exemplos com a mesma imagem.</Text>
        <Text>Imagem com apenas o width e height definido.</Text>
        <Image src={NextImage} alt='Next Image' width={300} height={300} />
        <Text>Imagem com width e height definido e layout responsive.</Text>
        <Image
          src={NextImage}
          alt='Next Image'
          width={300}
          height={300}
          layout='responsive'
        />
        <Text>
          Observação: É possível no layout usar fill também, que a imagem
          cobriria a tela inteira.
        </Text>
      </Container>
    </Fragment>
  );
};

export default ErrorPage;
