import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';
import '../src/index.css'

addDecorator(StylesDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [], 
      locales: '', 
    },
  },
}