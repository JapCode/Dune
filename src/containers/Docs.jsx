import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DocsMobile from '../components/DocsMobile';
import DocsPrincipal from '../components/DocsPrincipal';
import useWindowSize from '../hooks/WindowSize';

function Docs() {
  const location = useLocation();
  const [title, setTitle] = useState('Docs');
  const windowSize = useWindowSize();

  const setNewTitle = (pathname) => {
    let path;
    if (pathname === '/docs') {
      path = pathname;
      setTitle('Docs');
    } else {
      path = pathname.split('/');
      // const newTitle = path[2].charAt(0).toUpperCase() + path[2].slice(1);
      for (let i = 0; i < path[2].length; i += 1) {
        if (path[2].charAt(i) === path[2].charAt(i).toUpperCase()) {
          path[2] = `${path[2].slice(0, i)} ${path[2].slice(i)}`;
          break;
        }
      }
      const newTitle = path[2].charAt(0).toUpperCase() + path[2].slice(1);
      setTitle(newTitle);
    }
  };

  useEffect(() => {
    if (location.pathname) {
      setNewTitle(location.pathname);
    }
  }, [location]);

  return (
    <section className="docs">
      {windowSize.width < 768 ? (
        <DocsMobile />
      ) : (
        <>
          <section className="docs__leftBar">
            <ul className="docs__elements">
              <li className="docs__element docs__element--title">
                <Link style={{ color: 'white' }} rel="stylesheet" to="/docs">
                  Characters
                </Link>
              </li>
              <li className="docs__element">
                <Link style={{ color: 'white' }} rel="stylesheet" to="schema">
                  Schema
                </Link>
              </li>
              <li className="docs__element">
                <Link style={{ color: 'white' }} rel="stylesheet" to="getAll">
                  get All
                </Link>
              </li>
              <li className="docs__element">
                <Link
                  style={{ color: 'white' }}
                  rel="stylesheet"
                  to="getSingle"
                >
                  get Single
                </Link>
              </li>
            </ul>
          </section>
          <h2 className="docs__title">{title}</h2>
          <div className="docs__content">
            {location.pathname === '/docs' ? <DocsPrincipal /> : <Outlet />}
          </div>
        </>
      )}
    </section>
  );
}

export default Docs;
