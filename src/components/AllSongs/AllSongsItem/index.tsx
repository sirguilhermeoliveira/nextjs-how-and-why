import { playlist } from '../../../data';
import Link from 'next/link';

const AllSongs = () => {
  const linkPath = `/SSG/1`;

  return (
    <ul>
      {playlist.map((song: any) => (
        <div key={song.id}>
          <li>{song.id}</li>
          <li>{song.name}</li>
          <li>{song.artist}</li>
          <Link href={linkPath}>Ver Mais</Link>
        </div>
      ))}
    </ul>
  );
};

export default AllSongs;
