import { playlist } from '../../data';
import Image from 'next/image';
import { ImageCover } from './styled';
import logo from '../../assets/1.jpg';

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
  let albumCover = `/../../assets/1.jpg`;
  return (
    <div>
      <div>Artist: {song.artist}</div>
      <div>Album: {song.name}</div>
      <ImageCover src={albumCover} alt='Album Cover' />
    </div>
  );
}
