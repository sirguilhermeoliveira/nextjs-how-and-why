import { Container } from './styled';
import { Fragment } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <Fragment>
      <Container>
        NextJS How and Why -
        <Link href='/Home'>
          <a> HOME</a>
        </Link>
      </Container>
    </Fragment>
  );
};

export default Header;
