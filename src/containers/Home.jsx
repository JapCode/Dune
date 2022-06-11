import { useState } from 'react';
import Logo from '../components/common/Logo';

function Home() {
  const [animationActive, setAnimationActive] = useState(false);

  function animationTime() {
    setTimeout(() => {
      setAnimationActive(true);
    }, 3000);
  }
  animationTime();

  return (
    <div className="home fullPage">
      <section className="home__container">
        <Logo />
        <h3
          className={`home__subTitle ${
            animationActive ? 'animationActive' : ''
          }`}
        >
          Quien controla la especia, controla el universo
        </h3>
      </section>
    </div>
  );
}

export default Home;
