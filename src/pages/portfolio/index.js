import React from 'react';
import { graphql } from 'gatsby';

import { PageTemplate, EntryCardList, EntryCard, Heading } from 'components';
// import { renderMarkdown } from '../../utils/renderMarkdown';

const Portfolio =  ({ data }) => {
  console.log(data)
  const { fields } = data.layout.nodes[0];
  // const { pageHeader } = fields.frontmattermd;
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
      {/* <Heading.H1
        margin="30px 0"
        desktopMargin="35px 0 60px 0"
      >
        {renderMarkdown(pageHeader.html)}
      </Heading.H1> */}
      <EntryCardList
        margin="20px 0 0"
        desktopMargin="50px 0 0"
      >
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
    layout: allMarkdownRemark(limit: 1, filter: {fields: {slug: {eq: "/portfolio/"}}}) {
      nodes {
        fields {
          frontmattermd {
            pageHeader {
              html
            }
          }
        }
      }
    }

    entries: allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/entry/"}}}, sort: {order: DESC, fields: frontmatter___created}) {
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

