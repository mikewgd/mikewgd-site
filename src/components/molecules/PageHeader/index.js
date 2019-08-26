// @flow
import React from 'react';

import { Heading } from 'components';

import {
  PageHeader,
  BackLink,
} from './index.css';
import { renderMarkdown } from '../../../utils/renderMarkdown';
import { ROUTE } from '../../../constants/routes';

type Props = {
  mobileMaxWidth?: String,
  mobileMargin?: String,
  desktopMargin?: String,
  desktopMaxWidth?: String,
  text: String,
  entry?: Boolean,
};

const renderHeader = text => {
  const reg = new RegExp(/^<p>(.*)<\/p>/);
  return renderMarkdown(text.replace(reg, '$1'));
};

const PageHeaderComponent = ({
  mobileMaxWidth,
  mobileMargin,
  desktopMargin,
  desktopMaxWidth,
  text,
  entry,
}: Props) => (
  <PageHeader
    entry={entry}
    margin={mobileMargin}
    desktopMargin={desktopMargin}
  >
    <Heading.H1
      mobileMaxWidth={mobileMaxWidth}
      desktopMaxWidth={desktopMaxWidth}
    >
      {renderHeader(text)}
    </Heading.H1>
    {entry && (
      <BackLink href={ROUTE.WORK}>Back to the Work</BackLink>
    )}
  </PageHeader>
);

PageHeaderComponent.defaultProps = {
  mobileMaxWidth: false,
  mobileMargin: false,
  desktopMargin: false,
  desktopMaxWidth: false,
  entry: false,
};

export default PageHeaderComponent;
