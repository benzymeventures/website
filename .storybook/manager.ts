import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Benzyme Ventures',
    brandUrl: 'https://github.com/benzymeventures',
    brandTarget: '_blank',
  }),
});
