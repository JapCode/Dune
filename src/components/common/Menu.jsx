import { NavLink } from 'react-router-dom';

function Menu(prop) {
  const { menuActive } = prop;
  const { onClickMenu } = prop;
  // let activeClassName = {
  //   background: 'blue',
  //   color: 'white',
  //   textDecoration: 'none',
  // };
  return (
    <section className={`menu ${menuActive ? 'is-active' : ''}`}>
      <div>
        <ul className="menu__options">
          <li className="menu__items">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? 'activeClassName' : ''
              }
              onClick={onClickMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="menu__items">
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? 'activeClassName' : ''
              }
              onClick={onClickMenu}
            >
              About
            </NavLink>
          </li>
          <li className="menu__items">
            <NavLink
              to="/factions"
              className={(navData) =>
                navData.isActive ? 'activeClassName' : ''
              }
              onClick={onClickMenu}
            >
              Factions
            </NavLink>
          </li>
          <li className="menu__items">
            <NavLink
              to="/houses"
              className={(navData) =>
                navData.isActive ? 'activeClassName' : ''
              }
              onClick={onClickMenu}
            >
              House
            </NavLink>
          </li>
          <li className="menu__items">
            <NavLink
              to="/docs"
              className={(navData) =>
                navData.isActive ? 'activeClassName' : ''
              }
              onClick={onClickMenu}
            >
              Docs
            </NavLink>
          </li>
        </ul>
        <ul className={`socialMedia ${menuActive ? 'is-active' : ''}`}>
          <li className="socialMedia-items">
            <a href="https://www.linkedin.com/in/japcode/">
              <svg
                width="19.1"
                height="19.1"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M6.75886 0.069C7.98518 0.0125454 8.37618 0 11.5 0C14.6238 0 15.0148 0.0135909 16.2401 0.069C17.4654 0.124409 18.3017 0.319909 19.0335 0.603227C19.7999 0.892818 20.4951 1.3455 21.0701 1.93095C21.6555 2.50491 22.1072 3.19909 22.3957 3.96645C22.6801 4.69827 22.8745 5.53464 22.931 6.75782C22.9875 7.98623 23 8.37723 23 11.5C23 14.6238 22.9864 15.0148 22.931 16.2411C22.8756 17.4643 22.6801 18.3007 22.3957 19.0325C22.1072 19.8 21.6548 20.4953 21.0701 21.0701C20.4951 21.6555 19.7999 22.1072 19.0335 22.3957C18.3017 22.6801 17.4654 22.8745 16.2422 22.931C15.0148 22.9875 14.6238 23 11.5 23C8.37618 23 7.98518 22.9864 6.75886 22.931C5.53568 22.8756 4.69932 22.6801 3.9675 22.3957C3.20005 22.1071 2.50472 21.6548 1.92991 21.0701C1.34485 20.4958 0.892102 19.8008 0.603227 19.0335C0.319909 18.3017 0.125455 17.4654 0.069 16.2422C0.0125454 15.0138 0 14.6228 0 11.5C0 8.37618 0.0135909 7.98518 0.069 6.75991C0.124409 5.53464 0.319909 4.69827 0.603227 3.96645C0.892528 3.19918 1.34562 2.50419 1.93095 1.92991C2.50495 1.34498 3.19958 0.892236 3.96645 0.603227C4.69827 0.319909 5.53464 0.125455 6.75782 0.069H6.75886ZM16.147 2.139C14.9343 2.08359 14.5705 2.07209 11.5 2.07209C8.4295 2.07209 8.06568 2.08359 6.85295 2.139C5.73118 2.19023 5.12273 2.37736 4.71709 2.53523C4.18077 2.74432 3.79709 2.99209 3.39459 3.39459C3.01305 3.76578 2.71942 4.21766 2.53523 4.71709C2.37736 5.12273 2.19023 5.73118 2.139 6.85295C2.08359 8.06568 2.07209 8.4295 2.07209 11.5C2.07209 14.5705 2.08359 14.9343 2.139 16.147C2.19023 17.2688 2.37736 17.8773 2.53523 18.2829C2.71923 18.7816 3.013 19.2343 3.39459 19.6054C3.76573 19.987 4.21841 20.2808 4.71709 20.4648C5.12273 20.6226 5.73118 20.8098 6.85295 20.861C8.06568 20.9164 8.42845 20.9279 11.5 20.9279C14.5715 20.9279 14.9343 20.9164 16.147 20.861C17.2688 20.8098 17.8773 20.6226 18.2829 20.4648C18.8192 20.2557 19.2029 20.0079 19.6054 19.6054C19.987 19.2343 20.2808 18.7816 20.4648 18.2829C20.6226 17.8773 20.8098 17.2688 20.861 16.147C20.9164 14.9343 20.9279 14.5705 20.9279 11.5C20.9279 8.4295 20.9164 8.06568 20.861 6.85295C20.8098 5.73118 20.6226 5.12273 20.4648 4.71709C20.2557 4.18077 20.0079 3.79709 19.6054 3.39459C19.2342 3.01307 18.7823 2.71945 18.2829 2.53523C17.8773 2.37736 17.2688 2.19023 16.147 2.139V2.139ZM10.0311 15.0451C10.8515 15.3866 11.7649 15.4327 12.6154 15.1755C13.466 14.9184 14.2008 14.3739 14.6945 13.6351C15.1882 12.8963 15.4101 12.009 15.3222 11.1248C15.2344 10.2406 14.8423 9.41429 14.213 8.78704C13.8117 8.38609 13.3266 8.07908 12.7925 7.88811C12.2584 7.69714 11.6886 7.62697 11.1242 7.68264C10.5597 7.73832 10.0146 7.91846 9.52807 8.21009C9.04157 8.50172 8.62578 8.8976 8.31063 9.36921C7.99549 9.84082 7.78883 10.3764 7.70554 10.9375C7.62224 11.4986 7.66439 12.0711 7.82893 12.6139C7.99347 13.1568 8.27632 13.6564 8.65712 14.0768C9.03791 14.4971 9.50718 14.8279 10.0311 15.0451ZM7.32027 7.32027C7.86916 6.77138 8.52079 6.33598 9.23795 6.03892C9.95511 5.74187 10.7238 5.58897 11.5 5.58897C12.2762 5.58897 13.0449 5.74187 13.7621 6.03892C14.4792 6.33598 15.1308 6.77138 15.6797 7.32027C16.2286 7.86916 16.664 8.52079 16.9611 9.23795C17.2581 9.95511 17.411 10.7238 17.411 11.5C17.411 12.2762 17.2581 13.0449 16.9611 13.7621C16.664 14.4792 16.2286 15.1308 15.6797 15.6797C14.5712 16.7883 13.0677 17.411 11.5 17.411C9.9323 17.411 8.4288 16.7883 7.32027 15.6797C6.21174 14.5712 5.58897 13.0677 5.58897 11.5C5.58897 9.9323 6.21174 8.4288 7.32027 7.32027V7.32027ZM18.722 6.46927C18.858 6.34096 18.9669 6.18667 19.0422 6.01552C19.1175 5.84437 19.1578 5.65985 19.1605 5.47288C19.1632 5.28591 19.1284 5.1003 19.0581 4.92703C18.9878 4.75376 18.8835 4.59635 18.7512 4.46413C18.619 4.33191 18.4616 4.22756 18.2883 4.15727C18.1151 4.08697 17.9294 4.05216 17.7425 4.05488C17.5555 4.05761 17.371 4.09782 17.1998 4.17314C17.0287 4.24845 16.8744 4.35734 16.7461 4.49336C16.4966 4.75789 16.3599 5.10926 16.3652 5.47288C16.3705 5.8365 16.5173 6.18374 16.7745 6.44088C17.0316 6.69803 17.3789 6.84483 17.7425 6.85013C18.1061 6.85543 18.4575 6.71881 18.722 6.46927V6.46927Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li className="socialMedia-items">
            <a href="https://twitter.com/JapCode?s=20&t=akB0h4HLW9VphYAS5M3HJw">
              <svg
                width="23.49"
                height="19.1"
                viewBox="0 0 29 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2925 2.72822C27.2521 3.18925 26.1344 3.50076 24.9594 3.64157C26.1718 2.91611 27.0788 1.77434 27.5112 0.429283C26.3722 1.10587 25.1255 1.58211 23.8255 1.8373C22.9512 0.903854 21.7933 0.285149 20.5313 0.0772448C19.2694 -0.130659 17.9742 0.0838706 16.8467 0.687527C15.7192 1.29118 14.8226 2.25019 14.296 3.41566C13.7694 4.58113 13.6423 5.88786 13.9344 7.13296C11.6264 7.01707 9.36848 6.41717 7.30729 5.37219C5.24609 4.32721 3.42765 2.8605 1.96998 1.06725C1.47157 1.92702 1.18498 2.92385 1.18498 3.98547C1.18442 4.94118 1.41977 5.88224 1.87015 6.72517C2.32052 7.5681 2.972 8.28684 3.76677 8.8176C2.84505 8.78827 1.94366 8.53922 1.13763 8.09116V8.16592C1.13754 9.50634 1.6012 10.8055 2.44994 11.843C3.29867 12.8804 4.48021 13.5923 5.79407 13.8578C4.93902 14.0892 4.04256 14.1233 3.17241 13.9575C3.5431 15.1109 4.26518 16.1194 5.23755 16.842C6.20992 17.5646 7.38391 17.965 8.59516 17.9872C6.53899 19.6013 3.99964 20.4769 1.38559 20.473C0.922542 20.4732 0.459883 20.4461 0 20.392C2.6534 22.0981 5.74216 23.0035 8.8967 23C19.5752 23 25.4129 14.1556 25.4129 6.48502C25.4129 6.23581 25.4067 5.98411 25.3955 5.73491C26.531 4.91374 27.5111 3.89687 28.29 2.73196L28.2925 2.72822V2.72822Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li className="socialMedia-items">
            <a href="https://github.com/JapCode">
              <svg
                width="19.93"
                height="19.44"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M12.2925 0C5.66248 0 0.29248 5.37 0.29248 12C0.29248 17.31 3.72748 21.795 8.49748 23.385C9.09748 23.49 9.32248 23.13 9.32248 22.815C9.32248 22.53 9.30748 21.585 9.30748 20.58C6.29248 21.135 5.51248 19.845 5.27248 19.17C5.13748 18.825 4.55248 17.76 4.04248 17.475C3.62248 17.25 3.02248 16.695 4.02748 16.68C4.97248 16.665 5.64748 17.55 5.87248 17.91C6.95248 19.725 8.67748 19.215 9.36748 18.9C9.47248 18.12 9.78748 17.595 10.1325 17.295C7.46248 16.995 4.67248 15.96 4.67248 11.37C4.67248 10.065 5.13748 8.985 5.90248 8.145C5.78248 7.845 5.36248 6.615 6.02248 4.965C6.02248 4.965 7.02748 4.65 9.32248 6.195C10.2825 5.925 11.3025 5.79 12.3225 5.79C13.3425 5.79 14.3625 5.925 15.3225 6.195C17.6175 4.635 18.6225 4.965 18.6225 4.965C19.2825 6.615 18.8625 7.845 18.7425 8.145C19.5075 8.985 19.9725 10.05 19.9725 11.37C19.9725 15.975 17.1675 16.995 14.4975 17.295C14.9325 17.67 15.3075 18.39 15.3075 19.515C15.3075 21.12 15.2925 22.41 15.2925 22.815C15.2925 23.13 15.5175 23.505 16.1175 23.385C18.4997 22.5807 20.5697 21.0497 22.0361 19.0074C23.5026 16.965 24.2918 14.5143 24.2925 12C24.2925 5.37 18.9225 0 12.2925 0Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Menu;
