// @flow
import React from 'react';
import { graphql } from 'gatsby';
import convert from 'htmr';

import {
  PageTemplate,
  PageHeader,
  Heading,
  EntryCardList,
} from 'components';

const transform = {
  h2: Heading.H2,
};

type Props = {
  data: Object,
};

const Home = ({ data }: Props) => {
  const { html, fields } = data.layout.nodes[0];
  const { pageHeader } = fields.frontmattermd;
  const entries = data.entries.nodes.map(item => {
    const { frontmatter } = item;
    const { slug } = item.fields;

    return {
      ...frontmatter,
      slug,
    };
  });

  return (
    <PageTemplate>
      <PageHeader
        mobileMaxWidth="540px"
        desktopMaxWidth="700px"
        mobileMargin="30px auto"
        desktopMargin="40px 0 50px 0"
        text={pageHeader.html}
      />
      {convert(html, { transform })}
      <EntryCardList
        entries={entries}
        margin="22px 0 0 0"
      />
    </PageTemplate>
  );
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
