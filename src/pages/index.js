import React from 'react';
import { Helmet } from "react-helmet"

import { PageTemplate, Paragraph } from 'components';

const Home = () => (
  <PageTemplate>
    <Helmet>
      <title>mikewgd.com</title>
    </Helmet>
    <Paragraph>Home</Paragraph>
  </PageTemplate>
);

export default Home;

