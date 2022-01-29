import { information } from '../../data';
import { Container, Title, Description, HelperDescription } from './styled';

export const getStaticProps = async ({ params }: any) => {
  const playlistList = information.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = information.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function SSG({ song }: any) {
  console.log(song)
  return (
    <Container>
      <Title>{song.name}</Title>
      <Description>{song.description}</Description>
      <HelperDescription>
        Nessa seção mais específica do que foi clicado pode passar algum
        detalhe, variável, informação, que não tem na página anterior. Pode ser
        usado para abrir uma seção de um blog ou uma compra em um e-commerce.
      </HelperDescription>
    </Container>
  );
}
