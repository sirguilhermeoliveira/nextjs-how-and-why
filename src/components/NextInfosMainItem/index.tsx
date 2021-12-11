import { Title, Description, LinkContainer } from './styled';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const NextInfosMainItem = ({ title, description, seeMore, link }: any) => {
  const [mainInfosOpen, setMainInfosOpen] = useState(false);

  let linkUrl = `/${link}`;

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default NextInfosMainItem;
