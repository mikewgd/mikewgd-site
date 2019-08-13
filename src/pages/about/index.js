import React from 'react';
import { graphql } from 'gatsby';
import convert from 'htmr';

import {
  PageTemplate,
  Paragraph,
  Heading,
  SocialLinks,
} from 'components';
import { renderMarkdown } from '../../utils/renderMarkdown';

const transform = {
  h2: Heading.H2,
  p: Paragraph,
};

const About = ({ data }) => {
  const { html, fields, frontmatter } = data.allMarkdownRemark.nodes[0];
  const { pageHeader } = fields.frontmattermd;

  return (
    <PageTemplate>
      <Heading.H1
        margin="22px auto"
        desktopMargin="30px 0 40px 0"
        maxWidth="700px"
      >
        {renderMarkdown(pageHeader.html)}
      </Heading.H1>
      {convert(html, { transform })}
      <SocialLinks data={frontmatter.socialLinks} />
    </PageTemplate>
  )
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