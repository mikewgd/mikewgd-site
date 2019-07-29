import React from 'react';
// import { graphql } from 'gatsby';

import { PageTemplate, Paragraph } from 'components';

const About = ({ data }) => {
  // const { allMarkdownRemark } = data; // data.markdownRemark holds our post data
  // const { frontmatter } = allMarkdownRemark.nodes[0];
  // console.log(frontmatter);

  return (
    <PageTemplate>
      <Paragraph>About</Paragraph>
    </PageTemplate>
  )
};

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(filter: {frontmatter: {title: {eq: "About Page"}}}) {
//       nodes {
//         frontmatter {
//           title
//           pageHeader
//           entryHeader
//         }
//         rawMarkdownBody
//       }
//     }
//   }
// `;

export default About;