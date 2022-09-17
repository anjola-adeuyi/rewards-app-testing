export default {
  e2e: {
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    viewPortWidth: 1920,
    viewPortHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
