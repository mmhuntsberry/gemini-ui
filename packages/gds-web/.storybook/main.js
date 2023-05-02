const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: '@storybook/builder-vite' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  // addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config) => {
    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      (rule) =>
        rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // add your own `my-library`
    webComponentsRule.test.push(
      new RegExp(`node_modules(\\/|\\\\)@nielsen-media(.*)\\.js$`)
    );

    return config;
  },
};
