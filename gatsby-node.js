const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [].concat('src', ['node_modules']),
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/entry/"}}}, sort: {order: DESC, fields: frontmatter___created}) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const entries = result.data.allMarkdownRemark.nodes.map(item => {
      const { id } = item;
      const { slug } = item.fields;
  
      return {
        id,
        slug
      }
    });

    entries.forEach(entry => {
      const { id, slug } = entry;
      createPage({
        path: slug,
        component: path.resolve(`src/pages/portfolio/entry.js`),
        context: {
          id,
        },
      })
    })

  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
