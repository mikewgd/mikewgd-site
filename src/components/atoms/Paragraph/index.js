import styled, { css } from 'styled-components';

export default styled.p`
  margin: ${props => props.margin || "10px 0"};

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.fontWeight && css`
    font-weight: ${props.fontWeight};
  `};
`;