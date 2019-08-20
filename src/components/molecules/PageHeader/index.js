// @flow
import React from 'react';

import { Heading } from 'components';

import { renderMarkdown } from '../../../utils/renderMarkdown';

type Props = {
  mobileMaxWidth?: String,
  mobileMargin?: String,
  desktopMargin?: String,
  desktopMaxWidth?: String,
  text: String,
};

const renderHeader = text => {
  const reg = new RegExp(/^<p>(.*)<\/p>/);
  return renderMarkdown(text.replace(reg, '$1'));
};

const PageHeader = ({
  mobileMaxWidth,
  mobileMargin,
  desktopMargin,
  desktopMaxWidth,
  text,
}: Props) => (
  <Heading.H1
    margin={mobileMargin}
    desktopMargin={desktopMargin}
    mobileMaxWidth={mobileMaxWidth}
    desktopMaxWidth={desktopMaxWidth}
  >
    {renderHeader(text)}
  </Heading.H1>
);

PageHeader.defaultProps = {
  mobileMaxWidth: false,
  mobileMargin: false,
  desktopMargin: false,
  desktopMaxWidth: false,
};

export default PageHeader;
