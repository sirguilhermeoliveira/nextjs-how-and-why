import { Container, Return } from './styled';
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Container>
        <div>NextJS - How and Why</div>
        <Return>
          {router.pathname === '/' ? null : (
            <Link href='/'>
              <a> Click to Return</a>
            </Link>
          )}
        </Return>
      </Container>
    </Fragment>
  );
};

export default Header;
