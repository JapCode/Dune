import { useState, useContext, useRef, useEffect, useCallback } from 'react';
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
  // const lineLeft = useRef(null);
  const size = useWindowSize();
  // const location = useLocation();
  const prop = props;

  function hamburgerBtn() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  //for delay an the selected option in the menu
  function handleChildClick() {
    setTimeout(() => {
      hamburgerBtn();
    }, 600);
  }
  //set ref in the lines to add animation
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
  //useEffect to add animation to the lines
  useEffect(() => {
    startAnimation(animationStart, 6000);
    startAnimation(animationStartLeft, 10000);
  }, [animationStart, animationStartLeft]);

  //function to start animation to the lines
  function startAnimation(objet, time) {
    console.log(objet);
    if (objet !== null) {
      setTimeout(() => {
        for (let i = 0; i < objet.length; i++) {
          if (!objet[i].classList.contains('animation--start')) {
            let element = objet[i];
            setTimeout(() => {
              element.classList.add('animation--start');
              console.log(element);
            }, i * 1000);
          }
        }
      }, time);
    }
  }

  return (
    <>
      <nav className={`navigation ${isVisibleData ? 'navVisible' : undefined}`}>
        {size.width > 900 && (
          <>
            <div className="navigation__left" ref={myRef}>
              <svg
                className={`navigation__left--line--top`}
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
        <button className="menu--icon" onClick={hamburgerBtn}>
          <span className={`hamburger ${isOpen ? 'menu-open' : ''}`}></span>
        </button>
        <Menu menuActive={isOpen} onClickMenu={handleChildClick} />
        <i className={`menu__desktop ${isOpen ? 'is-active' : ''}`}></i>
      </nav>
      <main className="layout">{prop.children}</main>
    </>
  );
}
export default Layout;
