exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        module: {
          use: [
            {
              test: /\.yaml$/,
              include: path.resolve('data'),
              loader: 'yaml'
            }
          ]
        }
      });
  }
};
