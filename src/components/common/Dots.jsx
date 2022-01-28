import { NavLink } from 'react-router-dom';

function Dots() {
  return (
    <div className="dots">
      <ul className="dots__container">
        <li className="dots__item">
          <NavLink
            to="/"
            className={(dotsData) => (dotsData.isActive ? 'dots__active' : '')}
          ></NavLink>
        </li>
        <li className="dots__item">
          <NavLink
            to="/about"
            className={(dotsData) => (dotsData.isActive ? 'dots__active' : '')}
          ></NavLink>
        </li>
        <li className="dots__item">
          <NavLink
            to="/factions"
            className={(dotsData) => (dotsData.isActive ? 'dots__active' : '')}
          ></NavLink>
        </li>
        <li className="dots__item">
          <NavLink
            to="/houses"
            className={(dotsData) => (dotsData.isActive ? 'dots__active' : '')}
          ></NavLink>
        </li>
        <li className="dots__item">
          <NavLink
            to="/dots"
            className={(dotsData) => (dotsData.isActive ? 'dots__active' : '')}
          ></NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dots;
