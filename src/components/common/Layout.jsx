import { useState, useContext, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { VisibleContext } from '../../context/VisibleContext';
import useWindowSize from '../../hooks/WindowSize';
import Dots from './Dots';
import Menu from './Menu';
import SocialMedia from './SocialMedia';

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisibleData } = useContext(VisibleContext);
  const [animationStart, setAnimationStart] = useState(false);
  const [animationStartLeft, setAnimationStartLeft] = useState(false);
  const { setIsVisibleData } = useContext(VisibleContext);
  // const lineLeft = useRef(null);
  const size = useWindowSize();
  const location = useLocation();
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname === '/about' ||
      location.pathname === '/docs'
    ) {
      setIsVisibleData(false);
    }
  });

  function hamburgerBtn() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  // for delay an the selected option in the menu
  const handleChildClick = () => {
    setTimeout(() => {
      hamburgerBtn();
    }, 600);
  };
  // set ref in the lines to add animation
  const myRef = useCallback(async (node) => {
    if (node !== null) {
      setAnimationStart(node.children);
    }
  }, []);
  const myOtherRef = useCallback(async (node) => {
    if (node !== null) {
      setAnimationStartLeft(node.children);
    }
  }, []);
  // useEffect to add animation to the lines

  // function to start animation to the lines
  function startAnimation(objet, time) {
    if (objet !== null) {
      setTimeout(() => {
        for (let i = 0; i < objet.length; i += 1) {
          if (!objet[i].classList.contains('animation--start')) {
            const element = objet[i];
            setTimeout(() => {
              element.classList.add('animation--start');
            }, i * 900);
          }
        }
      }, time);
    }
  }
  useEffect(() => {
    let timeToStart = 1000;
    if (location.pathname === '/') {
      timeToStart = 4500;
    }
    startAnimation(animationStart, timeToStart);
    startAnimation(animationStartLeft, timeToStart + 3600);
  }, [animationStart, animationStartLeft]);
  return (
    <>
      <nav className={`navigation ${isVisibleData ? 'navVisible' : undefined}`}>
        {size.width > 900 && (
          <>
            <div className="navigation__left" ref={myRef}>
              <svg
                className="navigation__left--line--top"
                height="2px"
                width={`${size.width / 3}`}
              >
                <line x1="0" y1="0" x2={size.width} y2="0" />
              </svg>
              <svg
                className="navigation__left--line--left"
                height={`${size.height - size.height / 2}`}
                width="2px"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={`${size.height - size.height / 2}`}
                />
              </svg>
              <SocialMedia />
              <svg
                className="navigation__left--line--left"
                height={`${size.height - size.height / 2}`}
                width="2px"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={`${size.height - size.height / 2}`}
                />
              </svg>
            </div>
            <div className="navigation__right" ref={myOtherRef}>
              <svg
                className="navigation__right--line--bottom"
                height="2px"
                width={`${size.width / 3}`}
              >
                <line x1="0" y1="0" x2={size.width} y2="0" />
              </svg>
              <svg
                className="navigation__right--line--right"
                height={`${size.height - size.height / 2}`}
                width="2px"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={`${size.height - size.height / 2}`}
                />
              </svg>
              <Dots />
              <svg
                className="navigation__right--line--right"
                height={`${size.height - size.height / 2}`}
                width="2px"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={`${size.height - size.height / 2}`}
                />
              </svg>
            </div>
          </>
        )}
        <button type="button" className="menu--icon" onClick={hamburgerBtn}>
          <span className={`hamburger ${isOpen ? 'menu-open' : ''}`} />
        </button>
        <Menu menuActive={isOpen} onClickMenu={handleChildClick} />
        {size.width > 600 && (
          <i className={`menu__desktop ${isOpen ? 'is-active' : ''}`} />
        )}
      </nav>
      <main className="layout">{children}</main>
    </>
  );
}
export default Layout;
