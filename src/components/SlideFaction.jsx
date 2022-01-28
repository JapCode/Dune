import { useEffect, useRef, useState } from 'react';

function SlideFaction(prop) {
  const [loop, setLoop] = useState(true);
  const [active, setActive] = useState(2);
  const { imgOne, imgTwo, imgThree } = prop;
  const [items, setItems] = useState([imgThree, imgOne, imgTwo]);
  const slideShow = useRef(null);

  // function loopSliders() {
  //   if (loop) {
  //     setTimeout(() => {
  //       slideDefinitive();
  //       loopSliders();
  //     }, 4000);
  //   }
  // }

  // loopSliders();
  useEffect(() => {
    const interval = setInterval(() => {
      slideDefinitive();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  async function removeCenter() {
    for (let i = 0; i < slideShow.current.children.length; i++) {
      if (slideShow.current.children[i].classList.contains('center')) {
        await slideShow.current.children[i].classList.remove('center');
      }
    }
  }
  async function slideCenter() {
    await slideShow.current.children[active].classList.add(
      'slide-animation',
      'center',
    );
  }
  function addNode() {
    const clone = slideShow.current.children[0].cloneNode(true);
    slideShow.current.appendChild(clone);
  }
  function removeNode() {
    const remove = slideShow.current.children[0];
    console.log(remove);
    remove.remove();
  }
  async function waitFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function nextSlide() {
    let firstElement = slideShow.current.children[0];
    const size = firstElement.offsetWidth;
    addNode();
    firstElement.style.marginLeft = `-${size + 22}px`;
    await waitFor(1000);
    firstElement.style.marginLeft = `0px`;
    removeNode(firstElement);
  }
  async function slideDefinitive() {
    nextSlide();
    await removeCenter();
    await slideCenter();
  }
  return (
    <>
      <div className="slide-faction">
        <div className="slide-faction__container" ref={slideShow}>
          {items.map((item) => {
            return (
              <div key={items.indexOf(item)} className={`slide-faction__img `}>
                <img src={item} alt="faction navigators" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default SlideFaction;
