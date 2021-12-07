import { playlist } from '../../data';
import Image from 'next/image';

const myLoader = ({ src, width, quality }: any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 100}`;
};

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
  return (
    <div>
      <div>{song.name}</div>
      <div>{song.artist}</div>
      <div>{song.albumCoverUrl}</div>
      <Image
        loader={myLoader}
        src={song.albumCoverUrl}
        alt='Picture of the author'
        width={500}
        height={500}
        layout='responsive'
      />
    </div>
  );
}
