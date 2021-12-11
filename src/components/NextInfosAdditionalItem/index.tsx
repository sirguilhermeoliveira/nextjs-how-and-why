import { Title, Description, LinkContainer } from './styled';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const NextInfosAdditionalItem = ({
  title,
  description,
  seeMore,
  link,
}: any) => {
  const [additionalInfosOpen, setAdditionalInfosOpen] = useState(false);

  let linkUrl = `/${link}`;
  return (
    <Fragment>
      {additionalInfosOpen ? (
        <div>
          <Title onClick={() => setAdditionalInfosOpen(false)}>- {title}</Title>
          <Description>{description}</Description>
          {seeMore ? (
            <LinkContainer>
              <Link href={linkUrl}>Ver Exemplo</Link>
            </LinkContainer>
          ) : null}
        </div>
      ) : (
        <Title onClick={() => setAdditionalInfosOpen(true)}>+ {title}</Title>
      )}
    </Fragment>
  );
};

export default NextInfosAdditionalItem;
