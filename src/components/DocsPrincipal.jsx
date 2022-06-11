import { useEffect, useState } from 'react';
import useCallApi from '../hooks/CallApi';
import DocsCards from './DocsCards';

const config = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  query: {
    page: `?page=1`,
    limit: `&limit=6`,
  },
};
function DocsPrincipal() {
  const { data } = useCallApi(config);
  const [characters, setCharacters] = useState([]);
  // const [pages, setPage] = useState(1);
  useEffect(() => {
    if (data !== null) {
      setCharacters(data.CharactersList);
      // setPage(data.totalPages);
    }
  }, [data]);
  return (
    <div className="docsPrincipal">
      <p>
        Hey esta es una api de pruebas de momento acerca del basto universo de
        Dune, creada por mi para practicar si deseas ayudar a mejorar este
        pequeño projecto, puedes contactarme.
      </p>
      <div className="docsPrincipal__elements">
        {characters.map((character) => (
          <DocsCards
            key={character.name}
            img={character.image}
            name={character.name}
            title={character.title}
            house={character.house}
            faction={character.faction}
          />
        ))}
      </div>
    </div>
  );
}

export default DocsPrincipal;
