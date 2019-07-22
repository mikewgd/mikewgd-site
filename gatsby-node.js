exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [].concat('src', ['node_modules']),
    },
  })
}
