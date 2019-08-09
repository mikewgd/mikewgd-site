import React from 'react';
import { graphql } from 'gatsby';

import { PageTemplate, EntryCardList, EntryCard } from 'components';

const Portfolio =  ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  // const { pageHeader } = fields.frontmattermd;
  const entries = nodes.map(item => {
    const { frontmatter } = item;
    const { slug } = item.fields;

    return {
      ...frontmatter,
      slug
    }
  });
  
  return (
    <PageTemplate>
      <EntryCardList>
        {entries.map(entry => (
          <EntryCard key={entry.slug} {...entry} />
        ))}
      </EntryCardList>
    </PageTemplate>
  )
};

export default Portfolio;

export const portfolioPageQuery = graphql`
  query PortfolioPageQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/entry/"}}}, sort: {order: DESC, fields: frontmatter___created}) {
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
`

