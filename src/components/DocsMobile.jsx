import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';
import DocsUrlPath from './common/DocsUrlPath';
import DocsCards from './DocsCards';
import DocsSchema from './DocsSchema';
import { DOCSGETALLURL, DOCSGETSINGLE } from '../../utils/constants';
import useCallApi from '../hooks/CallApi';

const config = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  query: {
    page: `?page=1`,
    limit: `&limit=6`,
  },
};
const configAll = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  query: {
    page: `?page=1`,
    limit: `&limit=2`,
  },
};
const configSingle = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  id: process.env.URL_ID,
  query: {
    page: ``,
    limit: ``,
  },
};

function DocsMobile() {
  const { data } = useCallApi(config);
  const dataAll = useCallApi(configAll);
  const dataSingle = useCallApi(configSingle);
  const [characters, setCharacters] = useState([]);
  const [codeString, setCodeString] = useState([]);
  const [codeStringSingle, setCodeStringSingle] = useState([]);
  useEffect(() => {
    if (data !== null) {
      setCharacters(data.CharactersList);
    }
  }, [data]);
  useEffect(() => {
    if (dataAll !== null) {
      setCodeString(JSON.stringify(dataAll.data, null, 2));
    }
  }, [dataAll]);
  useEffect(() => {
    if (dataSingle !== null) {
      setCodeStringSingle(JSON.stringify(dataSingle.data, null, 2));
    }
  }, [dataSingle]);
  return (
    <div className="docsMobile">
      <h1 className="docsMobile__title">Docs</h1>
      <p>
        Hey esta es una api de pruebas de momento acerca del basto universo de
        Dune, creada por mi para practicar si deseas ayudar a mejorar este
        pequeño projecto, puedes contactarme.
      </p>
      <div className="docsMobile__cardsContainer">
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
      <h2 className="docsMobile__subTitle">Schema</h2>
      <DocsSchema />
      <h2 className="docsMobile__subTitle">Get All</h2>
      <DocsUrlPath newUrl={DOCSGETALLURL} />
      <p>
        Recupera todos los elementos usando el endpoint <code>/characters</code>{' '}
        y junto a los querys puedes recuperar elementos por pagina y seleccionar
        la cantidad de elementos en cada pagina que quieras como ejemplo los
        datos que se muestran mas abajo han sido recuperados con los queryes
        ?page=1&limit=2
      </p>
      <div className="punpun">
        <SyntaxHighlighter
          // wrapLines
          wrapLongLines
          showLineNumbers={false}
          language="json5"
          style={dracula}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <h2 className="docsMobile__subTitle">Get Single</h2>
      <DocsUrlPath newUrl={DOCSGETSINGLE} />
      <p>
        Recupera un elemento con el id que coincida con el usado en la peticion
      </p>
      <div className="punpun">
        <SyntaxHighlighter
          wrapLongLines
          showLineNumbers={false}
          language="json5"
          style={dracula}
        >
          {codeStringSingle}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
export default DocsMobile;
