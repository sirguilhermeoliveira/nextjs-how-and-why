import type { NextPage } from 'next';
import NextInfosMain from '../../components/NextInfosMainItem';
import { useState } from 'react';
import { Container, MainContainer, MainTitle } from './styled';
import Head from 'next/head';

const Home: NextPage = () => {
  const [mainOpen, setMainOpen] = useState(false);
  const [additionalOpen, setAdditionalOpen] = useState(false);

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
        'No NextJS todo arquivo dentro da pasta pages é associado a uma rota baseada no nome do arquivo /pages/NomedoArquivo, é instantaneamente NomedoArquivo o nome da página. Além disso o NextJS também suporta páginas com rotas dinâmicas, por exemplo se você criar uma página em pages/mypage/[id].tsx, ela vai ser acessível pelo mypage/1, mypage/2 e etc. Você pode usar outras variáveis, não necessariamente o id. Para fazer tal você precisa consumir um endpoint específico sua utilizando getStaticProps e getStaticPaths. Extra: Para fazer uma rota autenticada de usuário nos fazemos a autorização necessária para entrar ser na própria página e o NextJS fornece a página de erro(404, 500, ...) para erros que pode ser editável também.',
      seeMore: true,
      link: 'SSG',
    },
    {
      id: 3,
      title: 'Autenticação no NextJS',
      description: '',
      seeMore: true,
      link: 'Authentication',
    },
    {
      id: 4,
      title: 'Custom Error Page',
      description:
        'Você pode criar página de erro customizadas no NextJS, criando utilizando na pasta pages, qualquer link quebrado ou que não exista vai parar no erro específicado(pages/500.tsx ou pages/404.tsx por exemplo), como o exemplo abaixo.',
      seeMore: true,
      link: '404',
    },
    {
      id: 5,
      title: 'SEO - Search Engines Optimization',
      description:
        'Serve para seu site aparecer nos resultados de busca, o nextJS faz isso utilizando o next/head, que consiste basicamente em você coloca em cada página que você quer que tenha um SEO para ajudar a página a ser encontrada. Como demonstra no exemplo abaixo.',
      seeMore: true,
      link: 'SEO',
    },
    {
      id: 6,
      title: 'Otimização de Imagem',
      description:
        'O NextJS otimizou o uso de imagens usando a next/image como utilizado, no exemplo abaixo é possível ver o uso do mesmo para setar um width/height padrão e usar o layout para trabalhar imagens que você não sabe ao certo o tamanho, usando o layout=fill ou layout=responsive, no exemplo abaixo demonstrados.',
      seeMore: true,
      link: 'imageExample',
    },
    {
      id: 7,
      title: 'Otimização de fonte',
      description:
        'Por padrão, o NextJS automaticamente coloca inline fonte CSS quando está construindo a página. Você pode adicionar uma fonte em uma página específica no next/head, ou uma fonte global criando um custom component pages/_document.js e colocando lá. Como no exemplo abaixo.',
      seeMore: true,
      link: 'fontOtimization',
    },
    {
      id: 8,
      title: 'Otimização de script',
      description:
        'Por padrão, o NextJS automaticamente coloca inline fonte CSS quando está construindo a página. Você pode adicionar uma fonte em uma página específica no next/head, ou uma fonte global criando um custom component pages/_document.js e colocando lá. Como no exemplo abaixo.',
      seeMore: true,
      link: 'fontOtimization',
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
      title: 'Next/Link',
      description:
        'Transações do lado do cliente entre rotas podem ser acessadas utilizando import Link from next/link, <Link href"/exemplo"></Link> como utilizamos em todos exemplos desse projeto.',
      seeMore: false,
      link: '',
    },
    {
      id: 11,
      title: 'Next/Router',
      description:
        'Se você quiser acessar o objeto router dentro de uma função componente no seu app você pode usar o useRouter. Como no exemplo abaixo. Observação: é possível usar também o router.push quando o <Link></Link> não for suficiente.',
      seeMore: true,
      link: 'Name Page Link',
    },
    {
      id: 12,
      title: 'Benefícios e Defeitos',
      description:
        'Benefícios e Defeitos: O NextJS tem muitos benefícios e é um upgrade enorme no ReactJS, trazendo otimização, velocidade e funcionalidades novas. Porém, apesar de todos os benefícios que o NextJS trás, o único defeito que eu acredito ainda existir é o aumento de preço do lado do cliente pela forma que os dados são tratados. Mas se colocarmos em um ponto de vista que velocidade na informação é uma forma de consumir mais,somado com tudo que o NextJS trás de otimização ao React podemos concluir que o NextJS é o próximo passo do React e vai estar cada vez mais comum trabalharmos em projetos com o mesmo.',
      seeMore: false,
      link: '',
    },
    {
      id: 13,
      title: 'Finalizações e considerações',
      description:
        'O objetivo desse projeto era mostrar as principais funcionalidades que usamos, tem outras que merecem o destaque principalmente a API Routes. Porém não utilizamos ainda pelas suas limitações, coloquei apenas as que achei considerei essenciais para o nosso trabalho. ',
      seeMore: false,
      link: '',
    },
  ];

  let additional = [
    {
      id: 1,
      title: 'O que são os Adicionais',
      description:
        'São funcionalidades do NextJS que existem mas não são tão comuns.',
      seeMore: false,
      link: '',
    },
    {
      id: 2,
      title: 'API Routes',
      description: '',
      seeMore: true,
      link: '',
    },
    {
      id: 3,
      title: 'Dynamic Imports',
      description: '',
      seeMore: true,
      link: '',
    },
    {
      id: 4,
      title: 'Analytics',
      description: '',
      seeMore: false,
      link: '',
    },
    {
      id: 5,
      title: 'AMP Support',
      description: '',
      seeMore: false,
      link: '',
    },
    {
      id: 6,
      title: 'SWR',
      description: '',
      seeMore: false,
      link: '',
    },
  ];

  return (
    <Container>
      <Head>
        <title>Luby Software - NextJS How and Why</title>
      </Head>
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

      {additionalOpen ? (
        <MainContainer>
          <MainTitle onClick={() => setAdditionalOpen(false)}>
            - Adicionais
          </MainTitle>
          {additional &&
            additional.map((additional) => {
              return (
                <NextInfosMain
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
            + Adicionais
          </MainTitle>
        </MainContainer>
      )}
    </Container>
  );
};

export default Home;
