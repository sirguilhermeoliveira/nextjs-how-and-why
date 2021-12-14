import { Title, Description, LinkContainer, Container } from './styled';
import { useState } from 'react';
import Link from 'next/link';

const NextInfosMainItem = ({ title, description, seeMore, link }: any) => {
  const [mainInfosOpen, setMainInfosOpen] = useState(false);

  let linkUrl = `/${link}`;

  return (
    <Container>
      {mainInfosOpen ? (
        <div>
          <Title onClick={() => setMainInfosOpen(false)}>- {title}</Title>
          <Description>{description}</Description>
          {seeMore ? (
            <LinkContainer>
              <Link href={linkUrl}>Ver Exemplo</Link>
            </LinkContainer>
          ) : null}
        </div>
      ) : (
        <Title onClick={() => setMainInfosOpen(true)}>+ {title}</Title>
      )}
    </Container>
  );
};

export default NextInfosMainItem;
