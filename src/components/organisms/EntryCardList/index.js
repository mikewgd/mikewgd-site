import React from 'react';

import { EntryCard } from 'components';
import { EntryCardList } from './index.css';

const EntryCardListComponent = ({
  entries,
  margin,
  desktopMargin,
}) => {
  return (
    <EntryCardList
      margin={margin}
      desktopMargin={desktopMargin}
    >
      {entries.map(entry => (
        <EntryCard key={entry.slug} {...entry} />
      ))}
    </EntryCardList>
  )
};

export default EntryCardListComponent;
