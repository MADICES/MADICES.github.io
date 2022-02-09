// eslint-disable-next-line
module.exports = function (context, options) {
    return {
      name: 'custom-docusaurus-plugin',
      // eslint-disable-next-line
      configureWebpack(config, isServer, utils) {
        return {
          resolve: {
            alias: {
              path: require.resolve('path-browserify'),
            },
            fallback: {
              fs: false,
              os: require.resolve('os-browserify/browser'),
            },
          },
        };
      },
    };
  };