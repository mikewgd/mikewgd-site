exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;    
  if (node.internal.type === 'SitePage') {
    createNodeField({
      node,
      name: `slug`,
      value: node.path,
    });
    console.log(node);
  }
}
