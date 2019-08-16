// @flow
import React from 'react';
/* eslint-disable import/no-unresolved */
import { EntryCard } from 'components';
import { EntryCardList } from './index.css';

type Props = {
  entries: Object[],
  margin: String,
  desktopMargin: String,
};

const EntryCardListComponent = ({
  entries,
  margin,
  desktopMargin,
}: Props) => (
  <EntryCardList
    margin={margin}
    desktopMargin={desktopMargin}
  >
    {entries.map(entry => (
      <EntryCard
        key={entry.slug}
        title={entry.title}
        blurb={entry.blurb}
        tags={entry.tags}
        slug={entry.slug}
      />
    ))}
  </EntryCardList>
);

export default EntryCardListComponent;
