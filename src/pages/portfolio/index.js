import React from 'react';
import { Helmet } from "react-helmet"

import { PageTemplate, Paragraph, Heading } from 'components';

const Portfolio = () => (
  <PageTemplate>
    <Helmet>
      <title>mikewgd.com</title>
    </Helmet>
    {/* <Heading.H1
      maxWidth="540px"
      margin="22px auto"
      desktopMargin="52px auto"
    >
      Hello & Welcome!<br />
      My name is <a href="#">Michael Levy</a><br />
      and I am a software engineer at Allergan.
    </Heading.H1> */}
    <Paragraph>Portfolio</Paragraph>
  </PageTemplate>
);

export default Portfolio;

