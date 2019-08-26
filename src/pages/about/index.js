// @flow
import React from 'react';
import { graphql } from 'gatsby';
import convert from 'htmr';

import {
  PageTemplate,
  PageHeader,
  Paragraph,
  Heading,
  SocialLinks,
} from 'components';

const transform = {
  h2: Heading.H2,
  p: Paragraph,
};

type Props = {
  data: Object,
};

const About = ({ data }: Props) => {
  const { html, fields, frontmatter } = data.allMarkdownRemark.nodes[0];
  const { pageHeader } = fields.frontmattermd;

  return (
    <PageTemplate maxWidth="700px">
      <PageHeader
        mobileMargin="22px auto"
        desktopMargin="30px 0 40px 0"
        mobileMaxWidth="700px"
        text={pageHeader.html}
      />
      {convert(html, { transform })}
      <SocialLinks data={frontmatter.socialLinks} />
    </PageTemplate>
  );
};

export default About;

export const aboutPageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1, filter: {fields: {slug: {eq: "/about/"}}}) {
      nodes {
        fields {
          frontmattermd {
            pageHeader {
              html
            }
          }
        },
        html
        frontmatter {
          socialLinks {
            socialType
            socialUrl
          }
        }
      }
    }
  }  
`;
