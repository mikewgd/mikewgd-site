import styled, { css } from 'styled-components';

export default styled.p`
  margin: ${props => props.margin || "20px 0"};
  font-size: ${props => props.fontSize || "16px"};

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.lineHeight && css`
    line-height: ${props.lineHeight};
  `}

  ${props => props.fontWeight && css`
    font-weight: ${props.fontWeight};
  `};
`;