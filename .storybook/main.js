
// import { addDecorator, configure } from '@storybook/react';

// import StylesDecorator from './styles-decorator';

// addDecorator(StylesDecorator);

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
