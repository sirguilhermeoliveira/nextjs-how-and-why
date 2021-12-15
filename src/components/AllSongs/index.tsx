import Link from 'next/link';
import Image from 'next/image';
import { Container, AlbumName, Artist, LinkAlign } from './styled';

const AllSongs = ({ id, name, artist, albumCover }: any) => {
  let linkHelper = `/../../assets/${albumCover}`;

  return (
    <Container>
      <Image src={linkHelper} alt={name} width={300} height={300} />
      <AlbumName>Album Name: {name}</AlbumName>
      <Artist>Artist: {artist}</Artist>
      <LinkAlign>
        <Link href={`/SSG/${id}`}>
          Clique aqui para ver o exemplo de [id].tsx
        </Link>
      </LinkAlign>
    </Container>
  );
};

export default AllSongs;
