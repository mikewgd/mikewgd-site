import React from 'react';
import { Navigation, NavLink } from './index.css';
import { ROUTE } from '../../../constants/routes';

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
  }
];

const PrimaryNavigation = () => (
  <Navigation>
    {ROUTES.map(route => (
      <NavLink
        key={route.id}
        to={route.path}
        activeClassName="active"
      >
        {route.text}
      </NavLink>
    ))}
  </Navigation>
);

export default PrimaryNavigation;