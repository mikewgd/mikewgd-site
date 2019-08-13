import React from 'react';

import {
  Navigation,
  NavLink,
  Hamburger,
  Line,
} from './index.css';
import { ROUTE } from '../../../constants/routes';
import { useToggle } from '../../../hooks/useToggle';

const ROUTES = [
  {
    id: 'home',
    text: 'Home',
    path: ROUTE.HOME
  },
  {
    id: 'about',
    text: 'About',
    path: ROUTE.ABOUT
  },
  {
    id: 'portfolio',
    text: 'Portfolio',
    path: ROUTE.PORTFOLIO
  }
];

const isNavLinkActive = (routePath, path) => {
  let result = false;

  if (routePath === path || (routePath === '/portfolio' && path.includes('portfolio'))) {
    result = true;
  }
  return result;
}

const PrimaryNavigation = ({ location, changeRoute }) => {
  const [toggleState, setToggleState] = useToggle(false);
  console.log(location);
  return (
    <React.Fragment>
      <Hamburger
        active={toggleState}
        href="#" 
        handleClick={setToggleState}
      >
        {[0, 1, 2].map(i => <Line key={i} />)}
      </Hamburger>
      <Navigation opened={toggleState}>
        {ROUTES.map(route => (
          <NavLink
            key={route.id}
            href="#"
            handleClick={() => {
              changeRoute(route.path)
            }}
            isActive={isNavLinkActive(route.path, location.pathname)}
          >
            {route.text}
          </NavLink>
        ))}
      </Navigation>
    </React.Fragment>
  );
};

export default PrimaryNavigation;