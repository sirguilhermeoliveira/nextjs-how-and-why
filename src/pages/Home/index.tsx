import type { NextPage } from 'next';
import NextInfosMain from '../../components/NextInfosMainItem';
import NextInfosAdditional from '../../components/NextInfosAdditionalItem';
import { Fragment, useState } from 'react';
import { Container, MainContainer, MainTitle } from './styled';

const Home: NextPage = () => {
  const [mainOpen, setMainOpen] = useState(false);
  const [additionalOpen, setAdditionalOpen] = useState(false);

  let main = [
    {
      id: 1,
      title: 'Páginas e Rotas no NextJS',
      description: 'A main funcionalidade do NextJS...',
      seeMore: true,
      link: 'SSG',
    },
    {
      id: 2,
      title: 'Main',
      description: 'daledele2',
      seeMore: false,
      link: 'Name Page Link',
    },
    {
      id: 3,
      title: 'Main',
      description: 'daledele3',
      seeMore: true,
      link: 'Name Page Link',
    },
  ];

  let additional = [
    {
      id: 1,
      title: 'Additional',
      description: 'daledele',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 2,
      title: 'Additional',
      description: 'daledele2',
      seeMore: false,
      link: 'Name Page Link',
    },
    {
      id: 3,
      title: 'Additional',
      description: 'daledele3',
      seeMore: true,
      link: 'Name Page Link',
    },
  ];

  return (
    <Fragment>
      <Container>
        {mainOpen ? (
          <MainContainer>
            <MainTitle onClick={() => setMainOpen(false)}>- Main</MainTitle>
            {main &&
              main.map((main) => {
                return (
                  <NextInfosMain
                    key={main.id}
                    title={main.title}
                    description={main.description}
                    seeMore={main.seeMore}
                    link={main.link}
                  />
                );
              })}
          </MainContainer>
        ) : (
          <MainContainer>
            <MainTitle onClick={() => setMainOpen(true)}>+ Main</MainTitle>
          </MainContainer>
        )}

        {additionalOpen ? (
          <MainContainer>
            <MainTitle onClick={() => setAdditionalOpen(false)}>
              - Additional
            </MainTitle>
            {additional &&
              additional.map((additional) => {
                return (
                  <NextInfosAdditional
                    key={additional.id}
                    title={additional.title}
                    description={additional.description}
                    seeMore={additional.seeMore}
                    link={additional.link}
                  />
                );
              })}
          </MainContainer>
        ) : (
          <MainContainer>
            <MainTitle onClick={() => setAdditionalOpen(true)}>
              + Additional
            </MainTitle>
          </MainContainer>
        )}
      </Container>
    </Fragment>
  );
};

export default Home;
