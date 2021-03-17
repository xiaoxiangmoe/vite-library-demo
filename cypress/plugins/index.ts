// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
import type {} from 'cypress';

import * as path from 'path';
import { startDevServer } from '@cypress/vite-dev-server';

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('dev-server:start', options => {
    return startDevServer({
      options,
      viteConfig: {
        // @ts-expect-error
        configFile: path.resolve(__dirname, '..', '..', 'vite.pages.config.ts'),
      },
    });
  });
};

export default pluginConfig;
