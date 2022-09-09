import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: false,
    video: true,
    videosFolder: './cypress/results/videos',
    screenshotsFolder: './cypress/results/screenshots',
    supportFile: './cypress/support.ts',
    specPattern: './cypress/**/*.e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'http://localhost:4200/',
    defaultCommandTimeout: 30000,
    execTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    taskTimeout: 30000
  }
});
