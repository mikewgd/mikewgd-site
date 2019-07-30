import React from 'react';

import { PageTemplate, Paragraph, Heading } from 'components';

const About = () => {
  return (
    <PageTemplate>
      <Heading.H1
        margin="22px auto"
        desktopMargin="30px auto"
      >
        My name is Michael Levy and I hail from New Jersey. Now I live in NYC and work
        at Allergan. I went to school in Providence, RI at Johnson & Wales University.
      </Heading.H1>
      <Heading.H2>How did you get started?</Heading.H2>
      <Paragraph>
        I started around 2003 and at that time I was a huge Charmed fanatic. None of my friends
        watched it nor had the interest. Than I found this website Charmed: The Prophecy, an
        online community with many members. I saw how well it was designed and I was amazed.
        I started talking to one person in particular, Ana, and she introduced me to the whole
        creative scene.
      </Paragraph>
      <Paragraph>
        On the same community I talked to this guy, Kris. He told me he had his own website.
        I never knew someone who owned a website; I was amazed. I got into the free hosting
        websites (Geocities, Angelfire, etc.), but I wanted to learn more. I was than
        introduced to his host, Jaxon. She taught me the HTML basics. My skills in web and
        graphic design advanced through time as I began learning other languages
        (CSS, XHTML, PHP, MySQL, etc). From there it’s all history.
      </Paragraph>
      <Paragraph
        fontWeight="bold"
        margin="30px 0 0 0"
      >
        Besides being a complete nerd I enjoy going to the gym, hiking, hanging out
        with my friends, playing with my dog Sophie and etc...
      </Paragraph>
    </PageTemplate>
  )
};

export default About;