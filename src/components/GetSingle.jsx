import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useCallApi from '../hooks/CallApi';
import DocsUrlPath from './common/DocsUrlPath';

const getSingleUrl = 'https://universedune.herokuapp.com/api/v1/characters/id';

const config = {
  baseUrl: process.env.BASEURL,
  path: process.env.URLPATH,
  id: process.env.URL_ID,
  query: {
    page: ``,
    limit: ``,
  },
};

function GetSingle() {
  const { data } = useCallApi(config);
  const [codeString, setCodeString] = useState('');
  useEffect(() => {
    if (data !== null) {
      setCodeString(JSON.stringify(data, null, 2));
    }
  }, [data]);
  return (
    <div className="getSingle">
      <h1>hola im the get single page</h1>
      <DocsUrlPath newUrl={getSingleUrl} />
      <p className="getAll__description">
        Recupera un elemento de acuerdo al id que coincida con el usado en la
        peticion
      </p>
      <section>
        <div className="punpun">
          <SyntaxHighlighter language="json5" style={dracula} showLineNumbers>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
export default GetSingle;
