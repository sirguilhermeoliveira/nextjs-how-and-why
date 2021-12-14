import type { NextPage } from 'next';
import NextInfosMain from '../../components/NextInfosMainItem';
import { Fragment, useState } from 'react';
import { Container, MainContainer, MainTitle } from './styled';

const Home: NextPage = () => {
  const [mainOpen, setMainOpen] = useState(false);

  let main = [
    {
      id: 1,
      title: 'O que é o NextJS',
      description:
        'É um framework do ReactJS para melhorar a perfomance e criar sites estáticos super rápidos, muitas vantagens para o usuário estão dentro do ecosistema do NexJS como a melhora em Performance, SEO, facilidade na experiência de desenvolvimento, suporte ao typescript, pré-renderização entre outros. No NexJS nos podemos trabalhar com duas formas de pré-renderização, server-side rendering(SSR) e static site generation(SSG)',
      seeMore: false,
      link: '',
    },
    {
      id: 2,
      title: 'Páginas no NextJS - SSG e SSR',
      description:
        'No NextJS todo arquivo dentro da pasta pages é associado a uma rota baseada no nome do arquivo /pages/NomedoArquivo, é instantaneamente NomedoArquivo o nome da página. Além disso o NextJS também suporta páginas com rotas dinâmicas, por exemplo se você criar uma página em pages/mypage/[id].tsx, ela vai ser acessível pelo mypage/1, mypage/2 e etc. Você pode usar outras variáveis para tal, não necessariamente o id. Para fazer tal você precisa consumir um endpoint específico sua utilizando getStaticProps e getStaticPaths. Extra: Para fazer uma rota autenticada usuário nos fazemos a autorização necessária para entrar ser na própria página e o NextJS fornece a página de erro(404, 500) para erros que pode ser editável também.',
      seeMore: true,
      link: 'SSG',
    },
    {
      id: 3,
      title: 'SEO - Search Engines Optimization',
      description:
        'Serve para seu site aparecer nos resultados de busca, o nextJS faz isso utilizando o next/head, que consiste basicamente em você coloca em cada página que você quer que tenha um SEO para ajudar a página a ser encontrada. Como demonstra no exemplo abaixo.',
      seeMore: true,
      link: 'SEO',
    },
    {
      id: 4,
      title: 'Custom Error Page',
      description:
        'Você pode criar página de erro customizadas no NextJS, criando utilizando na pasta pages, pages/500.tsx ou pages/404.tsx, como o exemplo abaixo.',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 5,
      title: 'API Routes',
      description:
        'O NextJS trás uma solução para construir sua API dentro do próprio NextJS, que é basicamente criar sua api dentro de page/api/ e fazendo as requisições de lá, se você chamar de qualquer arquivo algo da pasta api já é natural do NextJS chamar as informações. Essa API não é recomendada para projetos grandes, apenas para projetos pequenos e não tem costume de ser usada, porém deixarei um pequeno exemplo aqui em baixo para fins de aprendizagem.',
      seeMore: true,
      link: 'apiRoutes',
    },
    {
      id: 6,
      title: 'Next/Auth',
      description:
        'O NextJS tem uma facilidade muito grande em fazer em poucos minutos uma autenticação utilizando Google, Facebook, Auth0, Apple... Utilizando o npm i next-auth, utilizando a API Routes do NextJS e seguindo o processo que está no exemplo abaixo',
      seeMore: true,
      link: '',
    },
    {
      id: 7,
      title: 'Next/Image',
      description:
        'O NextJS otimizou o uso de imagens usando a next/image como utilizado no exemplo abaixo.',
      seeMore: true,
      link: '',
    },
    {
      id: 8,
      title: 'Next/Analytics',
      description:
        'Ao invés de mensusar as analytics pelo laptop, o NextJS Analytics coleta web vitals do atual dispositivo o visitante está usando. Como demonstrado no exemplo abaixo.',
      seeMore: true,
      link: '',
    },
    {
      id: 9,
      title: 'Next/Script',
      description:
        'No NextJS você pode chamar métodos que retornam JavaScript que devem ser executados depois que o script for totalmente carregando utilizando o Next/Script, como o exemplo abaixo.',
      seeMore: true,
      link: '',
    },
    {
      id: 10,
      title: 'SWR',
      description:
        'É possível consumir data no lado do cliente(que é o padrão do React) usando o hook SWR, como demonstra no exemplo.',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 11,
      title: 'Otimização de fonte',
      description: '',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 12,
      title: 'Next/Router',
      description: '',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 13,
      title: 'Next/Link',
      description: '',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 14,
      title: 'Next/AMP',
      description: '',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 15,
      title: 'Next/Server',
      description: '',
      seeMore: true,
      link: 'Name Page Link',
    },
  ];

  return (
    <Fragment>
      <Container>
        {mainOpen ? (
          <MainContainer>
            <MainTitle onClick={() => setMainOpen(false)}>
              - Principais Funcionalidades
            </MainTitle>
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
            <MainTitle onClick={() => setMainOpen(true)}>
              + Principais Funcionalidades
            </MainTitle>
          </MainContainer>
        )}
      </Container>
    </Fragment>
  );
};

export default Home;
