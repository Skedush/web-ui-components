module.exports = {
  stories: ['../**/**/*.stories.(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    // '@storybook/addon-console',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
  ],
};
