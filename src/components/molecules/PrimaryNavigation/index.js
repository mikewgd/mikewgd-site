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
    text: 'Work',
    path: ROUTE.HOME,
  },
  {
    id: 'about',
    text: 'About',
    path: ROUTE.ABOUT,
  },
];

const PrimaryNavigation = () => {
  const [toggleState, setToggleState] = useToggle(false);
  return (
    <>
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
            href={route.path}
            activeClassName="active"
          >
            {route.text}
          </NavLink>
        ))}
      </Navigation>
    </>
  );
};

export default PrimaryNavigation;
