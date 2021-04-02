module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  pwa: {
    name: 'Cognitive',
    short_name: 'Cognitive',
    themeColor: '#005dcc',
    msTileColor: '#005dcc',
    backgroundColor: '#081221',
    manifestOptions: {
      start_url: '/app',
    },
  },
};
