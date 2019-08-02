import styled, { css, keyframes } from 'styled-components';
import { Anchor } from 'components';
import * as Color from '../../../styles/colors';
import { media } from "../../../styles/responsive";

const widthLine = '28px';
const heightIcon = 18;
const heightLine = 3;
const translateY = (heightIcon / 2);
const rotation = 45;

const widthIncrease = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  background-color: #E5E5E5;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  padding: 100px 0 17px 0;
  z-index: 1;
  transform: ${props => props.opened ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .2s ease-in-out;

  ${media.md`
    background: none;
    position: static;
    padding: 0;
    grid-template-columns: repeat(3, min-content);
    grid-column-gap: 42px;
    justify-content: center;
    transform: none;
  `};
`;

export const NavLink = styled(Anchor)`
  font-size: 14px;
  line-height: 40px;
  font-weight: 300;
  letter-spacing: 8%;
  display: block;
  position: static;
  color: ${Color.DARK_LIVER};
  transition: background-color .3s ease-in-out;
  text-transform: uppercase;

  &:visited {
    color: ${Color.DARK_LIVER};
  }

  &:hover {
    background-color: rgba(255, 255, 255, .1);
  }

  &.active {
    color: ${Color.LICORICE};

    &:after {
      animation: ${widthIncrease} .3s ease forwards;
    }
  }

  ${media.md`
    position: relative;
    line-height: 22px;
    padding: 0 6px;

    &:after {
      content: '';
      display: block;
      border-bottom: 3px solid ${Color.WELDON_BLUE};
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      width: 0;
      /* transition: width 1s .3s ease-in-out; */
    }
  `};
`;

export const Line = styled.div`
  width: 100%;
  height: ${heightLine}px;
  background-color: ${Color.LICORICE};
  position: absolute;
  left: 0;
  transition: transform 0.4s,
              opacity 0.4s;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
  }

  &:nth-child(3) {
    top: 100%;
  }
`;

export const Hamburger = styled(Anchor)`
  width: ${widthLine};
  height: ${heightIcon}px;
  position: relative;
  display: block;
  grid-row: 1;
  z-index: 2;
  margin: auto;

  ${props => props.active && css`
    ${Line}:nth-child(1) {
      transform: translate(0, ${translateY}px) rotate(${rotation}deg);
    }

    ${Line}:nth-child(2) {
      opacity: 0;
    }

    ${Line}:nth-child(3) {
      transform: translate(0, ${translateY * -1}px) rotate(${rotation * -1}deg);
    }
  `};

  &:hover,
  &:focus {
    ${props => !props.active && css`
      & ${Line}:nth-child(1) {
        transform: translateY(${heightLine / 2 * -1}px);
      }
      & ${Line}:nth-child(3) {
        transform: translateY(${heightLine / 2}px);
      }
    `};
      
  }

  ${media.md`display: none;`};
`;
