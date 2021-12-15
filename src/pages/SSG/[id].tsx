import { playlist } from '../../data';
import Image from 'next/image';
import { Container, AlbumName, Artist, HelperDescription } from './styled';

export const getStaticProps = async ({ params }: any) => {
  const playlistList = playlist.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = playlist.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function SSG({ song }: any) {
  let linkHelper = `/../../assets/${song.albumCover}`;

  return (
    <Container>
      <Artist>[Print do Código]</Artist>
      <Image src={linkHelper} alt={song.name} width={300} height={300} />
      <AlbumName>Album Name: {song.name}</AlbumName>
      <Artist>Artist: {song.artist}</Artist>
      <HelperDescription>
        Nessa seção mais específica do que foi clicado pode passar algum
        detalhe, variável, informação, que não tem na página anterior. Pode ser
        usado para abrir uma seção de um blog ou uma compra em um e-commerce.
      </HelperDescription>
    </Container>
  );
}
