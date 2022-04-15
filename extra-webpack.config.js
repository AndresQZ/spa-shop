const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  singleSpaWebpackConfig.externals = [/^@web-taxco\/spa-shared-state$/];
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
