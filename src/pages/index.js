import React from 'react';
import { PageTemplate, Heading } from 'components';

const Home = () => (
  <PageTemplate>
    <Heading.H1
      maxWidth="540px"
      margin="22px auto"
      desktopMargin="52px auto"
    >
      Hello & Welcome!<br />
      My name is <a href="#">Michael Levy</a><br />
      and I am a software engineer at Allergan.
    </Heading.H1>
  </PageTemplate>
);

export default Home;

