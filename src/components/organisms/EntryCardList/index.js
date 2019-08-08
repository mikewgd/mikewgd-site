import React from 'react';

import { EntryCard } from 'components';
import { EntryCardList } from './index.css';

const EntryCardListComponent = ({
  children
}) => {
  console.log(children.length)
  return (
    <EntryCardList>
      {children}
    </EntryCardList>
  )
};

export default EntryCardListComponent;
