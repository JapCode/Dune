// import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';
import DocsUrlPath from './common/DocsUrlPath';
import { DOCSGETALLURL } from '../utils/constants';
import useCallApi from '../hooks/CallApi';

const config = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  query: {
    page: `?page=1`,
    limit: `&limit=2`,
  },
};

function GetAll() {
  const { data } = useCallApi(config);
  const [codeString, setCodeString] = useState('');
  useEffect(() => {
    if (data !== null) {
      setCodeString(JSON.stringify(data, null, 2));
    }
  }, [data]);
  return (
    <div className="getAll">
      <DocsUrlPath newUrl={DOCSGETALLURL} />
      <p className="getAll__description">
        Recupera todos los elementos usando el endpoint <code>/characters</code>{' '}
        y junto a los querys puedes recuperar elementos por pagina y seleccionar
        la cantidad de elementos en cada pagina que quieras como ejemplo los
        datos que se muestran mas abajo han sido recuperados con los queryes
        ?page=1&limit=2
      </p>
      <div className="punpun">
        <SyntaxHighlighter language="json5" style={dracula} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
export default GetAll;
