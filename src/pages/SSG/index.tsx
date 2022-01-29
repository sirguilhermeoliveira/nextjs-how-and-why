import AllData from '../../components/AllData';
import { information } from '../../data';
import { MainTitle } from './styled';

function SSG() {
  return (
    <div>
      <MainTitle>
        É normal existir uma página com todos os itens dentro para acessar o
        [id].tsx, porém pode ser usado sem então cria várias possibilidades como
        por exemplo a criação de um carossel com todos os itens e quando
        clicamos vai para uma pasta isolada com um item
        específico(pages/carossel/[id.tsx] por exemplo). Ou seja, não é
        necessário criar essa página(index.tsx) dentro da pages com todos os
        itens dentro para existir a [id].tsx.
      </MainTitle>
      {information.map((props: any) => (
        <AllData
          key={props.id}
          id={props.id}
          name={props.name}
          description={props.description}
        />
      ))}
    </div>
  );
}

export default SSG;
