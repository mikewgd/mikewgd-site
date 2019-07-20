import styled from 'styled-components';
import { Link } from 'gatsby';

export const Navigation = styled.nav`
`;

export const NavLink = styled(Link)`
  &.active {
    font-weight: bold;
  }
`
