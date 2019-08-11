import React from 'react';

import { EntryCard } from 'components';
import { EntryCardList } from './index.css';

const EntryCardListComponent = ({
  children,
  margin,
  desktopMargin,
}) => {
  console.log(children.length)
  return (
    <EntryCardList
      margin={margin}
      desktopMargin={desktopMargin}
    >
      {children}
    </EntryCardList>
  )
};

export default EntryCardListComponent;
