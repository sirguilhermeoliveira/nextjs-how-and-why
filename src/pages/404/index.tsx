import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Container, Text } from './styled';

const ErrorPage: NextPage = () => {
  return (
    <Fragment>
      <Container>
        <Text>Essa é a página de error 404 customizada.</Text>
        <Text>Ela pode ser estilizada da forma que preferir.</Text>
      </Container>
    </Fragment>
  );
};

export default ErrorPage;
