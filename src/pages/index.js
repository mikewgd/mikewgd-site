import React from 'react';
import { graphql } from 'gatsby';
import convert from 'htmr';

import {
  PageTemplate,
  Heading,
  EntryCardList,
  EntryCard,
} from 'components';
import { renderMarkdown } from '../utils/renderMarkdown';

const transform = {
  h2: Heading.H2,
};

const Home = ({ data }) => {
  const { html, fields } = data.layout.nodes[0];
  const { pageHeader } = fields.frontmattermd;
  const entries = data.entries.nodes.map(item => {
    const { frontmatter } = item;
    const { slug } = item.fields;

    return {
      ...frontmatter,
      slug
    }
  });

  return (
    <PageTemplate>
      <Heading.H1
        maxWidth="540px"
        maxWidthDesktop="700px"
        margin="30px auto"
        desktopMargin="40px 0 50px 0"
      >
        {renderMarkdown(pageHeader.html)}
      </Heading.H1>
      {convert(html, { transform })}
      <EntryCardList
        entries={entries}
        margin="22px 0 0 0"
      />
    </PageTemplate>
  )
};

export default Home;

export const homePageQuery = graphql`
  query HomePageQuery {
    layout: allMarkdownRemark(limit: 1, filter: {fields: {slug: {eq: "/"}}}) {
      nodes {
        fields {
          frontmattermd {
            pageHeader {
              html
            }
          }
        },
        html
      }
    }
    
    entries: allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/entry/"}}}) {
      nodes {
        frontmatter {
          title
          blurb
          tags
        }
        fields {
          slug
        }
      }
    } 
  }
`;


