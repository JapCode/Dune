import { useEffect, useState } from 'react';
import imgCopy from '../../assets/static/copy-icon.png';
import imgCheck from '../../assets/static/check-icon.png';

function DocsUrlPath(props) {
  // eslint-disable-next-line react/prop-types
  const { newUrl } = props;
  const [url, setUrl] = useState(null);
  const [isCopy, setIsCopy] = useState(false);
  useEffect(() => {
    if (url === null) {
      setUrl(newUrl);
    }
  }, [newUrl, url]);
  const copyToClipboard = async () => {
    try {
      setIsCopy(true);
      navigator.clipboard.writeText(url);
    } catch {
      throw new Error('Unable to copy');
    }
  };
  return (
    <div className="docsUrlPath">
      <p>{url}</p>
      <button onClick={copyToClipboard} type="button">
        {isCopy ? (
          <img src={imgCheck} alt="check" />
        ) : (
          <img
            className="docsUrlPath__iconCopy"
            src={imgCopy}
            alt="copy icon"
          />
        )}
      </button>
    </div>
  );
}
export default DocsUrlPath;
