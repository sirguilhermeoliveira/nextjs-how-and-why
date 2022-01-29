import Link from 'next/link';
import Image from 'next/image';
import { Container, AlbumName, Artist, LinkAlign } from './styled';
import printPic from '../../assets/Routes.png'

const AllData = ({ id, name, description }: any) => {

  return (
    <Container>
      <Image
        src={printPic}
        alt="Print"
      />
      <AlbumName>{name}</AlbumName>
      <AlbumName>{description}</AlbumName>
      <LinkAlign>
        <Link href={`/SSG/${id}`}>
          Clique aqui para ver o exemplo de [id].tsx
        </Link>
      </LinkAlign>
    </Container>
  );
};

export default AllData;
